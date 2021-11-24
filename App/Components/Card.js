import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import classes from './Card.module.css';

const Card = (props) => {
  return (
    <View style={styles.card}>
      {props.children ? props.children : <Text>Default Child</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "44%",
    height: "20%",
    padding: 10,
    margin: "3%",
    backgroundColor: "#f2e6e6",
    // shadowColor: "#000",
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Card;
