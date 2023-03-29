import { Pressable, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const PrimaryButton = ({children}) => {
    return(
        <SafeAreaView>
            <Pressable style={styles.container}>
                 <Text style={styles.text}>{children}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
        borderWidth: 1,
        borderColor: Colors.primary600,
        borderRadius: 15,
        backgroundColor: Colors.primary600,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary400,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 2
   },

   text: {
    color: Colors.primary500,
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold'
   }
})

export default PrimaryButton;