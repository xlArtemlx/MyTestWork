import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp,SignIn,EditPage} from '../Screens'
import {TabsNavigator} from '../Navigators/TabsNavigator'


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
        name="EditPage" 
        component={EditPage}
        options={{
          title: 'Вход',
        }}/>

        <Stack.Screen 
        name="Profile" 
        component={TabsNavigator}
        options={{
          title: 'Профиль Пользователя',
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}