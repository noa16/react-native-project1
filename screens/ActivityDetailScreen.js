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
import ActivityDetailsView from './ActivityDetailesView'
import {selectedActivity,findActivityByIdLocation} from '../Logic/Function'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actions";
const ActivityDetailScreen = (props) => {
  const activityId = props.navigation.getParam("activityId");
  const nameActivity = props.navigation.getParam("selectedActivity");
  const [error, setError] = useState(false);
  const [isSignes,setSignes] = useState(false)
 

   const searchInput = useSelector(
    (state) => state.activities.infoFromInputFiels
  );
  const isLogin = useSelector(
    (state)=>state.userReducer.isLogin)

  const username = useSelector(
    (state)=>state.userReducer.username
  )
  
  const password = useSelector(
    (state)=>state.userReducer.password
  )
  const selectedActivityDetailes=selectedActivity(activityId)
  const id  = findActivityByIdLocation(activityId,searchInput.location)
  

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
    dispatch(actions.favoriteActivity(searchInput.location, searchInput.age, nameActivity, activityId));
  },[searchInput.location,dispatch,searchInput.age,nameActivity,activityId]);

  useEffect(() => {
    //only once not recreate when the father recreate
    console.log("use effect");
    props.navigation.setParams({ addFavorite: addActivityToFavorite });
  }, [addActivityToFavorite]);//called when the function addActivityTo created

  const registerHandler = useCallback(async () => {
    if(isLogin){
    try {
      await dispatch(
        actions.RegisterToActivity(searchInput.location,searchInput.age, nameActivity, activityId,username,password)
      );
      await dispatch(actions.DeleteActivity(id));
      await  setSignes(true)
      

      Alert.alert("signed to the activity success" + activityId);
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  else{
     Alert.alert("You need to login first" + activityId);
     setError(true);
  }
  }, [dispatch]);

  

  useEffect(() => {
    console.log("selected activity")
    props.navigation.setParams({ activityTitle: selectedActivityDetailes.title });
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri:selectedActivityDetailes.imageUrl }} style={styles.image} />
      <View style={styles.details}></View>
      <View style={styles.containerTitle}></View>
    
      <ActivityDetailsView nameActivity={nameActivity} location={searchInput.location} age={searchInput.age}/>
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
 
});

export default ActivityDetailScreen;
