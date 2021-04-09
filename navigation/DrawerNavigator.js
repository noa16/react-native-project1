import React from "react";
import DrawerNavigator from "react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from '../screens/Login'
import AboutScreen from '../screens/About'
import createDrawerNavigator from "react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator";

const userNavigator = createStackNavigator(
    {

        Login:{
            screen:LoginScreen
        },
        About:{
            screen:AboutScreen
        }

    }




)

const userNavigatorDrawer= createDrawerNavigator({

    userScreen:userNavigator 
})

export default createAppContainer(userNavigatorDrawer);