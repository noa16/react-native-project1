import React, {  useReducer, useState ,useCallback} from "react";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import {submitHandler} from '../Logic/SearchLogic'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import * as ActivityAction from "../store/actions/actions";
import ButtonSearch from "../UI/ButtonSearch";
import { block } from "react-native-reanimated";

const FORM_INPUT_UPDATE = "UPDATE";
const IS_VALID_FORM = "IS_VALID_FORM";
const INPUT_FIELDS=["name","Age","location"]

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    console.log("input update")
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    return {
      ...state,
      inputValues: updatedValues,
      formIsValid: action.isValid,
    };
  }
  if (action.type === IS_VALID_FORM) {
    return { ...state, formIsValid: action.isValid };
  }
  return{
    ...state
  }
};

const SearchActivity = (props) => {
  
  const dispatchRedux= useDispatch()
  const actId = props.navigation.getParam("activityId");

  const [formState, dispatch] = useReducer(formReducer, {
    inputValues: {
      Age: 0,
      name: "",
      location: "",
    },

    formIsValid: true,
  });

  const textChangeHandler = (inputIdentifier, text) => {
    dispatch({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: true,
      input: inputIdentifier,
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        
        {INPUT_FIELDS.map((InputField)=>{
          
          return(
            <View>
            <Text style={styles.txtInputName}>{InputField}</Text>
            <TextInput
            style={styles.input}
            onChangeText={(input)=>textChangeHandler(InputField,input)}>

            </TextInput>
            </View>
          )
        })}
  
        {!formState.formIsValid && <Text>Please enter a valid input </Text>}
        <ButtonSearch
          onSelect={()=>submitHandler(formState,props,dispatchRedux,actId)}
        />
      </View>
    </View>
  );
};

SearchActivity.navigationOptions = {
  headerTitle: "Search",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },

  txtInputAge: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    marginLeft: 300,
  },
  txtInputLocation: {
    marginLeft: 275,
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  txtInputName: {
    marginLeft: 275,
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  image: {
    width: "100%",
    height: 160,
  },
  inputContainer: {
    marginTop: 25,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default SearchActivity;