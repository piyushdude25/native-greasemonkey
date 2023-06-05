// import React from "react";
// import { View, Text, Button } from "react-native";
// import { PDFDocument, PDFText } from "react-native-pdf-lib";
// import { PermissionsAndroid, Platform } from "react-native";

// export default function ContentToDownload() {
//   const generatePdf = async () => {
//     try {
//       if (Platform.OS === "android" && !(await hasStoragePermission())) {
//         return;
//       }

//       const pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage();
//       const text = new PDFText()
//         .setText("Hello, World!")
//         .setX(100)
//         .setY(500)
//         .setFontSize(24);
//       page.drawText(text);

//       const pdfBytes = await pdfDoc.save();

//       // Save the generated PDF file
//       const filePath = "/path/to/save/pdf.pdf";
//       await saveFile(filePath, pdfBytes);

//       console.log("PDF file path:", filePath);
//     } catch (error) {
//       console.error("Failed to generate PDF:", error);
//     }
//   };

//   const saveFile = async (filePath, pdfBytes) => {
//     // Implement the file saving logic specific to your platform
//     // For example, using the 'react-native-fs' library on Android:
//     if (Platform.OS === "android") {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         const RNFS = require("react-native-fs");
//         await RNFS.writeFile(filePath, pdfBytes, "base64");
//       }
//     }
//   };

//   const hasStoragePermission = async () => {
//     if (Platform.OS === "android") {
//       const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
//       const hasPermission = await PermissionsAndroid.check(permission);
//       if (hasPermission) {
//         return true;
//       }

//       const status = await PermissionsAndroid.request(permission);
//       return status === "granted";
//     }
//     return true;
//   };

//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 28,
//           color: "black",
//           marginVertical: 25,
//           textAlign: "center",
//         }}
//       >
//         Download PDF
//       </Text>
//       <View style={{ marginHorizontal: 40 }}>
//         <Button title="Generate PDF" onPress={generatePdf} />
//       </View>
//     </View>
//   );
// }
