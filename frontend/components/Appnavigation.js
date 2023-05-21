import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RegisterScreen from './Screen/RegisterScreen'
import LoginScreen from './Screen/LoginScreen'
import ProfileScreen from './Screen/ProfileScreen'

const Stack = createNativeStackNavigator()

function AppNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation
