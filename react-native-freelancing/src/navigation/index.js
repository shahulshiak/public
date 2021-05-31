import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';

import LoginScreen from '../screens/Login/Login';
import HomeScreen from '../screens/Home/Home';
import navConsts from './nav-consts';

const RootStack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        initialRouteName={navConsts.auth.Auth}>
        <RootStack.Screen
          name={navConsts.auth.Auth}
          component={AuthenticationNavigator}
        />
        <RootStack.Screen name={navConsts.app.App} component={AppNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const AuthenticationStack = createStackNavigator();
function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName={navConsts.auth.Login}>
      <AuthenticationStack.Screen
        name={navConsts.auth.Login}
        component={LoginScreen}
      />
    </AuthenticationStack.Navigator>
  );
}

const AppStack = createDrawerNavigator();
function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={navConsts.app.Home} component={HomeScreen} />
    </AppStack.Navigator>
  );
}
