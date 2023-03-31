import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants";
import TimerDisplay from "./components/timer/TimerDisplay";
import PrimaryButton from "./components/ui/Button";
import { useState, useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {

  const [isFontsLoaded] = useFonts({
    'digitalFont': require("./assets/fonts/digital-7.ttf")
  });


  const [progressTimeTitle, setProgressTimeTitle] = useState("Start");
  const [startTimeStatus, setStartTimeStatus] = useState(false);
  const isStartButtinTrigger = useRef();
  const progressTime = useRef();
  const progressTimeIncrement = useRef();
  const [progressTimeSec, setProgressTimeSec] = useState(0);
  const [btnColor, setBtnColor] = useState();

  useEffect(() => {
    if (isStartButtinTrigger.current) {
      if (!startTimeStatus) {
        handleTimeStop();
      } else {
        setProgressTimeTitle("Stop");
        setBtnColor(Colors.primary300);
      }
    }
  }, [startTimeStatus]);

  const handleTimeStart = () => {
    setStartTimeStatus(!startTimeStatus);
    if (!startTimeStatus) {
      isStartButtinTrigger.current = true;
      progressTimeIncrement.current = progressTimeIncrement.current
        ? progressTimeIncrement.current
        : 0;
      progressTime.current = setInterval(() => {
        progressTimeIncrement.current = progressTimeIncrement.current + 1;
        setProgressTimeSec(progressTimeIncrement.current);
      }, 10);
    }
  };

  const handleTimeStop = () => {
    clearInterval(progressTime.current);
    setProgressTimeTitle("Start");
    setBtnColor(Colors.primary600);
  };

  const handleTimeReset = () => {
    setProgressTimeSec(0);
    setStartTimeStatus(false);
    progressTimeIncrement.current = 0;
    handleTimeStop();
  };

  const formatTime = () => {
    const hours = Math.floor(progressTimeSec / 36000000);
    const minutes = Math.floor(progressTimeSec / 6000);
    const seconds = Math.floor((progressTimeSec % 6000) / 100);
    const milliseconds = Math.floor(progressTimeSec % 100);
    return {
      hours,
      minutes,
      seconds,
      milliseconds
    }
  };
  if (!isFontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
        colors={[Colors.primary200, Colors.primary300]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images/stop-watch.jpg")}
          style={styles.container}
          imageStyle={styles.image}
        >
          <SafeAreaView>
            <TimerDisplay time={formatTime(progressTimeSec)} />
          </SafeAreaView>
          <SafeAreaView style={styles.buttonsContainer}>
            <SafeAreaView style={styles.buttonContainer}>
              <PrimaryButton onPress={handleTimeStart} color={btnColor}>
                {" "}
                {progressTimeTitle}{" "}
              </PrimaryButton>
            </SafeAreaView>

            <SafeAreaView style={styles.buttonContainer}>
              <PrimaryButton
                color={Colors.primary700}
                onPress={handleTimeReset}
              >
                {" "}
                Reset{" "}
              </PrimaryButton>
            </SafeAreaView>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
