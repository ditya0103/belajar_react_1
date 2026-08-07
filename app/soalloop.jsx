// import React from "react";
// import { Text, View } from "react-native";

// export default function svar() {
//   let a = 0;
//   for (let tiket = 1; tiket <= 8; tiket++) {
//     a += tiket;
//     console.log("Tiket antrian nomer = " + tiket);
//   }

//   return (
//     <View>
//       <Text>Jumlah tiket antrian = {a}</Text>
//       {/* <Text></Text> */}
//     </View>
//   );
// }

import React from "react";
import { Text, View } from "react-native";

export default function App() {
  const renderTiketAntrean = () => {
    let listTiket = [];

    for (let i = 1; i <= 8; i++) {
      // Menampilkan teks ke console sesuai permintaan tugas
      console.log(`Tiket antrean nomor: ${i}`);

      // Menambahkan elemen ke dalam array untuk dirender di UI
      listTiket.push(
        <View key={i}>
          <Text>Tiket antrean nomor: {i}</Text>
        </View>,
      );
    }

    return listTiket;
  };

  return (
    <View>
      <Text>Daftar Antrean Bioskop</Text>
      {renderTiketAntrean()}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   ticketCard: {
//     backgroundColor: "#ffffff",
//     padding: 15,
//     marginVertical: 6,
//     width: "100%",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   ticketText: {
//     fontSize: 16,
//     color: "#007AFF",
//     fontWeight: "600",
//   },
// });
