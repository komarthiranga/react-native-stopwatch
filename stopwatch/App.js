import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from './constants';
import TimerDisplay from "./components/timer/TimerDisplay";
import PrimaryButton from "./components/ui/Button";


export default function App() {
  return (
    <LinearGradient colors={[Colors.primary200, Colors.primary300]} style={styles.container}>
      <ImageBackground source={require("./assets/images/stop-watch.jpg")} style={styles.container} imageStyle={styles.image}>
        <SafeAreaView>
          <TimerDisplay />
        </SafeAreaView>
        <SafeAreaView style={styles.buttonsContainer}>
          <SafeAreaView style={styles.buttonContainer}>
              <PrimaryButton> Start </PrimaryButton>
          </SafeAreaView>
          <SafeAreaView style={styles.buttonContainer}>
              <PrimaryButton> Reset </PrimaryButton>
          </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.5
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
