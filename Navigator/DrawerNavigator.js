import React from 'react'
import { View, Text } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Tabnavigator from './TabNavigator'
import Profile from '../screens/Profile'
const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Tabnavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>

        </Drawer.Navigator>
    )
}
export default DrawerNavigator
