import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{ title: "Login" }} />
        <Stack.Screen name='Signup' component={Signup} options={{ title: "Signup" }} />
        <Stack.Screen name='Profile' component={Profile} options={{ title: "Profile" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
