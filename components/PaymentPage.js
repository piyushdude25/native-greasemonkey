import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import ContentToDownload from "./ContentToDownload";

const PaymentPage = () => {
 const route = useRoute();
 const { formData } = route.params;

  const handlePayment = async () => {
    alert("Pay on Delivery");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.totalPrice}>Total price: {formData.total}</Text>
      <Text>Enter Card Details</Text>

      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Expiry Date" />
      <TextInput style={styles.input} placeholder="CVV" />
      <TextInput style={styles.input} placeholder="Name on Card" />

      <Button title="Pay Now" onPress={handlePayment} />

      <Text>=========================================</Text>
      {/* <ContentToDownload /> */}
      <Text>=========================================</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default PaymentPage;
