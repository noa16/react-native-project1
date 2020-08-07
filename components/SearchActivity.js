import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import * as ActivityAction from "../store/actions/actions";
import ButtonSearch from "../UI/ButtonSearch";
const SearchActivity = (props) => {
  const [Age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const actId = props.navigation.getParam("activityId");

  const dispatch = useDispatch();
  //const selectedActivity = props.selectedActivity.title;

  const setage = useCallback((age) => {
    console.log("set age func");
    setAge(age);
  });
  const setname = useCallback((name) => {
    setName(name);
    console.log("set name func");
  });

  const setLocation = useCallback((location) => {
    setlocation(location);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search For Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setname(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setage(text)}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={(text) => setLocation(text)}
      ></TextInput>
      <ButtonSearch
        onSelect={() => {
          props.navigation.navigate({
            routeName: "GroupsActivity",
            params: {
              activityId: actId,
              name: name,
              age: Age,
              location: location,
            },
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: 350,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 30,
    fontFamily: "open-sans-bold",
  },
});

export default SearchActivity;
