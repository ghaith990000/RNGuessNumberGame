import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: 20,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
    }
})