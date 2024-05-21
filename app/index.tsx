import BodyPomo from "@/components/BodyPomo";
import Header from "@/components/Header";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("Pomo" | "short" | "large");
  const [isActive, setIsActive] = useState(false);
  const color = ["#F7DC6F","#A2D9CE","#D7BDE2"]


  return (
    <SafeAreaProvider>
      <View style={[styles.containerMain,  {backgroundColor: color[currentTime]}]}>
        <Text style={styles.title}>Pomodoro</Text>
        <Header setTime={setTime} setCurrentTime={setCurrentTime} currentTime={currentTime} />
        <BodyPomo time={time} setIsActive ={setIsActive} isActive ={isActive} setTime={setTime} currentTime={currentTime}/>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
  containerMain: {
    padding: 18,
    flex: 1,
  },
});
