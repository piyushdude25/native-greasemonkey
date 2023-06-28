// import React from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { PDFDocument, PDFText } from "react-native-pdf-lib";
// import RNFS from "react-native-fs";



// const ContentToDownload = ({ route }) => {
//   // Rest of your code



//   const generateAndSavePdf = async () => {
//     try {
//       const pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage();
//       const text = new PDFText()
//         .setText("Hello, World!")
//         .setX(100)
//         .setY(500)
//         .setFontSize(24);
//       page.drawText(text);

//       const pdfBytes = await pdfDoc.save();

//       const filePath = `${RNFS.DocumentDirectoryPath}/page.pdf`;
//       await RNFS.writeFile(filePath, pdfBytes, "base64");

//       console.log("PDF file path:", filePath);
//     } catch (error) {
//       console.error("Failed to generate and save PDF:", error);
//     }
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
//         <Button
//           title="Generate and Download PDF"
//           onPress={generateAndSavePdf}
//         />
//       </View>
//     </View>
//   );
// };

// export default ContentToDownload;
