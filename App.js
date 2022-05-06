import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/auth/Login'
import Signup from './screens/auth/Signup'
import Profile from './screens/profile/Profile'
import EditProfile from './screens/profile/EditProfile'
import ChipsVersion from './screens/chip/ChipsVersion'
import ChipDetails from './screens/chip/ChipVersionDetails'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Update Profile" component={EditProfile} />
        <Drawer.Screen name="Chips" component={ChipsVersion} />
        <Drawer.Screen name="ChipVersionDetails" component={ChipDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
