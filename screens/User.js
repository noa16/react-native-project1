import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Alert,
StyleSheet,
} from "react-native";
import {useSelector} from "react-redux";


const User = (props)=>{

    const [purchases,setPurchase] = useState({})
     const username = useSelector(
    (state) => state.userReducer.username
  );


   useEffect(()=>{
    async function fetchData() { 
    try{
    const res=await fetch("https://activityproject-45767.firebaseio.com/signed.json")
    const resData = await res.json();
    setPurchase(resData)
     
      
       
    }
    catch(e){
      console.log(e)
    }
  }
     
    fetchData()
   },[])
    return(
        <View>
            <Text>Hello {username}</Text>
            {Object.values(purchases).map((obj)=>{
           return(
             <View>
               {obj.username===username?
                 <Text>
                   {obj.name}
               </Text>:null
            
               }
              </View>
             
           )
           

        })}
         
           
            

        </View>
    )


}

export default User