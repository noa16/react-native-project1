class ActivityDetails {
  constructor(
    id,
    activityId,
    price,
    title,

    imageUrl,
    days,
    time,
    location,
    age
  ) {
    this.id = id;
    this.activityId = activityId;
    this.price = price;
    this.title = title;

    this.imageUrl = imageUrl;
    this.days = days;
    this.time = time;
    this.location = location;
    this.age = age;
  }
}

export default ActivityDetails;
