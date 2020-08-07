import { ACTIVITY } from "../../data/dummy-data";
import { SIGN_TO_ACTIVITY } from "../actions/actions";
import SearchActivity from "../../models/ActivitySearch";
import FavoriteActivity from "../../models/FavoriteActivity";

const initialState = {
  activities: ACTIVITY,
  signedActivities: [],
  searchedActivities: [],
  favoritesActivity: {},
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_FOR_ACTIVITY":
      const addedActivity = new SearchActivity(
        action.title,
        action.location,
        action.age,
        action.name
      );
      return {
        ...state,
        searchedActivities: { ...state.searchedActivities, addedActivity },
      };
    case "FAVORITE_ACTIVITY":
      console.log(action.activity.age + "inside reducerrrrrrr");
      const favoriteActivity = new FavoriteActivity(
        action.activity.location,
        action.activity.age,
        action.activity.name,
        action.activity.id
      );
      return {
        ...state,
        favoritesActivity: { ...state.favoritesActivity, favoriteActivity },
      };
  }
  return state;
};
export default activityReducer;
