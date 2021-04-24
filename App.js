import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import WellnessScreen from "./screens/screen1";

class SliderExample extends React.Component {

  render() {
    return (
     <WellnessScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
   
  }
});
export default SliderExample;