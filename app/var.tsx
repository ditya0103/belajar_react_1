import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function IfScreen() {
  // Array of Objects
  const daftarModul = [
    { id: 1, judul: "Pengenalan JavaScript" },
    { id: 2, judul: "Array & Object" },
    { id: 3, judul: "Asynchronous & API" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Modul Belajar</Text>

      {/* Menggunakan .map() untuk merender data ke komponen UI React Native */}
      {daftarModul.map((modul) => (
        <View key={modul.id} style={styles.card}>
          <Text style={styles.modulId}>Modul {modul.id}</Text>
          <Text style={styles.modulJudul}>{modul.judul}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modulId: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
    fontWeight: "600",
  },
  modulJudul: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "bold",
  },
});
