import React from "react";
// 브릿지 - 자바스크립트의 폰의 코드 소통
import { StyleSheet, Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      // 프로미스를 반환하고 허가를 안주면 에러를 발생시킴
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다.", "ㅜㅜ");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;

    return isLoading ? <Loading /> : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
