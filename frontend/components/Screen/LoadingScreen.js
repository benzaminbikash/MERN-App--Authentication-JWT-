import {View, Text, ActivityIndicator} from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size='large' color='red' />
    </View>
  )
}

export default LoadingScreen
