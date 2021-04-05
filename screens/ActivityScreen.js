import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ACTIVITY } from "../data/dummy-data";
import Colors from "../constants/Colors";
import ActivityGrid from "../components/ActivityGrid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import HeaderButton from "../components/HeaderButton";
const ActivityScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <ActivityGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ActivitySearch",
            params: {
              activityId: itemData.item.activityId, //forward the data to the new screen we navigate
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList numColumns={2} data={ACTIVITY} keyExtractor={ACTIVITY.activityId} renderItem={renderGridItem} />
  );
};

ActivityScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Activities",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log("pressed");
          }}
        />
      </HeaderButtons>
    ),
  };
};



export default ActivityScreen;
