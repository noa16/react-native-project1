import React from "react";
import {
  View,
  Text,
  StyleSheet,

} from "react-native";
import {ACTIVITY_DETAILS} from '../data/dummy-data'

 const ActivityDetailsView = ({nameActivity,location,age})=>{
  console.log("dispalyyyyyyyyy"+location+age+nameActivity)

     return (
      <View>
        {ACTIVITY_DETAILS.map((act) => {
          if (
            act.location === location &&
            (act.age === age || act.age < age) &&
            act.title === nameActivity
          ) {
            return (
              <React.Fragment>
                <View style={styles.containerData1}>
                  <Text style={styles.textStyle}>
                    {act.location.toUpperCase()}
                  </Text>
                  <Text>Location:</Text>

                  <Text style={styles.textStyle}>
                    +{act.age}
                  </Text>
                  <Text>Age:</Text>

                  <Text style={styles.textStyle}>
                    {act.price}$
                  </Text>
                  <Text>Price:</Text>
                </View>
                <View style={styles.containerData2}>
                  <Text style={styles.textStyle}>
                    {act.time}
                  </Text>
                  <Text>Time:</Text>
                  <Text style={styles.textStyle}>
                    {act.days}
                  </Text>
                  <Text>Days:</Text>
                </View>
              </React.Fragment>
            );
          }
        })}
      </View>
    );


}

const styles = StyleSheet.create({
  containerData2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  containerData1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  textStyle:{
     fontFamily: "open-sans-bold",
      fontSize: 15,

  }
});
export default React.memo(ActivityDetailsView)