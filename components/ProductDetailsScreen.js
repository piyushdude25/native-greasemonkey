import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook from React Navigation
import ShortDescription from "./ShortDescription";
import { AsyncStorage } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  // Get the product ID from the route parameters
  const { productId } = route.params;
  console.log("out:", productId);

  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  ///// localstorege store data of cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log("Data stored successfully!");
    } catch (error) {
      console.log("Error while storing data:", error);
    }
  };

  const handleBtnPress = () => {
    
    
    console.log(`Book Now pressed for product with ID: ${productId.id}`);

    // Your logic for getting the data to be stored
    const data = {
      /* your data object */
    };

    // Store the data in local storage
    storeData("BikeCart", data);

    navigation.navigate("CartStore", { productId });
  };

  return (
    <View style={styles.container}>
      <Text>Advance service</Text>
      <Text>{`Product Details Screen for Product ID: ${productId.id}`}</Text>

      <View >
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
