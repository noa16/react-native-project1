import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { ACTIVITY } from "../data/dummy-data";
const GroupActivityScreen = (props) => {
  const actId = props.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY.find((act) => act.id === actId);

  return (
    <View style={styles.screen}>
      <Text>group activity screen</Text>
      <Text> {selectedActivity.title}</Text>
      <Button
        title="ACTIVITY DETAILES"
        onPress={() => {
          props.navigation.navigate({
            routeName: "ActivityDetail",
          });
        }}
      />
      <Button
        title="GO BACK"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

GroupActivityScreen.navigationOptions = (navigationData) => {
  //function for dynamic info we cant access props so we use function

  const actId = navigationData.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY.find((act) => act.id === actId);
  return {
    headerTitle: selectedActivity.title,
  };
};

styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GroupActivityScreen;
