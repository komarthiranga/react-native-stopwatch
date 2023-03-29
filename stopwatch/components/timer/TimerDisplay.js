import Card from "../ui/Card";
import { Colors } from '../../constants'
import { StyleSheet, SafeAreaView, Text } from "react-native";

const TimerDisplay = () => {
    return(
        <Card>
            <SafeAreaView style={styles.timeDisplayContainer}>
                <Text style={styles.time}>00:00:00</Text>
            </SafeAreaView>
      </Card>
    )
}
const styles = StyleSheet.create({
    timeDisplayContainer: {
        margin: 24
      },
      time: {
        color: Colors.primary500,
        fontSize: 42,
        fontWeight: 'bold'
      }
})

export default TimerDisplay;