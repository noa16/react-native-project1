import React, {useReducer, useCallback, useEffect } from 'react';
import InputLogin from '../UI/InputLogin'
import Card from '../UI/Card'
import Button from '../UI/ButtonSearch'
import {
  View,
  Text,
  Alert,
StyleSheet,
} from "react-native";
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const VALID_FORM = 'VALID_FORM';
const SET_ERROR ='SET_ERROR'
import {cheackValidity} from '../Logic/LoginLogic'
import { useDispatch, useSelector } from "react-redux";
import * as actionsUser from "../store/actions/User";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
      
    return{
    ...state,
    [action.label]:action.value
    }

  }
  if(action.type===VALID_FORM){
      return{
          ...state,
          formIsValid:action.value
      }

  }
  if(action.type===SET_ERROR){
      return{
          ...state,
          error:action.value
      }
  }
  
};





const Login = (props)=>{


    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
      email: '',
      password: '',
    formIsValid: null,
    error:null
  });


  useEffect(()=>{
  if (formState.error) {
      Alert.alert('An Error Occurred!', formState.error, [{ text: 'Okay' }]);
    }

  },[formState.error])

  const submitHandler=()=>{
    const res = cheackValidity(formState.email,formState.password)
    console.log(res.error)
    if(res.error!=='')
    {
        dispatchFormState({type:SET_ERROR,value:res.error})

    }
    else{

        //check for correct pass and username


        console.log(formState.password+"jgjgfjgfjf")
        dispatch(actionsUser.setUser(formState.email,formState.password))
        props.navigation.navigate({
            routeName:'User',
            params:{
                username:formState.email
            }
        })
    }
  }

 


 const setInput = useCallback((text,label)=>{

      dispatchFormState({ type: FORM_INPUT_UPDATE, value: text,label});
 },[formState])

 

    return(
        <View style={styles.container}  >
            <Card>
            <View style={styles.containerInput} >
                <InputLogin setInput={setInput}   initialValue={''} errorText={'Please enter a valid Username '} label={'email'} id={'Username'}/>  
            </View>
            <View style={styles.containerInput} >
                <InputLogin setInput={setInput}  initialValue={''} errorText={'Please enter a valid password address'} label={'password'} id={'Password'} />
            </View>
             </Card>
             <View style={styles.btnContainer}>
                 <Button onSelect={submitHandler} />
                
             </View>
             
             <Text> {formState.error}</Text>
           
        </View>

    )

}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        position:'relative'
    },
    btnContainer:{
        marginLeft:20
    }
  




   

})

export default Login