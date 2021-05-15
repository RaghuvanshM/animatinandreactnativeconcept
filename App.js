import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import WellnessScreen from "./screens/screen1";
import VieoUpload from "./screens/newsignup";
import AnimatedHeader from './screens/Animations/AnimatedHeader';
class SliderExample extends React.Component {
  componentDidMount() {
   
  }

render() {
  return (
    <AnimatedHeader />
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