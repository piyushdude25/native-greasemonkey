import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook from React Navigation
import ShortDescription from "./ShortDescription";

const ProductDetailsScreen = ({ route }) => {
  // Get the product ID from the route parameters
  const { productId } = route.params;
  console.log("out:", productId);

  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleBtnPress = () => {
    // Navigate to the PaymentPage with the product ID as a parameter
    navigation.navigate("PaymentPage", { productId });
    console.log(`Book Now pressed for product with ID: ${productId.id}`);
  };


  return (
    <View>
      <Text>Advance service</Text>
      {/* <Text>{`Product Details Screen for Product ID: ${productId.id}`}</Text>
      <Text>{`Product Name: ${productId.name}`}</Text>
      <Text>{`short_description: ${productId.short_description}`}</Text> */}

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

export default ProductDetailsScreen;
