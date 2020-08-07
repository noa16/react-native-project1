import React, { useEffect, useCallback } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import ActivityItem from "../components/ActivityItem";
import { ACTIVITY_DETAILS } from "../data/dummy-data";
const ActivityList = (props) => {
  const actId = props.navigation.getParam("activityId");
  console.log(actId + "bbbbbbbbbbbbb");
  const displayActivity = ACTIVITY_DETAILS.find(
    (act_details) => act_details.activityId === actId
  );

  const renderActivityItem = (itemData) => {
    if (
      itemData.item.activityId === displayActivity.activityId &&
      props.location === itemData.item.location
    ) {
      return (
        <ActivityItem
          price={itemData.item.price}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ActivityDetail",
              params: {
                activityId: itemData.item.activityId,
                name: props.Name,
                age: props.Age,
                location: props.location,
                selectedActivity: props.selectedActivity,
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
        data={props.listData}
        renderItem={renderActivityItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityList;
