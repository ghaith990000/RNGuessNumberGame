import { TextInput, View, StyleSheet, Pressable } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1 , height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.7

    }
});