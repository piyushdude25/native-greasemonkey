import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import Paytm from "react-native-paytm";

const PaytmIntegration = () => {
  const [orderId, setOrderId] = useState("");
  const [txnAmount, setTxnAmount] = useState("");

  const handleOrderIdChange = (text) => {
    setOrderId(text);
  };

  const handleTxnAmountChange = (text) => {
    setTxnAmount(text);
  };

  const handlePayment = () => {
    if (orderId === "" || txnAmount === "") {
      Alert.alert("Error", "Please enter order details.");
    } else {
      const paymentParams = {
        MID: "YOUR_MERCHANT_ID",
        ORDER_ID: orderId,
        CUST_ID: "CUSTOMER_ID",
        INDUSTRY_TYPE_ID: "YOUR_INDUSTRY_TYPE_ID",
        CHANNEL_ID: "YOUR_CHANNEL_ID",
        TXN_AMOUNT: txnAmount,
        WEBSITE: "YOUR_WEBSITE",
        CALLBACK_URL: "YOUR_CALLBACK_URL",
        CHECKSUMHASH: "YOUR_CHECKSUMHASH",
      };

      Paytm.startPayment(paymentParams)
        .then((result) => {
          if (result.status === "Success") {
            // Payment successful, implement your logic here
            Alert.alert("Success", "Payment was completed successfully.");
          } else {
            // Payment failed, implement your logic here
            Alert.alert("Error", "Payment was not completed.");
          }
        })
        .catch((error) => {
          // Error occurred during payment, implement your error handling here
          Alert.alert("Error", "An error occurred while processing payment.");
        });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter order ID"
        value={orderId}
        onChangeText={handleOrderIdChange}
      />
      <TextInput
        placeholder="Enter transaction amount"
        value={txnAmount}
        onChangeText={handleTxnAmountChange}
      />
      <Button title="Pay byto paytm" onPress={handlePayment} />
    </View>
  );
};

export default PaytmIntegration;
