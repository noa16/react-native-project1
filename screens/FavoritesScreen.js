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
import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const uniqueID = useSelector((state) => state.activities.UniqueId);

  var listIDS = [];
  const favActivities = useSelector(
    (state) => state.activities.favoritesActivity
  );

  const isDisplayed =
    Object.keys(favActivities).length === 0 && uniqueID === 0 ? (
      <View>
        <Text>No Favorite Activity was Found</Text>
      </View>
    ) : (
      <View>
        {Object.keys(favActivities).map((item) => {
          return (
            <View>
              <Text>{favActivities[item].location}</Text>
            </View>
          );
        })}
      </View>
    );
  for (var item in favActivities) {
    console.log(favActivities[item].location + "pp");
  }
  console.log(JSON.stringify(favActivities) + "kkkkkkkkkkkkkkkkkkkkkkk");

  return <View>{isDisplayed}</View>;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
  headerStyle: {
    headerTintColor: "#fff",
  },
};

const styles = StyleSheet.create({
  title: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default FavoritesScreen;
