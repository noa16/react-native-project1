import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { ACTIVITY, ACTIVITY_DETAILS } from "../data/dummy-data";
import ActivityItem from "../components/ActivityItem";
import ActivityList from "../components/ActivityList";
import SearchActivity from "../components/SearchActivity";
import {selectedActivity} from '../Logic/Function'
const GroupActivityScreen = (props) => {
  const actId = props.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY.find((act) => act.activityId === actId);
  const [nameActivity, setNameActivity] = useState(selectedActivity.title);
 

  return (
    <React.Fragment>
      <ActivityList
        listData={ACTIVITY_DETAILS}
        navigation={props.navigation}
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
  const Activity =selectedActivity(actId);
  return {
    headerTitle: Activity.title,
  };
};

const styles = StyleSheet.create({
  signupContainer: {
    marginBottom: 290,
  },
});

export default GroupActivityScreen;
