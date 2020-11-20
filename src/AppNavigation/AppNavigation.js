import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile,SignUp,SignIn} from '../Screens'

const Stack = createStackNavigator();



export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
         name="SignUp" 
         component={SignUp}
         options={{
          title: 'Регистрация',
        }}/>
       
        

        <Stack.Screen 
        name="SingIn" 
        component={SignIn}
        options={{
          title: 'Вход',
        }}/>

        <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: 'Профиль Пользователя',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}