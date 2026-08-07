import React from "react";
import { Text, View } from "react-native";

//soal 1
// export default function svar() {
//   let nilaiUjian = 75;

//   return (
//     <View>
//       <Text>Nilai Ujian: {nilaiUjian}</Text>
//       <Text>
//         {nilaiUjian >= 75
//           ? "Nilai A: Selamat Anda Lulus!"
//           : "Maaf, Anda Belum Lulus"}
//       </Text>
//     </View>
//   );
// }

//soal 2
// export default function svar() {
//   let suhuUdara = 35;
//   let textSuhu = "";
//   if (suhuUdara >= 36 && suhuUdara <= 40) {
//     textSuhu = "Peringatan: Cuaca Sangat Panas Hari Ini!";
//   } else {
//     textSuhu = "Cuaca Normal";
//   }
//   return (
//     <View>
//       <Text>Suhu Saat ini = {suhuUdara}°C</Text>
//       <Text>{textSuhu}</Text>
//     </View>
//   );
// }

//soal 3
export default function svar() {
  let suhuUdara = 35;
  let textSuhu = "";
  if (suhuUdara >= 36 && suhuUdara <= 40) {
    textSuhu = "Peringatan: Cuaca Sangat Panas Hari Ini!";
  } else {
    textSuhu = "Cuaca Normal";
  }
  return (
    <View>
      <Text>Suhu Saat ini = {suhuUdara}°C</Text>
      <Text>{textSuhu}</Text>
    </View>
  );
}
