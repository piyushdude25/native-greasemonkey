import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const CartStore = () => {
    const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems:", cartItems);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("BikeCart");
      if (value !== null) {
        setCartItems(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    AsyncStorage.setItem("BikeCart", JSON.stringify(newCartItems));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price);
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text>CartStore</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{`Price: ${item.price}`}</Text>
          <TouchableOpacity onPress={() => handleDelete(index)}>
            <Text style={styles.deleteBtn}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>

      <Button
        title="Proceed to Checkout"
        onPress={() =>
          navigation.navigate("PaymentPage", {
            total: calculateTotal(),
          })
        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: "80%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  deleteBtn: {
    color: "red",
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartStore;
