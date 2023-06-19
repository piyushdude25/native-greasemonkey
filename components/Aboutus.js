import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Linking } from "react-native";

const handleCallPress = () => {
  const phoneNumber = "+919960445033"; // Replace with the desired phone number
  Linking.openURL(`tel:${9960445033}`);
};

export default function Aboutus() {
  return (
    <ScrollView>
      <View style={{ fontWeight: "bold", margin: 10 }}>
        {/* <Text style={{ fontSize: 20, margin: 10, justifyContent:'flex-end' }}>About Us</Text> */}

        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={require("../assets/main-logo.png")}
            style={{ height: 50, width: 180 }}
          />
        </View>

        <Text style={{ fontSize: 22, margin: 5, fontWeight: "bold" }}>
          SAVITAR AUTOMOTIVE PVT. LTD.
        </Text>
        <Text style={{ margin: 10, color: "#fec324" }}>
          Nagpur, Maharashtra
        </Text>
        {/* <Image source={require("../../assets/Abouticon.png")} style={{height:100, Width:80}}/> */}

        <View
          style={{ height: 2, marginVertical: 10, backgroundColor: "black" }}
        ></View>
        <View
          style={{
            margine: 20,
            backgroundColor: "#fec324",
            height: 270,
            width: "100%",
            borderRadius: 20,
            fontWeight: "bold",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              margin: 10,
              textAlign: "center",
              marginTop: 10,
              justifyContent: "center",
              fontWeight: "Bahnschrift condensed",
            }}
          >
            Greasemonkey is most convenient and reliable on-call Vehicle Repair,
            Service and Maintainance aggregation company, promises to provide
            instant ease of Your troubles. We believe that we are intuitive yet
            efficient with our work to create technological transformation in
            vehicle RSM(Repair,Service & Maintenence) with our well-equipped and
            quality checked Garages and Disciplined workforce, we aspire to
            provide you with the ease of Services like Vehicle Servicing,
            Repairing, Insurance Renewals, RTO Assistance ,EV RSM ,Annual
            Maintenence Contrats,Towing, and Roadside Assistance.{" "}
          </Text>
        </View>
        <View>
          <Text
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#39588f",
              margin: 5,
              borderRadius: 5,
            }}
          >
            {" "}
            01.SELECT/SUBSCRIBE BOOKING
          </Text>
          <Text
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#39588f",
              margin: 5,
              borderRadius: 5,
            }}
          >
            {" "}
            02.SCHEDULE & CHECKOUT
          </Text>
          <Text
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#39588f",
              margin: 5,
              borderRadius: 5,
            }}
          >
            {" "}
            03.VEHICLE PICKUP AND SERVICE
          </Text>
          <Text
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#39588f",
              margin: 5,
              borderRadius: 5,
            }}
          >
            {" "}
            04.VEHICLE DROP AND PAYMENT
          </Text>
          {/* <Text style={{ width: '100%', height: 40, backgroundColor: '#fec324', margin: 5, textAlign: 'center', marginTop: 10, borderRadius: 5, fontWeight: 'bold', fontSize: 20 }}> +91 99 60 44 50 33</Text> */}
          <TouchableOpacity onPress={handleCallPress}>
            <Text
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#fec324",
                margin: 5,
                textAlign: "center",
                marginTop: 10,
                borderRadius: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {" "}
              +91 99 60 44 50 33
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
