import React, {  useReducer, useState ,useCallback} from "react";
import { useDispatch } from "react-redux";
import {submitHandler} from '../Logic/SearchLogic'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import TextInputStyle from '../UI/TextInputStyle'
import Card from '../UI/Card'
import ButtonSearch from "../UI/ButtonSearch";


const FORM_INPUT_UPDATE = "UPDATE";
const IS_VALID_FORM = "IS_VALID_FORM";
const INPUT_FIELDS=["name","Age","location"]

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    console.log("input update"+action.input)
    const updatedValues = {
      ...state.inputValues,
      [action.value]: action.input,
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

  const inputChangeHandler = (inputIdentifier, text) => {
    dispatch({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: true,
      input: inputIdentifier,
    });
  };
  return (
    <View style={styles.container}>
      <Card
       
      
      
      
      >
      
      <View style={styles.inputContainer}>
        
        {INPUT_FIELDS.map((InputField)=>{
          
          return(
            <View>
            <Text style={styles.txtInputName}>{InputField}</Text>
            <TextInputStyle inputChangeHandler={inputChangeHandler} InputField={InputField}/>
            </View>
          )
        })}
  
        {!formState.formIsValid && <Text>Please enter a valid input </Text>}
        <ButtonSearch
          onSelect={()=>submitHandler(formState,props,dispatchRedux,actId)
          }
         
        />
      </View>
      </Card>
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
  

 
  txtInputName: {
    marginLeft: 275,
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    marginTop: 25,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default SearchActivity;