// import React from "react";
// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ShortDescription from "./ShortDescription";

// const ProductDetailsScreen = ({ route }) => {
//   const { productId } = route.params;
//   console.log("out:", productId);

//   const navigation = useNavigation();

//   const storeData = async (key, data) => {
//     try {
//       const existingData = await AsyncStorage.getItem(key);
//       let newData = [];
//       if (existingData !== null) {
//         newData = JSON.parse(existingData);
//       }
//       newData.push(data);
//       await AsyncStorage.mergeItem(key, JSON.stringify(newData));
//       console.log("Data stored successfully!");
//     } catch (error) {
//       console.log("Error while storing data:", error);
//     }
//   };

//   const handleBtnPress = async () => {
//     console.log(`Book Now pressed for product with ID: ${productId.id}`);

//     try {
//       // Get the existing data from AsyncStorage
//       const existingData = await AsyncStorage.getItem("BikeCart");
//       let data = existingData ? JSON.parse(existingData) : [];

//       // Append the new product to the data array
//       data.push(productId);

//       // Store the updated data array back to AsyncStorage
//       await AsyncStorage.setItem("BikeCart", JSON.stringify(data));

//       console.log("Data stored successfully!");
//       navigation.navigate("CartStore", { productId });
//     } catch (error) {
//       console.log("Error while storing data:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Advance service</Text>
//       <Text>{`Product Details Screen for Product ID: ${productId}`}</Text>

//       <View>
//         <Image source={{ uri: productId.images[0].src }} style={styles.image} />
//       </View>

//       <Text>{`product_name: ${productId.product_name}`}</Text>
//       <Text>{`total: ${productId.total}`}</Text>

//       <ShortDescription description={productId.description} />

//       <TouchableOpacity
//         onPress={handleBtnPress}
//         style={{ backgroundColor: "blue", padding: 8, marginTop: 8 }}
//       >
//         <Text style={{ color: "white", textAlign: "center" }}>Book Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     textAlign: "center",
//   },

//   image: {
//     width: "100%",
//     height: 100,
//     aspectRatio: 1,
//     resizeMode: "contain",
//   },
// });

// export default ProductDetailsScreen;

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShortDescription from "./ShortDescription";

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  console.log("out:", productId);

  const navigation = useNavigation();

  const storeData = async (key, data) => {
    try {
      const existingData = await AsyncStorage.getItem(key);
      let newData = [];
      if (existingData !== null) {
        newData = JSON.parse(existingData);
      }
      newData.push(data);
      await AsyncStorage.mergeItem(key, JSON.stringify(newData));
      console.log("Data stored successfully!");
    } catch (error) {
      console.log("Error while storing data:", error);
    }
  };

  const handleBtnPress = async () => {
    console.log(`Book Now pressed for product with ID: ${productId.id}`);

    try {
      // Get the existing data from AsyncStorage
      const existingData = await AsyncStorage.getItem("BikeCart");
      let data = existingData ? JSON.parse(existingData) : [];

      // Append the new product to the data array
      data.push(productId);

      // Store the updated data array back to AsyncStorage
      await AsyncStorage.setItem("BikeCart", JSON.stringify(data));

      console.log("Data stored successfully!");
      navigation.navigate("CartStore", { productId });
    } catch (error) {
      console.log("Error while storing data:", error);
    }
  };

  const handleCartData = (productId) => {
    navigation.navigate("CartStore2", { productId });
  };

  return (
    <View style={styles.container}>
      {productId.category.length > 0 && (
        <Text>{productId.category} Services &gt; </Text>
      )}

      <View>
        <Image source={{ uri: productId.image }} style={styles.image} />
      </View>

      <Text
        style={{ textAlign: "center", fontSize: "75%", fontWeight: "bold" }}
      >{`${productId.product_name}`}</Text>

      {/* <ShortDescription description={productId.description} /> */}
      <Text
        style={{ textAlign: "center", fontSize: "75%", fontWeight: "bold" }}
      >{`${productId.discription}`}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.total}>{`₹ ${productId.total}`}</Text>
        <TouchableOpacity onPress={handleBtnPress} style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleCartData(productId)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book~Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 100,
    aspectRatio: 1,
    resizeMode: "contain",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "yellow",
    padding: 8,
    marginTop: 8,
  },

  total: {
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: "100%",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "transparent",
    padding: 8,
  },

  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: "120%",
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
