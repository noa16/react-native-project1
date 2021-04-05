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
  console.log("nameeeee" + name);
  const location = props.navigation.getParam("location");
  const age = props.navigation.getParam("age");
  const nameActivity = props.navigation.getParam("selectedActivity");
  const [error, setError] = useState(false);
  const [isSignes,setSignes] = useState(false)
 
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

  
  useEffect(()=>{
    console.log("delete sign in")
     Object.keys(idOfPauseActivity).map((item) => {//check the array from the store to see if the user already sign in(for every render)
      console.log(item+"llllllllllllllllllllllll")
        console.log(id + "kkkkkkkkkkkkkkkkkkk");
      if (String(id) === item) {
    
      console.log(item)
      setSignes(true)
    }
  
  });

  },[dispatch,actions.DeleteActivity])
 

  const dispatch = useDispatch();

  const addActivityToFavorite =useCallback(() => {///נרצה שהפונקציה תיווצר מחדש לא כשהמשתמש לוחץ על הכפתור
    console.log('favorite')
    Alert.alert("Added To Favorite");
    dispatch(actions.favoriteActivity(location, age, nameActivity, activityId));
  },[location,dispatch,age,nameActivity,activityId]);

  useEffect(() => {
    //only once not recreate when the father recreate
    console.log("use effect");
    props.navigation.setParams({ addFavorite: addActivityToFavorite });
  }, [addActivityToFavorite]);//called when the function addActivityTo created

  const registerHandler = useCallback(async () => {
    try {
      await dispatch(
        actions.RegisterToActivity(location, age, nameActivity, activityId)
      );
      await dispatch(actions.DeleteActivity(id));
      await  setSignes(true)
      

      Alert.alert("signed to the activity success" + activityId);
    } catch (error) {
      setError(true);
    }
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
                <View style={styles.containerData1}>
                  <Text style={styles.textStyle}>
                    {act.location.toUpperCase()}
                  </Text>
                  <Text>Location:</Text>

                  <Text style={styles.textStyle}>
                    +{act.age}
                  </Text>
                  <Text>Age:</Text>

                  <Text style={styles.textStyle}>
                    {act.price}$
                  </Text>
                  <Text>Price:</Text>
                </View>
                <View style={styles.containerData2}>
                  <Text style={styles.textStyle}>
                    {act.time}
                  </Text>
                  <Text>Time:</Text>
                  <Text style={styles.textStyle}>
                    {act.days}
                  </Text>
                  <Text>Days:</Text>
                </View>
              </React.Fragment>
            );
          }
        })}
      </View>
    );
  };

  useEffect(() => {
    console.log("selected activity")
    props.navigation.setParams({ activityTitle: selectedActivity.title });
  }, []);

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
      {error === true ? (
        <Text style={styles.error}> ERROR:CANT SIGN UP</Text>
      ) : null}
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
  containerData2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
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
  containerData1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  error: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: "red",
    fontFamily: "open-sans-bold",
  },
  textStyle:{
     fontFamily: "open-sans-bold",
      fontSize: 15,

  }
});

export default ActivityDetailScreen;
