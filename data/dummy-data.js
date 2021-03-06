import Activity from "../models/Activity";
import ActivityDetails from "../models/ActivityDetails";

export const ACTIVITY = [
  new Activity("c1", "Swimming", "#f5428d","https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?cs=srgb&dl=pexels-juan-salamanca-61129.jpg&fm=jpg"),
  new Activity("c2", "Yoga", "#f54242","https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?cs=srgb&dl=pexels-li-sun-2294353.jpg&fm=jpg"),
  new Activity("c3", "Tennis", "#f5a442","https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?cs=srgb&dl=close-up-photo-of-person-holding-tennis-racket-and-ball-1432039.jpg&fm=jpg"),
  new Activity("c4", "Singing", "#f5d142","https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?cs=srgb&dl=pexels-papa-yaw-2531728.jpg&fm=jpg"),
  new Activity("c5", "Basktball", "#368dff","https://images.pexels.com/photos/4499845/pexels-photo-4499845.jpeg?cs=srgb&dl=pexels-leah-kelley-4499845.jpg&fm=jpg"),
  new Activity("c6", "Football", "#41d95d","https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?cs=srgb&dl=pexels-pixabay-274422.jpg&fm=jpg",),
  new Activity("c7", "Music", "#9eecff","https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?cs=srgb&dl=pexels-freestocksorg-96380.jpg&fm=jpg",),
  new Activity("c8", "English", "#b9ffb0","https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5427868.jpg&fm=jpg"),
  // new Activity("c9", "blabla", "#ffc7ff"),
  //new Activity("c10", "blabla", "#47fced"),
];

export const ACTIVITY_DETAILS = [
  new ActivityDetails(
    1,
    "c1",
    200,
    "Swimming",
    "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?cs=srgb&dl=pexels-juan-salamanca-61129.jpg&fm=jpg",
    
    "sunday and monday",
    "17:00-20:00",
    "street",
    12
  ),
  new ActivityDetails(
    2,
    "c2",
    200,
    "Yoga",
    "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2035066.jpg&fm=jpg",
    
    "sunday and monday",
    "17:00-20:00",
    "blabla street",
    14
  ),
  new ActivityDetails(
    3,
    "c3",
    250,
    "Tennis",
    "https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?cs=srgb&dl=pexels-isabella-mendes-342361.jpg&fm=jpg",
    
    "sunday and monday",
    "17:00-20:00",
    "blabla street",
    8
  ),
  new ActivityDetails(
    4,
    "c4",
    150,
    "Singing",
    "https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
    "sunday and monday",
    "17:00-20:00",
    "Tel Aviv",
    6
  ),
  new ActivityDetails(
    5,
    "c5",
    150,
    "Basktball",
    "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?cs=srgb&dl=brown-basketball-on-grey-floor-945471.jpg&fm=jpg",
  
    "sunday and monday",
    "17:00-20:00",
    "beer",
    7
  ),
  new ActivityDetails(
    6,
    "c6",
    150,
    "Football",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=soccer-ball-on-grass-field-during-daytime-46798.jpg&fm=jpg",
    
    "sunday and monday",
    "17:00-20:00",
    "blabla street",
    10
  ),
  new ActivityDetails(
    7,
    "c7",
    150,
    "Music",
    "https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?cs=srgb&dl=audio-e-guitars-guitars-music-6966.jpg&fm=jpg",
    
    "sunday and monday",
    "17:00-20:00",
    "blabla street",
    6
  ),
  new ActivityDetails(
    8,
    "c8",
    150,
    "English",
    "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?cs=srgb&dl=text-on-shelf-256417.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street",
    6
  ),
  new ActivityDetails(
    9,
    "c4",
    250,
    "Singing",
    "https://images.pexels.com/photos/1813137/pexels-photo-1813137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "thursday and monday",
    "17:00-20:00",
    "Tel Aviv",
    8
  ),
  new ActivityDetails(
    10,
    "c4",
    150,
    "Singing",
    "https://images.pexels.com/photos/1813137/pexels-photo-1813137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "sunday and monday",
    "17:00-20:00",
    "Beer Sheva",
    9
  ),
  new ActivityDetails(
    11,
    "c2",
    200,
    "Yoga",

    "https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "sunday and monday",
    "17:00-20:00",
    "noa street",
    14
  ),
  new ActivityDetails(
    12,
    "c2",
    200,
    "Yoga",

    "https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "sunday and monday",
    "17:00-20:00",
    "noa",
    14
  ),
];
