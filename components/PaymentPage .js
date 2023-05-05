import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const PaymentPage = ({ route }) => {
  const { total } = route.params;

  const handlePayment = async () => {
    alert("Pay on Delivery");
  };
  return (
    <View>
      <Text style={styles.totalPrice}>Total price: {total}</Text>
      <Text>Enter Card Details</Text>
      <TextInput placeholder="Card Number" />
      <TextInput placeholder="Expiry Date" />
      <TextInput placeholder="CVV" />
      <TextInput placeholder="Name on Card" />
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default PaymentPage;
