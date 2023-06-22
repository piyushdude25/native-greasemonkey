import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuButton from "../components/MenuButton";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    const userData = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5050/api/newCustomer/customerregister",
        userData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <View>
      <Text>Registration Page</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Already have an account? Sign in"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <MenuButton onPress={() => navigation.navigate("Services")} />
      <Button
        title="go to CartStore"
        onPress={() => navigation.navigate("CartStore")}
      />

      <Button
        title="go to Authentication page"
        onPress={() => navigation.navigate("Authentication")}
      />

      {/* <Button
        title="MySlider"
        onPress={() => navigation.navigate("MySlider")}
      /> */}
    </View>
  );
};

export default RegisterScreen;
