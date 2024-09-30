import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ valor, res }) => (
  <View style={estilos.display}>
    <Text style={estilos.textoDisplayOper} numberOfLines={1}>
      {valor}
    </Text>
    <Text style={estilos.textoDisplayRes} numberOfLines={1}>
      {res}
    </Text>
  </View>
);

const estilos = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  textoDisplayRes: {
    fontSize: 50,
    color: "#0e0e0e",
  },
  textoDisplayOper: {
    fontSize: 25,
    color: "#0e0e0e",
  },
});
