import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Audio} from "expo-av"

export default function BodyPomo({time,setIsActive, isActive,setTime,currentTime}){

    const refactorTime = `${Math.floor(time / 60).toString().padStart(2,"0")}: ${(time % 60).toString().padStart(2,"0")}`

    const optionsTimes = {
        0: 25,
        1: 5,
        2: 15,
    };

    function handleActive() {
        audioClick()
        setIsActive(!isActive)

    }

    async function audioClick() {
        const { sound } = await Audio.Sound.createAsync(
            require("../assets/sounds/mouse-click-117076.mp3")
        );
        await sound.playAsync()
    }

    useEffect(()=>{
        let interval = null

        if(isActive){
            interval =  setInterval(()=>{
                setTime(time-1);
            },1000)
        }else{
            clearInterval(interval);
        }
        if(time === 0){
            setIsActive(false)
        	setTime(optionsTimes[currentTime] * 60);

        }
        return ()=>clearInterval(interval)
    },[isActive,time])

    return(
        <>
         <View style={styles.containerBody}>
            <Text style={styles.textBody} >{refactorTime}</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
        >
        <Text 
        onPress={()=>handleActive()}
        style={styles.textButton}>{isActive ? "Stop" : "Run"}</Text>
        </TouchableOpacity>
        </>
       
        
    );

    
}
const styles = StyleSheet.create({
    containerBody:{
        flex:0.5,
        marginVertical:30,
        justifyContent:"center",
        alignContent:"center",
        borderRadius:15,
        backgroundColor:"#f6f6f6"    },
    textBody:{
        textAlign:"center",
        fontSize:70,
        fontWeight:"bold"

    },
    button:{
        padding:15,
        backgroundColor:"#cd1ab5",
        borderRadius:15,
    },
    textButton:{
        color:"#f6f6f6",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center"
    }
})