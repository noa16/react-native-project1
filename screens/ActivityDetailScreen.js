import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  Appearance,
} from "react-native";

import { ACTIVITY_DETAILS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/actions";
const ActivityDetailScreen = (props) => {
  const activityId = props.navigation.getParam("activityId");
  const name = props.navigation.getParam("name");
  const location = props.navigation.getParam("location");
  const age = props.navigation.getParam("age");
  const nameActivity = props.navigation.getParam("selectedActivity");
  const selectedActivity = ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
  );

  const dispatch = useDispatch();

  const addActivityToFavorite = useCallback(() => {
    console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnn");
    dispatch(actions.favoriteActivity(location, age, nameActivity, activityId));
  }, [dispatch]);

  useEffect(() => {
    console.log("use effect");
    props.navigation.setParams({ addFavorite: addActivityToFavorite });
  }, [addActivityToFavorite]);

  const displayActivity = (name, location, age) => {
    return (
      <View>
        {ACTIVITY_DETAILS.map((act) => {
          if (
            act.location === location &&
            (act.age === age || act.age < age) &&
            act.title === nameActivity
          ) {
            return (
              <React.Fragment>
                <View style={styles.containerData}>
                  <Text style={{ fontFamily: "open-sans-bold" }}>
                    {act.location.toUpperCase()}
                  </Text>
                  <Text style={{ fontFamily: "open-sans-bold" }}>
                    {act.title.toUpperCase()}
                  </Text>
                  <Text style={{ fontFamily: "open-sans-bold" }}>
                    +{act.age}
                  </Text>
                  <Text style={{ fontFamily: "open-sans-bold" }}>
                    {act.price}
                  </Text>
                </View>
                <Image
                  source={
                    {
                      //  uri:
                      //"https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    }
                  }
                  style={styles.image}
                />
              </React.Fragment>
            );
          }
        })}
      </View>
    );
  };

  useEffect(() => {
    props.navigation.setParams({ activityTitle: selectedActivity.title });
  }, [selectedActivity]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedActivity.imageUrl }} style={styles.image} />
      <View style={styles.details}></View>
      <Text style={styles.title}>ACTIVITIES NEAR BY</Text>
      <View style={styles.containerTitle}>
        <Text>Location</Text>
        <Text>Activity</Text>
        <Text>Age</Text>
        <Text>Price</Text>
      </View>
      <View>{displayActivity(name, location, age)}</View>
    </ScrollView>
  );
};

ActivityDetailScreen.navigationOptions = (navigationData) => {
  const activityId = navigationData.navigation.getParam("activityId");
  const activityTitle = navigationData.navigation.getParam("activityTitle");
  const favoriteFn = navigationData.navigation.getParam("addFavorite");
  const selectedActivity = ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
  );

  return {
    headerTitle: activityTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => favoriteFn()}
          style={{ color: "white" }}
        />
      </HeaderButtons>
    ),
  };
};

styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  containerData: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default ActivityDetailScreen;
