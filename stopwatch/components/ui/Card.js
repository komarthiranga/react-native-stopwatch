import { SafeAreaView, StyleSheet} from 'react-native';
import { Colors } from '../../constants'

const Card = ({ children }) => {
    return(
        <SafeAreaView style={styles.container}>
                { children }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 54,
        marginHorizontal: 19,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary300,
        borderRadius: 15,
        backgroundColor: Colors.primary300,
        shadowColor: Colors.primary400,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 2
    }
})

export default Card;