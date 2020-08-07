import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { ACTIVITY, ACTIVITY_DETAILS } from "../data/dummy-data";
import ActivityItem from "../components/ActivityItem";
import ActivityList from "../components/ActivityList";
import SearchActivity from "../components/SearchActivity";

const GroupActivityScreen = (props) => {
  const actId = props.navigation.getParam("activityId");
  const location = props.navigation.getParam("location");
  const age = props.navigation.getParam("age");
  const selectedActivity = ACTIVITY.find((act) => act.activityId === actId);
  const [nameActivity, setNameActivity] = useState(selectedActivity.title);
  const displayActivity = ACTIVITY_DETAILS.find(
    (act_details) => act_details.activityId === actId
  );

  return (
    <React.Fragment>
      <ActivityList
        listData={ACTIVITY_DETAILS}
        navigation={props.navigation}
        Age={age}
        Name={props.name}
        location={location}
        selectedActivity={selectedActivity.title}
      />
      <View style={styles.signupContainer}></View>
      <View style={styles.btn}></View>
    </React.Fragment>
  );
};

GroupActivityScreen.navigationOptions = (navigationData) => {
  //function for dynamic info we cant access props so we use function

  const actId = navigationData.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY.find((act) => act.activityId === actId);
  return {
    headerTitle: selectedActivity.title,
  };
};

const styles = StyleSheet.create({
  signupContainer: {
    marginBottom: 290,
  },
});

export default GroupActivityScreen;
