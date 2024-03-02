import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseInputStyle: { zIndex: 100 },
  inputContainer: { position: "relative" },
  inputBorder: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderColor: "#bbb",
    paddingBottom: 10,
    width: "100%",
  },
  inputBorderError: {
    borderColor: "red",
  },
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
  inputArrow: {
    position: "absolute",
    top: 31.3,
    left: -5,
    color: "#bbb",
  },
  inputArrowError: {
    color: "red",
  },
});