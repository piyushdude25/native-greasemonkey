import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ service, onBookNowPress }) => {
  const { name, price, images } = service;

  return (
    <View style={{ flexDirection: "row", padding: 16 }}>
      {/* <Image
        source={{ uri: images[0].src  }}
        style={{ width: 80, height: 80, marginRight: 16 }}
      /> */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>{`Price: ${price}`}</Text>
        <TouchableOpacity
          onPress={onBookNowPress}
          style={{ backgroundColor: "blue", padding: 8, marginTop: 8 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
