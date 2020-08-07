export const SEARCH_FOR_ACTIVITY = "SEARCH_FOR_ACTIVITY";
export const FAVORITE_ACTIVITY = "FAVORITE_ACTIVITY";

export const searchActivity = (title, location, age, name) => {
  return {
    type: SEARCH_FOR_ACTIVITY,
    activity: { title, location, age, name },
  };
};

export const favoriteActivity = (location, age, name, id) => {
  console.log(location);
  return {
    type: FAVORITE_ACTIVITY,
    activity: { location: location, age: age, name: name, id: id },
  };
};
