import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseInputStyle: {
    zIndex: 100,
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  // inputContainer: { position: "relative" },
  // inputBorder: {
  //   flexDirection: "row-reverse",
  //   alignItems: "center",
  //   // borderBottomWidth: 1.5,
  //   // borderColor: "#bbb",
  //   // paddingBottom: 5,
  //   width: "100%",
  // },
  // inputBorderError: {
  //   borderColor: "red",
  // },
  input: {
    textAlign: "right",
    fontFamily: "iran-sans",
    width: "100%",
    flex: 1,
  },
  inputIcon: {
    marginRight: 5,
    marginLeft: 15,
    color: "#bbb",
  },
  // inputArrow: {
  //   position: "absolute",
  //   ...Platform.select({
  //     ios: {
  //       top: 24,
  //       left: -5,
  //     },
  //     android: {
  //       top: 26.7,
  //       left: -5,
  //     },
  //   }),
  //   color: "#bbb",
  // },
  // inputArrowError: {
  //   color: "red",
  // },
  // error: {
  //   color: "red",
  //   ...Platform.select({
  //     ios: {
  //       textAlign: "right",
  //     },
  //     android: {
  //       textAlign: "right",
  //     },
  //   }),
  // },
});
