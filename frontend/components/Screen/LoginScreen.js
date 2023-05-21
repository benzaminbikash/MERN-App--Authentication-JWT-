import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedbackBase,
  Alert,
} from 'react-native'
import React, {useState} from 'react'
import InputText from '../Common/InputText'
import ButtonCommon from '../Common/ButtonCommon'
const {width, height} = Dimensions.get('window')
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigateToProfile = () => {
    navigation.replace('Profile')
  }
  const signinHandler = async () => {
    const data = await fetch('http://192.168.1.68:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    const newData = await data.json()
    if (newData.status === 'error') {
      Alert.alert('Sign In failed', newData.message)
    } else {
      try {
        await AsyncStorage.setItem('token', newData.token)
        navigateToProfile()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: width,
          backgroundColor: 'black',
          height: 200,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 50,
            textAlign: 'center',
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          width: width,
          backgroundColor: '#f80ffc',
          height: '100%',
          marginTop: -48,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <View style={{marginTop: 100, marginLeft: 20}}>
          <InputText
            placeholder='Enter Email'
            onChangeText={t => setEmail(t)}
            value={email}
          />
          <InputText
            placeholder='Enter Password'
            secureTextEntry={true}
            onChangeText={t => setPassword(t)}
            value={password}
          />
          <View style={{marginTop: 30}}>
            <ButtonCommon
              title='Sign In'
              bg='white'
              color='black'
              button={signinHandler}
            />
          </View>
        </View>
        <View
          style={{
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Create an account?
          </Text>
          <Text
            style={{color: 'black', fontWeight: 'bold', fontSize: 18}}
            onPress={() => {
              navigation.replace('Register')
            }}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
