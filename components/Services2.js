import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Bestseller from "./sliderProducts/Bestseller";
import ArticleBlog from "./sliderProducts/ArticleBlog";

const Services2 = () => {
  return (
    <View>
      <View
        style={{
          padding: "3%",
          backgroundColor: "#FFC600",
          borderRadius: "5%",
          marginTop: "5%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: "120%", fontWeight: "bold" }}>
              Be a Part of
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: "70%", fontWeight: "bold", marginTop: "-3%" }}
            >
              Become our
            </Text>
            <Text style={{ fontSize: "120%", fontWeight: "bold" }}>
              TEAM &gt;
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Text
            style={{
              fontSize: "70%",
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            We Constantly need to expand our Team -our family -to serve our
            customers and maintain serviceability .if you are young Experienced
            enthausiast and want to be part of transforming the world arround
            us, join us! As Mobility Executive, Garage Owners/Mechanics,
            Oprations/Lead/Marketing/Executives.
          </Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Earn with us &gt; </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.container2}>
          <View style={styles.box}>
            <Image
              source={require("../assets/phone-call.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Call Manager</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/gif.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Brewards & coupons</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/profile.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>refer a friend</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: "3%",
          backgroundColor: "#FFC600",
          borderRadius: "5%",
          marginTop: "5%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: "120%", fontWeight: "bold" }}>
              Bestseller
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: "70%", fontWeight: "bold", marginTop: "6%" }}
            >
              Car & Bike Spare Parts &gt;
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Bestseller />
        </View>
      </View>

      <View
        style={{
          padding: "3%",
          backgroundColor: "#FFFFFF",
          borderWidth: 2,
          borderColor: "black",
          borderRadius: "5% 10%",
          marginTop: "5%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: "120%", fontWeight: "bold" }}>
              Articles & Blog
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: "70%", fontWeight: "bold", marginTop: "6%" }}
            >
              Get to know your Vehicle &gt;
            </Text>
          </View>
        </View>
        <View
          style={{ height: 2, backgroundColor: "#000", marginVertical: 5 }}
        />
        <View>
          <ArticleBlog />
        </View>
      </View>
    </View>
  );
};

export default Services2;

const styles = StyleSheet.create({
  horizontalLine: {
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: "75%",
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "5%",
    marginTop: "5%",
  },
  box: {
    width: 100,
    height: 100,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    // backgroundColor: "yellow",
    borderRadius: "5%",
  },
  image: {
    width: 50,
    height: 50,
    margin: "5%",
  },
  text: {
    textAlign: "center",
    fontSize: "75%",
    fontWeight: "bold",
  },
});
