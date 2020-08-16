import React, { useEffect, useCallback, useState } from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  Button,
} from "react-native";

import { ACTIVITY_DETAILS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actions";
const ActivityDetailScreen = (props) => {
  const activityId = props.navigation.getParam("activityId");
  const name = props.navigation.getParam("name");
  const location = props.navigation.getParam("location");
  const age = props.navigation.getParam("age");
  const nameActivity = props.navigation.getParam("selectedActivity");
  var isSignes = false;
  const selectedActivity = ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
  );
  const { id } = ACTIVITY_DETAILS.find(
    (activity) =>
      activity.activityId === activityId && activity.location === location
  );

  const idOfPauseActivity = useSelector(
    (state) => state.activities.activityToPause
  );

  Object.keys(idOfPauseActivity).map((item) => {
    if (id === idOfPauseActivity[item]) {
      console.log(id + "kkkkkkkkkkkkkkkkkkk");
      //setSigned(true);
      isSignes = true;
    }
  });

  const dispatch = useDispatch();

  const addActivityToFavorite = useCallback(() => {
    Alert.alert("Added To Favorite");
    dispatch(actions.favoriteActivity(location, age, nameActivity, activityId));
  }, [dispatch]);

  useEffect(() => {
    //only once not recreate when the father recreate
    console.log("use effect");
    props.navigation.setParams({ addFavorite: addActivityToFavorite });
  }, [addActivityToFavorite]);

  const registerHandler = useCallback(async () => {
    Alert.alert("signed to the activity success" + activityId);
    await dispatch(
      actions.RegisterToActivity(location, age, nameActivity, activityId)
    );
    await dispatch(actions.DeleteActivity(id));
  }, [dispatch]);

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
                  <Text style={{ fontFamily: "open-sans-bold", fontSize: 15 }}>
                    {act.location.toUpperCase()}
                  </Text>
                  <Text>Location:</Text>

                  <Text style={{ fontFamily: "open-sans-bold", fontSize: 15 }}>
                    +{act.age}
                  </Text>
                  <Text>Age:</Text>

                  <Text style={{ fontFamily: "open-sans-bold", fontSize: 15 }}>
                    {act.price}$
                  </Text>
                  <Text>Price:</Text>
                </View>
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
      <View style={styles.containerTitle}></View>
      <View>{displayActivity(name, location, age)}</View>
      {isSignes === false ? (
        <Button title="Sign Up" onPress={() => registerHandler()}></Button>
      ) : (
        <Text>Already sign in!</Text>
      )}
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
