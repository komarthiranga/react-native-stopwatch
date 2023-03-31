import Card from "../ui/Card";
import { Colors } from "../../constants";
import { StyleSheet, SafeAreaView, Text, Animated } from "react-native";
import { useRef, useEffect } from "react";

const TimerDisplay = ({ time }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 10,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [fadeAnim]);

  return (
    <Card>
      <SafeAreaView style={styles.timeDisplayContainer}>
        {/* <Animated.View style={{opacity: fadeAnim}}> */}
        <Text style={styles.time}>
          {time.hours < 10 ? "0" : ""}
          {time.hours}:
        </Text>
        <Text style={styles.time}>
          {time.minutes < 10 ? "0" : ""}
          {time.minutes}:
        </Text>

        <Text style={styles.time}>
          {time.seconds < 10 ? "0" : ""}
          {time.seconds}.
        </Text>
        <SafeAreaView style={styles.millisecondsTimeContainer}>
          <Text style={styles.millisecondsTime}>
            {time.milliseconds < 10 ? "0" : ""}
            {time.milliseconds}
          </Text>
        </SafeAreaView>
        {/* </Animated.View> */}
      </SafeAreaView>
    </Card>
  );
};
const styles = StyleSheet.create({
  timeDisplayContainer: {
    margin: 24,
    flexDirection: 'row'
  },
  time: {
    color: Colors.primary500,
    fontSize: 72,
    fontWeight: "bold",
    fontFamily: "digitalFont",
  },
  millisecondsTimeContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 8
  },
  millisecondsTime: {
    color: Colors.primary500,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "digitalFont",
  }
});

export default TimerDisplay;
