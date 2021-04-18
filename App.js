import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import ActivityNavigator from "./navigation/ActivityNavigator";
import ActivityScreen from "./screens/ActivityScreen";
import { createStore, combineReducers, applyMiddleware } from "redux";
import activityReducer from "./store/reducers/Activities";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import UserReducer from './store/reducers/UserReducer'

const rootReducer = combineReducers({
  activities: activityReducer,
  userReducer:UserReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <ActivityNavigator />
    </Provider>
  );
}
