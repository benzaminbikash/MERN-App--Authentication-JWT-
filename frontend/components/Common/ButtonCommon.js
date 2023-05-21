import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const ButtonCommon = props => {
  return (
    <TouchableOpacity
      onPress={props.button}
      activeOpacity={0.8}
      style={{
        width: '80%',
        alignSelf: 'center',
        backgroundColor: props.bg,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        elevation: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: props.color,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonCommon
