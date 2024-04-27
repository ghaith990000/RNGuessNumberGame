import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'OpenSans',
        color: Colors.accent500,
        fontSize: 24
    },
})