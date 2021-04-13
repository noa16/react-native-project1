import React, { useState, useEffect, useReducer, useCallback } from 'react';
import TextInputStyle from '../UI/TextInputStyle'
import InputLogin from '../UI/InputLogin'
import Card from '../UI/Card'
import Button from '../UI/ButtonSearch'
import {
  View,
  Text,
  
StyleSheet,
} from "react-native";
import { useDispatch } from 'react-redux';
import {SubmitHandler,isValidInput} from '../Logic/LoginLogic'
import { submitHandler } from '../Logic/SearchLogic';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    return{
    ...state,
    [action.label]:action.value
    }

  }
  
};





const Login = ()=>{


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
      email: '',
      password: '',
    formIsValid: false
  });

   useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);


 const setInput = useCallback((text)=>{

      dispatch({ type: FORM_INPUT_UPDATE, value: text});
 },[formState])

 

    return(
        <View style={styles.container}  >
            <Card>
            <View style={styles.containerInput} >
                <InputLogin setInput={setInput}   initialValue={''} errorText={'Please enter a valid Username '} label={'username'} id={'Username'}/>  
            </View>
            <View style={styles.containerInput} >
                <InputLogin setInput={setInput} initialValue={''} errorText={'Please enter a valid password address'} label={'password'} id={'Password'} />
            </View>
             </Card>
             <View style={styles.btnContainer}>
                 <Button onSelect={submitHandler} />
             </View>
             
             
            
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