import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const PaymentPage = () => {
  console.log("PaymentPage");
  const handlePayment = async () => {
    alert("Pay on Delivery");
  };
  return (
    <View>
      <Text>Enter Card Details</Text>
      <TextInput placeholder="Card Number" />
      <TextInput placeholder="Expiry Date" />
      <TextInput placeholder="CVV" />
      <TextInput placeholder="Name on Card" />
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default PaymentPage;
