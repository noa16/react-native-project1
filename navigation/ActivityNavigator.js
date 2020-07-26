import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import ActivityScreen from "../screens/ActivityScreen";
import GroupActivityScreen from "../screens/GroupActivityScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Color from "../constants/Colors";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Platform } from "react-native";
const ActivityNavigator = createStackNavigator(
  {
    Activity: {
      screen: ActivityScreen,
    },
    GroupsActivity: {
      screen: GroupActivityScreen,
    },
    ActivityDetail: ActivityDetailScreen,
  },
  {
    defaultNavigationOptions: {
      //general style dosent change from screen to screen
      headerStyle: {
        mode: "modal",
      },
    },
  }
);

const favNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    ActivityDetail: ActivityDetailScreen,
  },
  {
    defaultNavigationOptions: {
      //general style dosent change from screen to screen
      headerStyle: {
        mode: "modal",
      },
    },
  }
);

const tabScreenConfig = {
  Activities: {
    screen: ActivityNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: favNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(
        tabScreenConfig,

        {
          tabBarOptions: {
            activeTintColor: Color.accentColor,
          },
        }
      );

export default createAppContainer(Tab);
