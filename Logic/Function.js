import { ACTIVITY_DETAILS } from '../data/dummy-data'

export const selectedActivity = (activityId)=>{
    const activityDetailes =ACTIVITY_DETAILS.find(
    (activity) => activity.activityId === activityId
    )
    return activityDetailes
};

export const findActivityByIdLocation = (activityId,activityLocation)=>{
    const {id} = ACTIVITY_DETAILS.find((activity) =>activity.activityId === activityId && activity.location === activityLocation);
     return id;

}

