import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";


const TextInputStyle = ({InputField,inputChangeHandler})=>{


    return(
        <View>
            <TextInput onChangeText={((input)=>inputChangeHandler(input,InputField))} style={styles.input}/>
        </View>
    )

}

const styles = StyleSheet.create({

input: {
    width: 350,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    margin: 10,
    marginLeft:20,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },



})

export default TextInputStyle