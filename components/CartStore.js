import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";

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
    getDataFromStorage();
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
      total += parseFloat(item.total);
    });
    return total.toFixed(2);
  };

  /////////////////

  var [customerIdData, setCustomerIdData] = useState("");
  console.log("customerIdData:::", customerIdData);

  const getDataFromStorage = async () => {
    try {
      const dataFromStorage = await AsyncStorage.getItem("customer-user");
      if (dataFromStorage !== null) {
        const parsedData = JSON.parse(dataFromStorage);
        setCustomerIdData(parsedData._id);
      }
    } catch (error) {
      console.log("Error retrieving data from storage:", error);
    }
  };

  //////////// try     checkout /////////////   >>>>>>>>>>>>>>>>
  const handleCheckout = async () => {
    try {
      const customerId = customerIdData; // Replace with the actual customer ID

      // const myOrdersData = cartItems.map((item) => ({
      //   service_name: item.name,
      //   price: item.price,
      // }));
      /// for multiple order add put at a time

      const myOrdersData = {
        service_name: cartItems[0].product_name,
        price: cartItems[0].total,
        // ADD all details by form like, ...prev, vehicle info, location etc...
      };

      const updatedOrderData = {
        myOrders: myOrdersData,
      };

      const response = await fetch(
        `https://bike-server1.onrender.com/api/customer/myorder/${customerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedOrderData),
        }
      );

      if (response.status === 200) {
        const result = await response.json();
        console.log("Order updated successfully:", result);
        // Handle success, such as displaying a success message
      } else {
        console.log("Order update failed");
        // Handle failure, such as displaying an error message
      }
    } catch (error) {
      console.log(error);
      // Handle error, such as displaying an error message
    }
  };

  ////////////////////////////////<<<<<<<<<<<<<<<<<<<<<

  // vehicle_info: ,
  //       location:
  //       note:

  return (
    <View style={styles.container}>
      <Text> Add order 1 at a time</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>
            {`Product Name: ${item.product_name}`}
          </Text>
          <Text>{`Price: ${item.total}`}</Text>
          <TouchableOpacity onPress={() => handleDelete(index)}>
            <Text style={styles.deleteBtn}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>

      <Button
        title="Proceed to Checkout 1"
        onPress={async () => {
          await handleCheckout();
          navigation.navigate("PaymentPage", {
            total: calculateTotal(),
          });
        }}
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
