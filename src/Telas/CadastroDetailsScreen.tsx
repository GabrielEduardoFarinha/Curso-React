import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const CadastroDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Voll</Text>
      <Text style={styles.title}>Agora, mais alguns dados sobre você:</Text>
      <Text style={styles.label}>CEP</Text>
      <TextInput style={styles.input} placeholder="Insira seu CEP" />
      <Text style={styles.label}>Endereço</Text>
      <TextInput style={styles.input} placeholder="Insira seu endereço" />
      <Text style={styles.label}>Número</Text>
      <TextInput style={styles.input} placeholder="Insira seu número" />
      <Text style={styles.label}>Complemento</Text>
      <TextInput style={styles.input} placeholder="Insira seu complemento" />
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => {}}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
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
    textAlign: "center",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  buttonSecondary: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPrimary: {
    flex: 1,
    marginLeft: 10,
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

export default CadastroDetailsScreen;
