import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Botao , Display } from "./components";
import { useCalculadora } from "./hook/useCalculadora";

export default function App() {
  const { state, addDigito, opera } = useCalculadora()

  return (
    <SafeAreaView style={estilos.container}>
      <Display valor={state.valorTela} res={state.resultado} />
      <View style={estilos.botoes}>{renderButtons(addDigito, opera)}</View>
    </SafeAreaView>
  );
}

const renderButtons = (addDigito, opera) => {
  const buttons = [
    { label: "AC", action: () => opera("AC"), props: { ac: true } },
    { label: "(", action: () => addDigito("(") },
    { label: ")", action: () => addDigito(")") },
    { label: "/", action: () => addDigito("/"), props: { operacao: true } },
    { label: "7", action: () => addDigito("7") },
    { label: "8", action: () => addDigito("8") },
    { label: "9", action: () => addDigito("9") },
    { label: "*", action: () => addDigito("*"), props: { operacao: true } },
    { label: "4", action: () => addDigito("4") },
    { label: "5", action: () => addDigito("5") },
    { label: "6", action: () => addDigito("6") },
    { label: "-", action: () => addDigito("-"), props: { operacao: true } },
    { label: "1", action: () => addDigito("1") },
    { label: "2", action: () => addDigito("2") },
    { label: "3", action: () => addDigito("3") },
    { label: "+", action: () => addDigito("+"), props: { operacao: true } },
    { label: "0", action: () => addDigito("0") },
    { label: ".", action: () => addDigito("."), props: { operacao: true } },
    { label: "<-", action: () => opera("BS"), props: { bs: true } },
    { label: "=", action: () => opera("="), props: { igual: true } },
  ];

  return buttons.map((btn, index) => (
    <Botao key={index} label={btn.label} aoClicar={btn.action} {...btn.props} />
  ));
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
