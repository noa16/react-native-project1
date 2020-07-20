import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ACTIVITY } from "../data/dummy-data";
import Colors from "../constants/Colors";
import ActivityGrid from "../components/ActivityGrid";

const ActivityScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <ActivityGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "GroupsActivity",
            params: {
              activityId: itemData.item.id, //forward the data to the new screen we navigate
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList numColumns={2} data={ACTIVITY} renderItem={renderGridItem} />
  );
};

ActivityScreen.navigationOptions = {
  headerTitle: "Activities",
};

styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
});

export default ActivityScreen;
