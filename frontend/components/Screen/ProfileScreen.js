import {View, Text, Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'

const ProfileScreen = () => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation()
  useEffect(() => {
    handleProfile()
  }, [email])
  const handleProfile = async () => {
    const token = await AsyncStorage.getItem('token')
    const data = await fetch('http://192.168.1.68:8000/user', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
    const newData = await data.json()
    setEmail(newData.userEmail)
  }
  const logoutUser = async () => {
    await AsyncStorage.removeItem('token')
    navigation.replace('Login')
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        ProfileScreen
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Your Email Id is: {email}
      </Text>
      <Button title='Logout' onPress={() => logoutUser()} />
    </View>
  )
}

export default ProfileScreen
