export const SEARCH_FOR_ACTIVITY = "SEARCH_FOR_ACTIVITY";
export const FAVORITE_ACTIVITY = "FAVORITE_ACTIVITY";
export const REGISTER_TO_ACTIVITY = "REGISTER_TO_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY ";
import { ACTIVITY_DETAILS } from "../../data/dummy-data";

export const searchActivity = (title, location, age, name) => {
  return {
    type: SEARCH_FOR_ACTIVITY,
    activity: { title, location, age, name },
  };
};

export const favoriteActivity = (location, age, name, id) => {
  const selectedActivity = ACTIVITY_DETAILS.find(
    (item) => item.location === location
  );
  console.log(selectedActivity);
  return {
    type: FAVORITE_ACTIVITY,
    activity: {
      location: location,
      age: age,
      name: name,
      id: selectedActivity.id,
    },
  };
};

export const RegisterToActivity = (location, age, name, id) => {
  return {
    type: REGISTER_TO_ACTIVITY,
    activity: {
      location: location,
      age: age,
      name: name,
      id: id,
    },
  };
};
export const DeleteActivity = (activityId) => {
  return {
    type: DELETE_ACTIVITY,
    activity: {
      id: activityId,
    },
  };
};
