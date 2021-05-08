import React from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground
} from "react-native";

const ActivityGrid = (props) => {
  const {imgBack}=props
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View>
        <ImageBackground style={styles.container} source={{uri:imgBack}}><Text style={styles.title}></Text></ImageBackground>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 65,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color:'white'
  },
});

export default ActivityGrid;
