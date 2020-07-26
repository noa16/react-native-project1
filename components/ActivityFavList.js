import React from "react";
import ActivityItem from "../components/ActivityItem";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";

const ActivityFavList = (props) => {
  const renderActivityItem = (itemData) => {
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
  };
  return (
    <View>
      <FlatList
        data={props.listData}
        renderItem={renderActivityItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default ActivityFavList;
