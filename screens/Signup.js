import React,{useState,useCallback} from "react"
import {
  View,
  Text,
  TextInput,
  Alert,
StyleSheet,
} from "react-native";
import ButtonSearch from '../UI/ButtonSearch'
import {SignUpValidation} from '../Logic/SignupLogic'
import { useDispatch,useSelector } from "react-redux";
import * as actionsUser from "../store/actions/User";



const Signup = ()=>{


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const isUserFound = useSelector(state =>state.userReducer.foundUser)
    const dispatch = useDispatch();
    
    const signupHandler = useCallback(async()=>{
        const res = SignUpValidation(username,password)
        if(res.error!=='')
        {
           setError(res.error)

        }
        else{

            try{
            await dispatch(actionsUser.checkValidUserSignUp(username))
            console.log(isUserFound+"found user")
            if(isUserFound==true){
                setError("user already exist")
            }
            else{
            await dispatch(actionsUser.UsersignUp(username,password))
            }
            }
            catch(e){
                setError("NetworkProblem")
            }
            
        }

    },[error])
    return(
        <View>
            <Text>Signup</Text>
            <TextInput onChangeText={(input)=>setUsername(input)}></TextInput>
            <TextInput onChangeText={(input)=>setPassword(input)}></TextInput>
            <ButtonSearch onSelect={()=>signupHandler()}/>
            <Text>{error}</Text>

        </View>
    )

}

export default Signup