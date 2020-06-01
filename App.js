import React from "react";
// 브릿지 - 자바스크립트의 폰의 코드 소통
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMound() {
    this.getLocation();
  }
  render() {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
