import React, {useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {cheackValidity} from '../Logic/LoginLogic'





const InputLogin = (props)=>{
   const {setInput} = props

   const [isUsername,setUsernameValid] = useState(false)
   const [isPassword,setPasswordValid] = useState(false)
   const [error,setError] = useState('')
 
   


 const onInputChange=(inputText,label)=>{//check valid input
          const formState=cheackValidity(inputText,label)
          if(formState.isValidPassword===true){
              setInput(inputText)
              setUsernameValid(true)
              
          }
          if(formState.isValidUserName===true){
              setInput(inputText)
              setPasswordValid(true)
          }

          if(isUsername===false){
              setError(formState.error)
              setUsernameValid(false)
            
          }
          if(isPassword===false){
              setError(formState.error)
              setPasswordValid(false)
          }
 }

 const lostFocusHandler = () => {
    
  };

  

      return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
         onBlur={lostFocusHandler}
        onChangeText={(input)=>onInputChange(input,props.label)}
        
      />
      
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
    
    </View>
  );


}

const styles = StyleSheet.create({
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13
  }
});

export default InputLogin