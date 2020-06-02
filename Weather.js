import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
      <Text>{condition}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "ThunderStorm",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
