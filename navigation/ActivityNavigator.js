import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ActivityScreen from "../screens/ActivityScreen";
import GroupActivityScreen from "../screens/GroupActivityScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import Color from "../constants/Colors";
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
        backgroundColor: Color.primaryColor,
      },
    },
  }
);

export default createAppContainer(ActivityNavigator);
