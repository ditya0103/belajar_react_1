import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  // 1. Variabel & Template Literals
  let bahasa = "JavaScript";
  let versi = 6;
  let teksVariabel = `Sedang belajar ${bahasa} versi ${versi}[cite: 1]`;

  // 2. Percabangan (Conditional)
  let nilaiUjian = 85;
  let teksConditional = "";
  if (nilaiUjian >= 80) {
    teksConditional = "Nilai A: Lulus dengan sangat baik!";
  } else {
    teksConditional = "Belajar lebih giat lagi.";
  }

  // 3. Perulangan (Looping) disimpan ke dalam array untuk ditampilkan di UI
  let hasilLooping = [];
  for (let i = 1; i <= 3; i++) {
    hasilLooping.push(`Perulangan ke-${i}`);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hasil Praktik JavaScript di React Native</Text>

      {/* Menampilkan Bab 1 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>1. Variabel & Template Literals</Text>
        <Text>{teksVariabel}</Text>
      </View>

      {/* Menampilkan Bab 2 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>2. Percabangan (Conditional)</Text>
        <Text>Nilai Ujian: {nilaiUjian}</Text>
        <Text>{teksConditional}</Text>
      </View>

      {/* Menampilkan Bab 3 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>3. Perulangan (Looping)</Text>
        {hasilLooping.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
});
