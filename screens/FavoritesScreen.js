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
import ActivityFavList from "../components/ActivityFavList";
import { ACTIVITY_DETAILS } from "../data/dummy-data";
const FavoritesScreen = (props) => {
  const favActivity = ACTIVITY_DETAILS.filter(
    (activity) => activity.activityId === "c8" || activity.activityId === "c7"
  );

  return (
    <ActivityFavList listData={favActivity} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  title: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default FavoritesScreen;
