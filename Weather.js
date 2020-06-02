import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#0099F7", "#F11712"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2980b9", "#2c3e50"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#2980b9", "#2c3e50"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#2980b9", "#2c3e50"],
  },
};
export default function Weather({ temp, condition }) {
  const { gradient, iconName } = weatherOptions[condition];
  return (
    <LinearGradient colors={gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={iconName || "weather-sunset"}
          size={86}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}º</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  temp: {
    fontSize: 40,
    color: "white",
  },
  condition: {
    color: "white",
    fontSize: 30,
  },
  halfContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
