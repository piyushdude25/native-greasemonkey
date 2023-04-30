// import React, { useState } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const RegisterScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// const navigation = useNavigation();

//   const handleRegister = () => {
//     // Implement your registration logic here
//     console.log(
//       "Register pressed with email:",
//       email,
//       "and password:",
//       password
//     );
//   };

//   return (
//     <View>
//       <Text>Registration Page</Text>
//       <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
//       <TextInput
//         placeholder="Password"
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry={true}
//       />
//       <Button title="Register" onPress={handleRegister} />
//       <Button
//         title="Already have an account? Sign in"
//         onPress={() => navigation.navigate("LoginScreen")}
//       />
//     </View>
//   );
// };

// export default RegisterScreen;

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    </View>
  );
};

export default RegisterScreen;
