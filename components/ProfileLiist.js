import { View, Text, StyleSheet, Image, ScrollView, } from 'react-native' 
import React from 'react' 
import { useNavigation } from '@react-navigation/native'; 
 
export default function ProfileList() { 
  const navigation = useNavigation(); 
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Hello,Customer</Text>
        <View
          style={{
            width: "100%",
            margin: "auto",
            padding: "5%",
            justifyContent: "center",
          }}
        >
          {/* <View style={{ flexDirection: 'row', }}> 
      <View style={{flex: 1,}}> 
        <Image source={require('../../assets/myBike.png')} style={{width:'80',height:'80'}} /> 
      </View> 
      <View style={{flex: 1,}}> 
        <Image source={require('../../assets/orderHistory.png')} style={{width:'80',height:'80'}} /> 
      </View> 
    </View> */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../assets/bike.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text>My Bike</Text>
            </View>

            <View>
              <Image
                source={require("../assets/orderHistory.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text>Order History</Text>
            </View>
          </View>

          <View
            style={{
              height: 100,
              width: "100%",
              backgroundColor: "#fec324",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/earning.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 25, textAlign: "center" }}>CASH BACK</Text>
          </View>

          {/* <View> 
         <Image 
           source={require("../../assets/earning.png")} 
           style={{ width: 50, height: 50 }} 
         /> 
         <Text>CASH BACK</Text> 
       </View> */}
          <View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/profile-user.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text
                onPress={() => navigation.navigate("ProfilePage")}
                style={{ marginTop: 10 }}
              >
                Profile
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/info.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text
                onPress={() => navigation.navigate("Aboutus")}
                style={{ marginTop: 10 }}
              >
                About us
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/feedback.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text style={{ marginTop: 10 }}>Send feedback</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/earning.png")}
                style={{ width: 40, height: 50, margin: 8 }}
              />
              <Text style={{ marginTop: 10 }}>Refer and Earn</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/rateus.png")}
                style={{ width: 40, height: 50, margin: 5 }}
              />
              <Text style={{ marginTop: 10 }}>Rate us on play store</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/insurance.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text style={{ marginTop: 10 }}>Privacy Policy</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/checked.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text style={{ marginTop: 10 }}>Terms and Conditions</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/logout.png")}
                style={{ width: 40, height: 40, margin: 10 }}
              />
              <Text style={{ marginTop: 10 }}>Logout</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 40,
                borderRadius: 8,
                backgroundColor: "#fec324",
              }}
            >
              <Image
                source={require("../assets/sos.png")}
                style={{ width: 30, height: 30, margin: 10 }}
              />
              <Text style={{ marginTop: 10, textAlign: "center" }}>SOS</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    fontSize: 20 
  }, 
 
});