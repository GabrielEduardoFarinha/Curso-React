import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Adicionando um email e senha de teste
  useEffect(() => {
    const setTestCredentials = async () => {
      const testUser = {
        email: "123",
        senha: "123",
      };
      await AsyncStorage.setItem("@user_data", JSON.stringify(testUser));
    };

    setTestCredentials();
  }, []);

  const handleLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem("@user_data");
      const userData = storedData ? JSON.parse(storedData) : null;

      if (userData?.email === email && userData?.senha === password) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Email ou senha inválidos.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao acessar os dados.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150x50?text=Voll" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Faça login em sua conta</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu endereço de email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.signup}>
          Ainda não tem conta?{" "}
          <Text style={styles.signupLink}>Faça seu cadastro!</Text>
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
