import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
const Card = ({children}) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1 , height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.7
    }
})