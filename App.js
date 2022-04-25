import Login from './screens/auth/Login'
import Signup from './screens/auth/Signup'
import Profile from './screens/profile/Profile'
import EditProfile from './screens/profile/EditProfile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import ChipsVersion from './screens/chip/ChipsVersion'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login" screenOptions={{
    //     // headerLeft: () => (<Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>Life Guard</Text>),
    //     headerRight: () => (<Entypo name="info" size={20} color="black" />),
    //     headerTitleAlign: "center",
    //     // headerBackVisible: false
    //   }}>
    //     <Stack.Screen name='Login' component={Login} />
    //     <Stack.Screen name='Signup' component={Signup} />
    //     <Stack.Screen name='Profile' component={Profile} />
    //     <Stack.Screen name='EditProfile' component={EditProfile} />
    //   </Stack.Navigator>
    //   {/* <Tab.Navigator initialRouteName="Login">
    //     <Tab.Screen name='Login' component={Login} options={{ title: "Login" }} />
    //     <Tab.Screen name='Signup' component={Signup} options={{ title: "Signup" }} />
    //     <Tab.Screen name='Profile' component={Profile} options={{ title: "Profile" }} />
    //   </Tab.Navigator> */}
    // </NavigationContainer>
    <ChipsVersion />
  );
}
