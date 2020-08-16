import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const ButtonSearch = (props) => {
  return (
    <View style={styles.btn}>
      <Button title="Search" onPress={props.onSelect} />
    </View>
  );
};

export default ButtonSearch;

const styles = StyleSheet.create({
  btn: {
    position: "relative",
    marginTop: 20,
    width: 350,
    borderRadius: 30,
  },
});
