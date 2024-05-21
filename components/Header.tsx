import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Header({setTime,setCurrentTime,currentTime}){

  const options =["Pomodoro", "Short Break", "Long Break"]

  function handleShow(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 :15;
    setCurrentTime(index)
    setTime(newTime*60)
  }


  return (
    <View style={styles.containerOption}>
       {options.map((item,index)=>
          <TouchableOpacity
           key={index}
           style={[styles.options, currentTime !== index && { borderWidth:0}]}
           onPress={()=>handleShow(index)}
           >
           <Text style={ {fontWeight:"bold"}}>{item}</Text> 
          </TouchableOpacity>
        )}
    </View>
  );
}
const styles = StyleSheet.create({
  containerOption:{
    flexDirection:"row",
    marginTop:30,

  },
    options:{
      flex:1,
      padding:7,
      borderWidth:2,
      borderRadius:7,
      alignItems:"center",
      marginHorizontal:3,
     
    }

  })