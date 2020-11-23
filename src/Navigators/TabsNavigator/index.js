import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from 'react-native';
import {EditPage,Settings,Profile} from '../../Screens'

const {Navigator, Screen} = createBottomTabNavigator();


export const TabsNavigator = () => {
 
    return (
        <Navigator
            initialRouteName="Main"
            tabBarOptions={{
                activeTintColor: '#255F92',
                tabBarIcon: {opacity: 1},
                tabStyle: {
                    backgroundColor: '#FFFFFF',
                    top: -3,
                    borderTopWidth: 1,
                    borderColor: '#D3D3D3'
                },
                labelStyle: {
                    marginBottom: 3
                }
            }}
        >
            <Screen
                name="Main"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => {

                        let icStyle = focused ?  styles.focus :  styles.unFocus

                        return <Image style={{...styles.Icon, ...icStyle}} source={require('../../Images/icons8-предсказатель-30.png')}/>
                    },
                }}
            />
            <Screen
                name="EditPage"
                component={EditPage}
                options={{
                    tabBarIcon: ({focused}) => {
                        let icStyle = focused ?  styles.focus :  styles.unFocus
                        return <Image style={{...styles.Icon, ...icStyle}} source={require('../../Images/icons8-стереть-64.png')}/>
                    },
                }}
            />
            <Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => {
                        let icStyle = focused ?  styles.focus :  styles.unFocus
                        return <Image style={{...styles.Icon, ...icStyle}} source={require('../../Images/icons8-поддержка-48.png')}/>
                    },
                }}
                
            />
        </Navigator>
    );
}


const styles = {
    Icon: {
        width: 25,
        height: 25,
    },
    focus:{
        opacity: 1,
        tintColor: '#FF7F50'
    },
    unFocus:{
        opacity: 0.5,
        tintColor: '#6d6d74'
    }
};