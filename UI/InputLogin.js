import React, {useState,useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet,Alert } from 'react-native';
import {cheackValidity} from '../Logic/LoginLogic'
import useStateWithCallback from 'use-state-with-callback';


const InputLogin = (props)=>{
   const {setInput} = props
   const [error,setError] = useState('')
 
   




  



const onInputChange=(text,label)=>{
  setInput(text,label)

}


 
   
      return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
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
  },
   btnContainer:{
        marginLeft:20
    }
});

export default React.memo(InputLogin)