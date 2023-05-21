import {View, Text, TextInput} from 'react-native'
import React from 'react'

const InputText = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '80%',
        alignSelf: 'center',
      }}
    />
  )
}

export default InputText
