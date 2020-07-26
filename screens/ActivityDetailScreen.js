import React from "react";
import { View, Text, FlatList, StyleSheet, Appearance } from "react-native";
import { ACTIVITY_DETAILS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const ActivityDetailScreen = (props) => {
  const activityId = props.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
  );
  return (
    <View>
      <Text>{selectedActivity.title}</Text>
    </View>
  );
};

ActivityDetailScreen.navigationOptions = (navigationData) => {
  const activityId = navigationData.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
  );
  return {
    headerTitle: selectedActivity.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("bkads");
          }}
          style={{ color: "white" }}
        />
      </HeaderButtons>
    ),
  };
};

styles = StyleSheet.create({});

export default ActivityDetailScreen;
