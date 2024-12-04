import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "/App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150x50?text=Voll' }} style={styles.logo} />
      <Text style={styles.title}>Faça login em sua conta</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu endereço de email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.signup}>
          Ainda não tem conta? <Text style={styles.signupLink}>Faça seu cadastro!</Text>
        </Text>
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
  link: {
    color: "#002C6E",
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline",
  },
  signup: {
    marginTop: 20,
    fontSize: 14,
    color: "#444",
  },
  signupLink: {
    color: "#002C6E",
    fontWeight: "600",
  },
});

export default LoginScreen;
