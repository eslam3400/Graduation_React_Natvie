import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
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
import ChipSettings from './screens/chip/ChipSettings';
import ChipUsers from './screens/chip/ChipUsers';
import AddUser from './screens/chip/AddUser';
import ForgetPassword from './screens/auth/ForgetPassword';
import Questions from './screens/chip/Questions';
import Tasks from './screens/tasks/Tasks';
import AddTask from './screens/tasks/AddTask';
import TaskDetails from './screens/tasks/TaskDetails';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen options={{ headerShown: false }} name="Intro" component={Intro} />
          <Stack.Screen options={{ headerBackVisible: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerBackVisible: false }} name="Signup" component={Signup} />
          <Stack.Screen options={{ headerBackVisible: false }} name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Update Profile" component={EditProfile} />
          <Stack.Screen name="ChooseDeviceIntro" component={ChooseDevice} />
          <Stack.Screen name="LinkShip" component={LinkChip} />
          <Stack.Screen name="Chips" component={ChipsVersion} />
          <Stack.Screen name="ChipVersionDetails" component={ChipDetails} />
          <Stack.Screen name="ChipVersionQuestions" component={Questions} />
          <Stack.Screen name="ChipSettings" component={ChipSettings} />
          <Stack.Screen name="ChipUsers" component={ChipUsers} />
          <Stack.Screen name="AddUserToChip" component={AddUser} />
          <Stack.Screen name="Tasks" component={Tasks} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
