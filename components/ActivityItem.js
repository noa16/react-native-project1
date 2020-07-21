import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const ActivityItem = (props) => {
  return (
    <View style={styles.activityItem}>
      <TouchableOpacity>
        <View>
          <View style={{ ...styles.activityHeader, ...styles.activityRow }}>
            <ImageBackground
              source={{
                uri: props.image,
              }}
              style={styles.bgImage}
            >
              <Text onPress={props.onSelect} style={styles.title}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.activityDetails, ...styles.activityRow }}>
            <Text>{props.price}</Text>
            <Text>{props.location.toUpperCase()}</Text>
            <Text>{props.days.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  activityRow: {
    flexDirection: "row",
  },
  activityItem: {
    height: 150,
    width: "100%",
    backgroundColor: "#ccc",
  },
  activityHeader: {
    height: "85%",
  },
  activityDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 12,
  },
});

export default ActivityItem;
