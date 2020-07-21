import Activity from "../models/Activity";
import ActivityDetails from "../models/ActivityDetails";

export const ACTIVITY = [
  new Activity("c1", "Swimming", "#f5428d"),
  new Activity("c2", "Yoga", "#f54242"),
  new Activity("c3", "Tennis", "#f5a442"),
  new Activity("c4", "Singing", "#f5d142"),
  new Activity("c5", "Basktball & Lovely", "#368dff"),
  new Activity("c6", "Football", "#41d95d"),
  new Activity("c7", "Music", "#9eecff"),
  new Activity("c8", "English", "#b9ffb0"),
  // new Activity("c9", "blabla", "#ffc7ff"),
  //new Activity("c10", "blabla", "#47fced"),
];

export const ACTIVITY_DETAILS = [
  new ActivityDetails(
    1,
    "c1",
    200,
    "Swimming",
    "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    2,
    "c2",
    200,
    "Yoga",

    "https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    3,
    "c3",
    250,
    "Tennis",
    "https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?cs=srgb&dl=close-up-photo-of-person-holding-tennis-racket-and-ball-1432039.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    4,
    "c4",
    150,
    "Singing",
    "https://images.pexels.com/photos/1813137/pexels-photo-1813137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    5,
    "c5",
    150,
    "Basktball",
    "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?cs=srgb&dl=brown-basketball-on-grey-floor-945471.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    6,
    "c6",
    150,
    "Football",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=soccer-ball-on-grass-field-during-daytime-46798.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    7,
    "c7",
    150,
    "Music",
    "https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?cs=srgb&dl=audio-e-guitars-guitars-music-6966.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
  new ActivityDetails(
    8,
    "c8",
    150,
    "English",
    "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?cs=srgb&dl=text-on-shelf-256417.jpg&fm=jpg",
    "sunday and monday",
    "17:00-20:00",
    "blabla street"
  ),
];
