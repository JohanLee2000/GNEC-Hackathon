import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Import screens
import HomeScreen from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Achievements from './screens/Achievements';
import OffsetLog from './screens/OffsetLog';

import ProfileHeader from './buttons/profileHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          header: () => <ProfileHeader navigation={navigation} />
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Profile' }}
      />
      <Stack.Screen
        name="OffsetLog"
        component={OffsetLog}
        options={{
          headerTitle: 'Offset Log', 
          presentation: 'modal'
        }}

      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        
        <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Achievements" component={Achievements} />
          <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
