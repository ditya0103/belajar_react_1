// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

import React from "react";
import { StyleSheet, View } from "react-native";

// import VarScreen from "./varx";
// 1. Impor file if.tsx ke dalam index.tsx
// import IfScreen from "./if";
// import VarScreen from "./var";
// import VarScreen from "./soalkondisi";
import VarScreen from "./soalloop";
// Ganti dengan nama file yang sesuai jika menggunakan var.tsx

export default function Index() {
  return (
    <View style={styles.container}>
      {/* 2. Panggil komponen if.tsx di sini */}
      {/* <IfScreen /> */}
      <VarScreen />
      {/* Ganti dengan nama komponen yang sesuai jika menggunakan var.tsx */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
