import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "HealthPlan">;

const HealthPlanScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    "Sulamerica",
    "Unimed",
    "Bradesco",
    "Amil",
    "Biosaúde",
    "Biovida",
    "Outros",
    "Não tenho plano",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Voll</Text>
      <Text style={styles.title}>Para finalizar, qual seu plano de saúde?</Text>

      <Text style={styles.label}>Selecione um plano:</Text>
      <ScrollView style={styles.scroll}>
        {plans.map((plan) => (
          <TouchableOpacity
            key={plan}
            style={[
              styles.checkboxContainer,
              selectedPlan === plan && styles.checkboxSelected,
            ]}
            onPress={() => setSelectedPlan(plan)}
          >
            <Text
              style={[
                styles.checkboxText,
                selectedPlan === plan && styles.checkboxTextSelected,
              ]}
            >
              {plan}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.buttonPrimary, styles.buttonLarge]}
          onPress={() => alert("Cadastro concluído!")}
        >
          <Text style={styles.buttonText}>Cadastrar!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonSecondary, styles.buttonLarge]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#002C6E",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
  },
  scroll: {
    flex: 1,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  checkboxSelected: {
    backgroundColor: "#002C6E",
  },
  checkboxText: {
    fontSize: 16,
    color: "#444",
  },
  checkboxTextSelected: {
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  buttonLarge: {
    width: "100%",
    marginBottom: 15,
    padding: 20,
  },
  buttonSecondary: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: "#002C6E",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HealthPlanScreen;
