import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute, useNavigation } from "@react-navigation/native";

const CartStore2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params;
  console.log("productId::", productId);

  var [customerIdData, setCustomerIdData] = useState("");
  console.log("customerIdData:::", customerIdData);

  // var customerId = customerIdData;

  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    status: "",
    discription: "",
    total: "",
    image: "",
    vehicle_info: "",
    location: "",
    note: "",
    // customerIdData: "",
  });

  console.log("formData:::", formData);

  const handleSetFormData = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      product_name: productId?.product_name || "",
      category: productId?.category || "",
      status: productId?.status || "",
      discription: productId?.discription || "",
      total: productId?.total || "",
      image: productId?.image || "",
      vehicle_info: productId?.vehicle_info || "",
      location: productId?.location || "",
      note: productId?.note || "",
      // customerIdData: customerIdData || customerId,
    }));
  };

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

  useEffect(() => {
    handleSetFormData();
    getDataFromStorage();
  }, [productId]);

  const updatedOrderData = {
    myOrders: formData,
  };

  const handleSubmit = async () => {
    const customerId = customerIdData;

    try {
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

      if (response.ok) {
        // Data successfully updated
        alert("Data updated successfully!");
      } else {
        // Error occurred while updating data
        alert("Error updating data. Please try again.");
      }
    } catch (error) {
      // Network or server error occurred
      alert(
        "An error occurred. Please check your internet connection and try again."
      );
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      product_name: "",
      category: "",
      status: "",
      discription: "",
      total: "",
      image: "",
      vehicle_info: "",
      location: "",
      note: "",
    });
  };

  //   const calculateTotal = () => {
  //     let total = 0;
  //     cartItems.forEach((item) => {
  //       total += parseFloat(item.total);
  //     });
  //     return total.toFixed(2);
  //   };

  const handleGeneratemyOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bike-server1.onrender.com/api/newmyorder/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit order.");
      }

      const data = await response.json();
      // Handle the successful response data if needed.
      console.log("Order submitted:", data);
    } catch (error) {
      console.error("Error submitting order:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={formData.product_name}
        placeholder="product Name"
        onChangeText={(value) => handleChange("product_name", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.category}
        placeholder="category"
        onChangeText={(value) => handleChange("category", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.status}
        placeholder="First status"
        onChangeText={(value) => handleChange("status", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.discription}
        placeholder="discription"
        onChangeText={(value) => handleChange("discription", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.total}
        placeholder="total"
        onChangeText={(value) => handleChange("total", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.image}
        placeholder="image"
        onChangeText={(value) => handleChange("image", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.vehicle_info}
        placeholder="vehicle_info"
        onChangeText={(value) => handleChange("vehicle_info", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.location}
        placeholder="location"
        onChangeText={(value) => handleChange("location", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.note}
        placeholder="note"
        onChangeText={(value) => handleChange("note", value)}
      />
      <Button title="Proceed to Checkout" onPress={handleSubmit} />
      <Button title="generate new-my-order" onPress={handleGeneratemyOrder} />
      <Button title="Reset Fields" onPress={handleReset} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${formData.total}</Text>
      </View>

      <Button
        title="Proceed to Checkout 2"
        onPress={() => {
          navigation.navigate("PaymentPage", { formData });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default CartStore2;
