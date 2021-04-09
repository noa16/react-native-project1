import React from "react";
import {
  FlatList,
 
} from "react-native";
import { ACTIVITY } from "../data/dummy-data";
import Colors from "../constants/Colors";
import ActivityGrid from "../components/ActivityGrid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { withNavigation, DrawerActions } from 'react-navigation'
import HeaderButton from "../components/HeaderButton";
const ActivityScreen = (props) => {
    toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
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
            navigation.navigate('DrawerOpen')
          }}
        />
      </HeaderButtons>
    ),
  };
};



export default ActivityScreen;
