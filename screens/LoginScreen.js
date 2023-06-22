

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignin = async () => {
    const userData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5050/api/newCustomer/customerlogin",
        userData
      );
      console.log(response);
      // Check the HTTP status code for authentication success
      if (response.status === 200) {
        setEmail("");
        setPassword("");

        // Save user information in local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        navigation.navigate("Services");
      } else {
        console.log("Authentication failed");
        // Display an error message or take appropriate action
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignin} />
    </View>
  );
};

export default LoginScreen;
