import React from "react";
import PropTypes from "prop-types";
// import classes from './MyButton.module.css';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
const MyButton = (props) => {
  const { title, onPress, type = "primary", ...rest } = props;

  let styleObject = {
    ...styles.button,
  };
  if (type === "primary") styleObject = { ...styleObject, ...styles.primary };
  if (type === "danger") styleObject = { ...styleObject, ...styles.danger };
  if (type === "secondary")
    styleObject = { ...styleObject, ...styles.secondary };
  if (type === "rounded") styleObject = { ...styleObject, ...styles.rounded };
  if (type === "fab") styleObject = { ...styleObject, ...styles.fab };

  const textColor = type == "secondary" ? "blue" : "white";
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleObject}>
        <Text style={{ color: `${textColor}` }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: "blue",
    padding: 5,
    paddingHorizontal: 20,
    color: "white",
  },
  primary: {
    backgroundColor: "blue",
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 2,
    color: "blue",
  },
  danger: {
    backgroundColor: "red",
  },
  rounded: {
    backgroundColor: "blue",
    borderRadius: 50,
  },
  fab: {
    backgroundColor: "blue",
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

MyButton.prototype = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: {
    type: PropTypes.string,
    default: "blue",
  },
};

export default MyButton;
