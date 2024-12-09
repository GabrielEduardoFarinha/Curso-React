import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const specialties = [
  "Cardiologia",
  "Oncologia",
  "Psiquiatria",
  "Dermatologia",
  "Pediatria",
];

const locations = ["Rio de Janeiro", "São Paulo", "Belo Horizonte", "Brasília"];

const HomeScreen: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isSpecialtyModalVisible, setSpecialtyModalVisible] = useState(false);
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Espaço no topo */}
      <View style={styles.topSpacer} />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Boas-vindas!</Text>

        {/* Dropdown customizado para especialidades */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Selecione a especialidade:</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setSpecialtyModalVisible(true)}
          >
            <Text style={styles.dropdownText}>
              {selectedSpecialty || "Escolha uma especialidade"}
            </Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Modal de Especialidades */}
        <Modal
          visible={isSpecialtyModalVisible}
          transparent
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={specialties}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      setSelectedSpecialty(item);
                      setSpecialtyModalVisible(false);
                    }}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setSpecialtyModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Dropdown customizado para localização */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Selecione sua localização:</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setLocationModalVisible(true)}
          >
            <Text style={styles.dropdownText}>
              {selectedLocation || "Escolha uma cidade"}
            </Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Modal de Localização */}
        <Modal
          visible={isLocationModalVisible}
          transparent
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={locations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      setSelectedLocation(item);
                      setLocationModalVisible(false);
                    }}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setLocationModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Botão Buscar */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {/* Depoimentos */}
      <ScrollView style={styles.testimonialsContainer}>
        <Text style={styles.testimonialsTitle}>Depoimentos</Text>

        {Array(3)
          .fill(null)
          .map((_, index) => (
            <View key={index} style={styles.testimonial}>
              <Text style={styles.testimonialText}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi.
              </Text>
              <Text style={styles.testimonialAuthor}>
                Júlio, 40 anos, São Paulo/SP.
              </Text>
            </View>
          ))}
      </ScrollView>

      {/* Barra de Navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="home" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="event" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="explore" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Explorar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="person" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSpacer: {
    height: 50, // Espaço no topo
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002C6E",
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#333", // Fundo escuro
  },
  dropdownText: {
    fontSize: 16,
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "40%", // Ajuste do tamanho do modal
  },
  modalItem: {
    padding: 10,
  },
  modalItemText: {
    fontSize: 18,
    color: "#333",
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: "#002C6E",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#002C6E",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  testimonialsContainer: {
    flex: 1,
    padding: 20,
  },
  testimonialsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 20,
  },
  testimonial: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  testimonialText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#002C6E",
    paddingVertical: 15,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HomeScreen;
