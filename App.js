import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Profile from './screens/profile/Profile';
import EditProfile from './screens/profile/EditProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{ title: "Login" }} />
        <Stack.Screen name='Signup' component={Signup} options={{ title: "Signup" }} />
        <Stack.Screen name='Profile' component={Profile} options={{ title: "Profile" }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ title: "Edit Profile Information" }} />
      </Stack.Navigator>
      {/* <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name='Login' component={Login} options={{ title: "Login" }} />
        <Tab.Screen name='Signup' component={Signup} options={{ title: "Signup" }} />
        <Tab.Screen name='Profile' component={Profile} options={{ title: "Profile" }} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
