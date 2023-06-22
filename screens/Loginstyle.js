import React from "react";
import { StyleSheet } from "react-native";

const Loginstyle = StyleSheet.create({
  // mainbox:{
  //     height:'100%',
  //    },

  box: {
    width: "100%",
    height: "45%",
    margin: 0,
  },

  box1: {
    width: "100%",
    height: "55%",
    margin: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  secondsectiontext: {
    fontSize: 33,
    color: "#39588f",
    fontWeight: 800,
    padding: 5,
    textAlign: "center",
  },
  secondsectionsubtext: {
    fontSize: 20,
    color: "#39588f",
    fontWeight: 600,
    textAlign: "center",
  },
  innerbox: {
    margin: 20,
  },

  dotcircle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 9,
    padding: 15,
  },
  fontcolor: {
    backgroundColor: "#93C6E7",
    borderRadius: 10,
  },
  fontcolor1: {
    backgroundColor: "blue",
    borderRadius: 10,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 17,
    paddingBottom: 17,
    alignItems: "center",
  },

  inputbox1: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },

  inputbox2: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    // paddingTop:17,
    // paddingBottom:17,
    alignItems: "center",
  },
  inputsection: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 7,
    width: 100,
    // borderColor:'black'
    // justifyContent: 'center',
  },

  inputsection1: {
    flex: 2,
    flexDirection: "column",
    // borderWidth: 1,
    alignItems: "center",
    borderRadius: 7,
    width: 100,
    // borderColor:'black'
    // justifyContent: 'center',
  },

  inputsection2: {
    flex: 2,
    flexDirection: "row",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    width: 100,
    gap: 10,
    // borderColor:'black'
    // justifyContent: 'center',
  },

  inputstyle: {
    color: "grey",
    fontWeight: "bold",
    width: "80%",
    padding: 10,
  },

  inputstyle1: {
    color: "grey",
    fontWeight: "bold",
    width: "100%",
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    padding: 10,
  },

  inputstyle2: {
    color: "grey",
    fontWeight: "bold",
    width: "30%",
    borderWidth: 1,
    // margin:5,
    borderRadius: 5,
    padding: 10,
  },

  mainverticlebox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  verticleline: {
    flex: 3,
    width: "100%",
    // height:'1%',
    borderWidth: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
  },

  buttonstyle: {
    color: "white",
    backgroundColor: "#FEC324",
    padding: 15,
    borderRadius: 5,
    width: "20%",
  },
});

export { Loginstyle };
