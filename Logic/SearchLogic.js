 
import {inputFieldSearch} from '../store/actions/actions'
 import {
  Alert} from "react-native";

 export const submitHandler = ((formState,props,dispatch,actId) => {
    console.log("submit handler"+formState.inputValues.name)
    if (formState.inputValues.Age===0 || formState.inputValues.location==="" || formState.inputValues.name==="") {
     
      formState.isValid=false
      Alert.alert("worng Input!!", "please check the errors in the form", [
        { text: "Okey" },
      ]);
    } else {

      dispatch(inputFieldSearch(formState.inputValues.name,formState.inputValues.Age,formState.inputValues.location,actId))
      props.navigation.navigate({
        routeName: "GroupsActivity",
        params: {
          activityId: actId,
         
        },
      });
    }
    
  })