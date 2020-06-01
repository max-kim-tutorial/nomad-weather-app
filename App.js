import React from "react";
// 브릿지 - 자바스크립트의 폰의 코드 소통
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>안뇽!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
