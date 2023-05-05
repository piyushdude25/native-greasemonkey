import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuButton from "../components/MenuButton";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    // Implement your registration logic here
    console.log(
      "Register pressed with email:",
      email,
      "and password:",
      password
    );
  };

  return (
    <View>
      <Text>Registration Page</Text>
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
    </View>
  );
};

export default RegisterScreen;
