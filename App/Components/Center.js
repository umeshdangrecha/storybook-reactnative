import React from "react";
// import classes from './Center.module.css';
import { View, StyleSheet } from "react-native";
const Center = ({ children }) => {
  return <View style={styles.center}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Center;
