import React from "react";
import { Text, View } from "react-native";

// export default function IfScreen() {
//   //   const nama1 = "budi santoso";
//   //   let upper = nama1.toUpperCase();
//   //   const angka1 = 12;
//   //   const text = "Akun atas nama Budi Santoso status aktif: true";
//   const namaDepan = "Budi";
//   const namaBelakang = "Santoso";
//   let status = true;

//   //   console.log(upper);
//   //   console.log(angka1);
//   //   console.log(text);
//   return (
//     <View>
//       {/* <Text>nama siswa : {upper} </Text>
//       <Text>Nomer Absen : {angka1}</Text> */}
// <Text>
//   Akun atas nama {namaDepan} {namaBelakang} status{" "}
//   {status ? "aktif" : "tidak aktif"}
// </Text>
//     </View>
//   );
// }

// Soal 2
export default function svar() {
  // Deklarasi variabel
  let rawUsername = " admin_smkn10 ";
  let newUsername = rawUsername.trim();
  //   console.log(newUsername);

  //   console.log(newUsername.length);

  return (
    <View>
      <Text>{newUsername}</Text>
      <Text>Jumlah karakter: {newUsername.length}</Text>
    </View>
  );
}
