import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const ProductCard = ({ service, onBookNowPress }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: service.images[0].src }} style={styles.image} />
      </View>

      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.name}>{service.name}</Text>
          <Text style={styles.price}>₹{service.price}</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View>
          <TouchableOpacity style={styles.button} onPress={onBookNowPress}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    padding: 0.5,
    marginVertical: 2,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    width: "95%",
    // height: 300 ,
    textAlign: "center",
    borderWidth: 0.01,
  },
  imageContainer: {
    // flexBasis: "50%",
    // paddingRight: 10,
    // width: "100%",
    height: 180,
    // borderWidth: 1,
    // borderColor: "yellow",
    // borderRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  details: {
    // flexBasis: "50%",
    paddingLeft: 10,
  },
  name: {
    textAlignVertical: "top",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 0,
  },
  price: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
    fontWeight: "bold",
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
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  horizontalLine: {
    height: 4,
    backgroundColor: "#FFC600",
    marginVertical: 5,
  },
  header: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default ProductCard;
