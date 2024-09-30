import React from "react";
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default (props) => {
  const classNames = [
    styles.btn,
    props.duplo && styles.btnDuplo,
    props.igual && styles.btnIgual,
    props.operacao && styles.btnOper,
    props.ac && styles.btnAC,
    props.bs && styles.btnBS,
  ].filter(Boolean);

  return (
    <TouchableHighlight onPress={props.aoClicar}>
      <Text style={classNames}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f5f5f5",
    color: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#f5f5f5",
    textAlign: "center",
  },
  btnAC: {
    color: "#FF6363",
  },
  btnOper: {
    color: "#FFD700",
  },
  btnIgual: {
    color: "#32CD32",
  },
  btnBS: {
    color: "#1E90FF",
  },
  btnDuplo: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
});
