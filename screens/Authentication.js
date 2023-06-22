import React, { useState } from "react";
import { View, Text, Button, Image, TextInput, Pressable } from "react-native";
import { Loginstyle } from "./Loginstyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Authentication() {
  const [text, settext] = useState("");
  const [page, setpage] = useState(1);

  const handleContinue = () => {
    setpage(2);
  };

  const handleGoBack = () => {
    setpage(1);
  };

  return (
    <View style={Loginstyle.mainbox}>
      <View style={Loginstyle.box}>
        <Image
          style={Loginstyle.image}
          source={require("../assets/bike.png")}
        />
      </View>

      {page === 1 ? (
        <View style={Loginstyle.box1}>
          <View style={Loginstyle.innerbox}>
            <View>
              <View>
                <Text style={Loginstyle.secondsectiontext}>
                  FAST & EASY BOOKING
                </Text>
                <Text style={Loginstyle.secondsectionsubtext}>
                  Services, Repair, Replacement, AMC
                </Text>
              </View>
              <View style={Loginstyle.dotcircle}>
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor1}
                  color="blue"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
              </View>
              <View style={Loginstyle.mainverticlebox}>
                <View style={Loginstyle.verticleline} />
                <View>
                  <Text
                    style={{ fontSize: 17, fontWeight: "700", color: "black" }}
                  >
                    Log In Or Sign Up
                  </Text>
                </View>
                <View style={Loginstyle.verticleline} />
              </View>
              <View style={Loginstyle.inputbox}>
                <View style={{ borderWidth: 1, padding: 10, borderRadius: 7 }}>
                  <Image
                    style={{ width: 35, height: 25, borderRadius: 10 }}
                    source={require("../assets/icon.png")}
                  />
                </View>
                <View style={Loginstyle.inputsection}>
                  <Text
                    style={{ fontWeight: "900", color: "black", fontSize: 19 }}
                  >
                    +91
                  </Text>
                  <TextInput
                    style={Loginstyle.inputstyle}
                    placeholder="Enter Phone Number"
                    onChangeText={(text) => settext(text)}
                  />
                </View>
              </View>
              <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                <Button
                  onPress={handleContinue}
                  color="#FEC324"
                  title="Continue"
                />
              </View>
              <View style={Loginstyle.mainverticlebox}>
                <View style={Loginstyle.verticleline} />
                <View>
                  <Text
                    style={{ fontSize: 17, fontWeight: "700", color: "black" }}
                  >
                    Or
                  </Text>
                </View>
                <View style={Loginstyle.verticleline} />
              </View>
              <View style={Loginstyle.icons}>
                <View style={Loginstyle.icon}>
                  <FontAwesome5 name="facebook" size={25} color="blue" />
                </View>
                <View style={Loginstyle.icon}>
                  <Image
                    source={require("../assets/bike.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : page === 2 ? (
        <View style={Loginstyle.box1}>
          <View style={Loginstyle.innerbox}>
            <View>
              <View>
                <Text style={Loginstyle.secondsectiontext}>
                  FREE PICKUP & DROP
                </Text>
                <Text style={Loginstyle.secondsectionsubtext}>
                  No Wasting Time On Garage Visits
                </Text>
              </View>
              <View style={Loginstyle.dotcircle}>
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor1}
                  color="blue"
                />
                <FontAwesome5
                  name="circle"
                  size={15}
                  style={Loginstyle.fontcolor}
                  color="#93C6E7"
                />
              </View>
              <View style={Loginstyle.inputbox2}>
                <View style={Loginstyle.inputsection2}>
                  <TextInput
                    style={Loginstyle.inputstyle2}
                    placeholder="OTP"
                    onChangeText={(text) => {
                      settext(text);
                    }}
                  />
                  <Pressable style={Loginstyle.buttonstyle}>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      Verify
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={Loginstyle.inputbox1}>
                <View style={Loginstyle.inputsection1}>
                  <TextInput
                    style={Loginstyle.inputstyle1}
                    placeholder="Full Name"
                    onChangeText={(text) => {
                      settext(text);
                    }}
                  />
                  <TextInput
                    style={Loginstyle.inputstyle1}
                    placeholder="E-Mail Id"
                    onChangeText={(text) => {
                      settext(text);
                    }}
                  />
                </View>
              </View>
              <View style={{ paddingTop: 2, paddingBottom: 2 }}>
                <Button
                  onPress={handleGoBack}
                  color="#FEC324"
                  title="Continue"
                />
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
