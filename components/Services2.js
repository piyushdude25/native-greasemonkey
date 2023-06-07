import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Bestseller from "./sliderProducts/Bestseller";


 const Services2 = () => {
    
    return (
      <View>
        <View style={{ padding: "3%", backgroundColor: "#FFC600" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>Be a Part of</Text>
            </View>
            <View>
              <Text>Become our</Text>
              <Text>TEXT</Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text>
              We Constantly need to expand our Team -our family -to serve our
              customers and maintain serviceability .if you are young
              Experienced enthausiast and want to be part of transforming the
              world arround us, join us! As Mobility Executive, Garage
              Owners/Mechanics, Oprations/Lead/Marketing/Executives.
            </Text>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Earn with us </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.container2}>
            <View style={styles.box}>
              <Image
                source={require("../assets/icon.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Call Manager</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../assets/icon.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Box 2</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../assets/icon.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Box 3</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: "3%", backgroundColor: "#FFC600" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>Bestseller</Text>
            </View>
            <View>
              <Text>Car & Bike Spare Parts</Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Bestseller/>
          </View>
        </View>

        <View style={{ padding: "3%", backgroundColor: "#FFC600" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>Articles & Blog</Text>
            </View>
            <View>
              <Text>Get to know your Vehicle</Text>
            </View>
          </View>
          <View
            style={{ height: 2, backgroundColor: "#000", marginVertical: 5 }}
          />
          <View>
            <Text>
              We Constantly need to expand our Team -our family -to serve our
              customers and maintain serviceability .if you are young
              Experienced enthausiast and want to be part of transforming the
              world arround us, join us! As Mobility Executive, Garage
              Owners/Mechanics, Oprations/Lead/Marketing/Executives.
            </Text>
          </View>
        </View>
      </View>
    );
  }


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
    fontSize: 11,
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: 100,
    height: 100,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    // backgroundColor: "yellow",
    borderRadius: "5%"
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
  },
});


