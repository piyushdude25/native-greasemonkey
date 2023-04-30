// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";

// const ProductCard = ({ service, onBookNowPress }) => {
//   const { name, price, images } = service;

//   return (
//     <View style={{ flexDirection: "row", padding: 16 }}>
//       {/* <Image
//         source={{ uri: images[0].src  }}
//         style={{ width: 80, height: 80, marginRight: 16 }}
//       /> */}
//       <View style={{ flex: 1 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
//         <Text style={{ fontSize: 14, color: "gray" }}>{`Price: ${price}`}</Text>
//         <TouchableOpacity
//           onPress={onBookNowPress}
//           style={{ backgroundColor: "blue", padding: 8, marginTop: 8 }}
//         >
//           <Text style={{ color: "white", textAlign: "center" }}>Book Now</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductCard;


import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductCard = ({ service, onBookNowPress }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.price}>${service.price}</Text>
        <View style={styles.quantity}>
          {/* <Button
            title="-"
            onPress={() => handleQuantityChange(quantity - 1)}
          />
          <Text style={styles.quantityValue}>{quantity}</Text>
          <Button
            title="+"
            onPress={() => handleQuantityChange(quantity + 1)}
          /> */}
        </View>
        <Button title="Book Now" onPress={onBookNowPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityValue: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductCard;
