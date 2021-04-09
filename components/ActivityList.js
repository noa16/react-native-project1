import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, View, Button } from "react-native";
import ActivityItem from "../components/ActivityItem";
import {selectedActivity} from '../Logic/Function'
const ActivityList = (props) => {
    const infoFromInputFiels= useSelector(
    (state) => state.activities.infoFromInputFiels
  );
  
  const displayActivity = selectedActivity(infoFromInputFiels.actId)
  
  const renderActivityItem = (itemData) => {
    if (
      itemData.item.activityId === displayActivity.activityId &&
      infoFromInputFiels.location === itemData.item.location
    ) {
      return (
        <ActivityItem
          price={itemData.item.price}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ActivityDetail",
              params: {
                activityId: itemData.item.activityId,
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