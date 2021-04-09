import React from "react";
import {
  View,
  Text,
  StyleSheet,
 
} from "react-native";


import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const uniqueID = useSelector((state) => state.activities.UniqueId);

  //var listIDS = [];
  const favActivities = useSelector(
    (state) => state.activities.favoritesActivity
  );

  const isDisplayed =
    Object.keys(favActivities).length === 0 && uniqueID === 0 ? (
      <View>
        <Text style={styles.notFound}>No Favorite Activity was Found</Text>
      </View>
    ) : (
      <View>
        {Object.keys(favActivities).map((item) => {
          return (
            
            <View style={styles.containerData}>
              <Text style={styles.textStyle}>
                {favActivities[item].name}
              </Text>
              <Text>Activity Name:</Text>
              <Text style={styles.textStyle}>
                {favActivities[item].location}
              </Text>
              <Text>Location:</Text>
              <Text style={styles.textStyle}>
                {favActivities[item].age}
              </Text>
              <Text>Age:</Text>
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
  containerData: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    backgroundColor: "#6a5acd",
    height: 30,

    marginTop: 20,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFound: { alignItems: "center", fontSize: 20 },

  textStyle :{
    fontFamily: "open-sans-bold",
    fontSize: 15
  }

});

export default FavoritesScreen;
