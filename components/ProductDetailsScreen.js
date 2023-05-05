import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShortDescription from "./ShortDescription";

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  console.log("out:", productId);

  const navigation = useNavigation();

  // const storeData = async (key, value) => {
  //   try {
  //     await AsyncStorage.setItem(key, JSON.stringify(value));
  //     console.log("Data stored successfully!");
  //   } catch (error) {
  //     console.log("Error while storing data:", error);
  //   }
  // };

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

  // const handleBtnPress = () => {
  //   console.log(`Book Now pressed for product with ID: ${productId.id}`);

  //   // Your logic for getting the data to be stored
  //   const data = {
  //     /* your data object */
  //     productId,
  //   };

  //   // Store the data in local storage
  //   storeData("BikeCart", data);

  //   navigation.navigate("CartStore", { productId });
  // };

  // const handleBtnPress = () => {
  //   console.log(`Book Now pressed for product with ID: ${productId.id}`);

  //   // Your logic for getting the data to be stored
  //   const data = {
  //     id: Date.now(), // Unique key for each product
  //     ...productId, // Add all the properties from the productId object
  //   };

  //   // Store the data in local storage
  //   storeData("BikeCart", data);

  //   navigation.navigate("CartStore", { productId });
  // };
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


  return (
    <View style={styles.container}>
      <Text>Advance service</Text>
      <Text>{`Product Details Screen for Product ID: ${productId}`}</Text>

      <View>
        <Image source={{ uri: productId.images[0].src }} style={styles.image} />
      </View>

      <Text>{`Name: ${productId.name}`}</Text>
      <Text>{`Price: ${productId.price}`}</Text>

      <ShortDescription short_description={productId.short_description} />

      <TouchableOpacity
        onPress={handleBtnPress}
        style={{ backgroundColor: "blue", padding: 8, marginTop: 8 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Book Now</Text>
      </TouchableOpacity>
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
});

export default ProductDetailsScreen;
