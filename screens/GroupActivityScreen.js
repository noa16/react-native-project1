import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { ACTIVITY, ACTIVITY_DETAILS } from "../data/dummy-data";
import ActivityItem from "../components/ActivityItem";

const GroupActivityScreen = (props) => {
  const actId = props.navigation.getParam("activityId");
  const selectedActivity = ACTIVITY.find((act) => act.id === actId);

  const displayActivity = ACTIVITY_DETAILS.find(
    (act_details) => act_details.activityId === actId
  );
  console.log(displayActivity.id);
  const renderActivityItem = (itemData) => {
    if (itemData.item.id === displayActivity.id) {
      return (
        <ActivityItem
          price={itemData.item.price}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ActivityDetail",
              params: {
                activityId: itemData.item.activityId,
              },
            });
          }}
          location={itemData.item.location}
          time={itemData.item.time}
          title={itemData.item.title}
          days={itemData.item.days}
          image={itemData.item.imageUrl}
        />
      );
    }
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={ACTIVITY_DETAILS}
        renderItem={renderActivityItem}
        style={{ width: "100%" }}
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
