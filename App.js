import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/auth/Login'
import Signup from './screens/auth/Signup'
import Profile from './screens/profile/Profile'
import EditProfile from './screens/profile/EditProfile'
import ChipsVersion from './screens/chip/ChipsVersion'
import ChipDetails from './screens/chip/ChipVersionDetails'
import Intro from './screens/intro/Intro';
import ChooseDevice from './screens/intro/ChooseDevice';
import LinkChip from './screens/chip/LinkChip';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Intro" component={Intro} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Update Profile" component={EditProfile} />
        <Drawer.Screen name="ChooseDeviceIntro" component={ChooseDevice} />
        <Drawer.Screen name="LinkShip" component={LinkChip} />
        <Drawer.Screen name="Chips" component={ChipsVersion} />
        <Drawer.Screen name="ChipVersionDetails" component={ChipDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
