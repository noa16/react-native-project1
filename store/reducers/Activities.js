import { ACTIVITY } from "../../data/dummy-data";
import { SIGN_TO_ACTIVITY } from "../actions/actions";
import SearchActivity from "../../models/ActivitySearch";
import FavoriteActivity from "../../models/FavoriteActivity";

const initialState = {
  activities: ACTIVITY,
  signedActivities: [],
  searchedActivities: [],
  favoritesActivity: {},
  UniqueId: 0,
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
      console.log(action.activity.id + "inside reducerrrrrrr");
      const favoriteActivity = new FavoriteActivity(
        action.activity.location,
        action.activity.age,
        action.activity.name,
        action.activity.id,
        action.activity.id
      );
      state.UniqueId = action.activity.id;
      const updatedFavorite = {
        ...state.favoritesActivity,
        [action.activity.id]: favoriteActivity,
      };
      console.log(JSON.stringify(state.favoritesActivity));
      return {
        ...state,
        favoritesActivity: updatedFavorite,
      };
  }
  return state;
};
export default activityReducer;
