import React, {useReducer, useCallback, useEffect, useState } from 'react';
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
import { useDispatch,useSelector} from "react-redux";
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
    const[forceRender,setRender] =useState(false)
     const isLoginReducer = useSelector(state =>state.userReducer.isLogin)
      const isValidUserReducer = useSelector(state =>state.userReducer.error)
    const [formState, dispatchFormState] = useReducer(formReducer, {
      email: '',
      password: '',
    formIsValid: null,
    error:null,
  
  });


  useEffect(()=>{
  if (formState.error) {
      Alert.alert('An Error Occurred!', formState.error, [{ text: 'Okay' }]);
    }

  },[formState.error])


  useEffect(()=>{
      console.log(forceRender)
      if(isLoginReducer){
        console.log("true")
        dispatchFormState({type:SET_ERROR,value:''})
       props.navigation.navigate({
            routeName:'User',
            params:{
                username:formState.email
            }
        })
        
        
    }
    else{
        if(isValidUserReducer!=''){
        dispatchFormState({type:SET_ERROR,value:'user dosent exisit!'})
        console.log("user not exisit")
        setRender(false)
        }

    }
  
  },[forceRender])


 
  const submitHandler=async()=>{
    const res = cheackValidity(formState.email,formState.password)
    console.log(res.error)
    if(res.error!=='')
    {
        dispatchFormState({type:SET_ERROR,value:res.error})
        props.navigation.navigate({
            routeName:'Signup',
            params:{
                username:formState.email,
                password:formState.password
            }
        }) 

    }
    else{

        //check if user exisit 
         await dispatch(actionsUser.checkValidUser(formState.email,formState.password))
         await dispatch(actionsUser.setUser(formState.email,formState.password))
         await setRender(true)
       
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