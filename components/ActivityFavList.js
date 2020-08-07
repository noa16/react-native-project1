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
  return (
    <View>
      {props.listData.map((item) => {
        return <Text>{item.location}</Text>;
      })}
    </View>
  );
};

export default ActivityFavList;
