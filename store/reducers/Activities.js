import { ACTIVITY } from "../../data/dummy-data";
import SearchActivity from "../../models/ActivitySearch";
import FavoriteActivity from "../../models/FavoriteActivity";
import RegisterActivity from "../../models/RegisterActivity";
import InputDetail from "../../models/InputDetail"

const initialState = {
  activities: ACTIVITY,
  signedActivities: [],
  searchedActivities: [],
  favoritesActivity: {},
  UniqueId: 0,
  activityToPause: [],
  error: false,
  infoFromInputFiels:{name:'',age:'',location:'',actId:''}
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
    case " REGISTER_TO_ACTIVITY":
      const registerAcitivity = new RegisterActivity(
        action.activity.location,
        action.activity.age,
        action.activity.name,
        action.activity.id
      );
      const updatedRegister = {
        ...state.signedActivities,
        [action.activity.id]: registerAcitivity,
      };
      return {
        ...state,
        signedActivities: updatedRegister,
      };
    case "DELETE_ACTIVITY ":
      console.log("deleteeeeeeeee");
      const updatePauseActivity = {
        ...state.activityToPause,
        [action.activity.id]: action.activity.id,
      };
      console.log(updatePauseActivity);
      return { ...state, activityToPause: updatePauseActivity };
    case "SET_ERROR":
      return {
        ...state,
        error: action.activity.error,
      };

    case "SET_INPUT":
      const input = new InputDetail(action.detailes.name,action.detailes.age,action.detailes.location,action.detailes.actId)
     
      return{
         ...state,
         infoFromInputFiels:input

      }
   
  }
  return state;
};
export default activityReducer;
