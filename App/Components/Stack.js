import React from "react";
// import classes from './Stack.module.css';
import { View, StyleSheet } from "react-native";
const Stack = (props) => {
  const { order = "horizontal", children, ...rest } = props;

  let css = { ...styles.stack };

  if (order === "vertical") css = { ...css, ...styles.vertical };
  if (order === "horizontal") css = { ...css, ...styles.horizontal };

  return <View style={css}>{children}</View>;
};

const styles = StyleSheet.create({
  stack: {
    height: "95%",
    flexWrap: "wrap",
    width: "90%",
    marginVertical: "5%",
    marginHorizontal: "5%",
    // backgroundColor: "#eee",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});
export default Stack;
