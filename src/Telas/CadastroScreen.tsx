import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const CadastroScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Voll</Text>
      <Text style={styles.title}>Insira alguns dados básicos:</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome completo" />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Insira seu endereço de email" />
      <Text style={styles.label}>Crie uma senha</Text>
      <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry />
      <Text style={styles.label}>Repita a senha</Text>
      <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroDetails")}
      >
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002C6E",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: "#444",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    backgroundColor: "#002C6E",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CadastroScreen;
