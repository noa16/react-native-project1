import React from "react";
import { View, Text, FlatList, StyleSheet, Appearance } from "react-native";
import { ACTIVITY_DETAILS } from "../data/dummy-data";
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
  };
};

styles = StyleSheet.create({});

export default ActivityDetailScreen;
