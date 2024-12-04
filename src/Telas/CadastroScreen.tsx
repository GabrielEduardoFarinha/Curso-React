import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const CadastroScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150x50?text=Voll' }} style={styles.logo} />
      <Text style={styles.title}>Insira alguns dados básicos:</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome completo" />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu endereço de email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Crie uma senha</Text>
      <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry={true} />

      <Text style={styles.label}>Repita a senha</Text>
      <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
    color: "#444",
  },
  label: {
    width: "100%",
    fontSize: 14,
    fontWeight: "500",
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
    backgroundColor: "#002C6E",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CadastroScreen;
