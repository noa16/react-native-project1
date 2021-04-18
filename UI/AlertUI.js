
import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet,View } from 'react-native'

const AlertUI = () => {

   const showAlert = () => {
      Alert.alert(
         'Username or Passwors is not Valid'
      )
   }
   return (
   <View>
      {showAlert()}
   </View>
   )

}

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})

export default AlertUI

