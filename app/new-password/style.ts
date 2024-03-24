import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  contentBox: {
    marginVertical: 70,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 53,
    color: "#0C359E",
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
    color: "#0C359E",
    ...Platform.select({
      ios: {
        textAlign: "right",
        fontFamily: "iran-sans",
      },
      android: {
        textAlign: "right",
        fontFamily: "iran-sans",
      },
    }),
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
  },
  error: {
    position: "absolute",
    top: 125,
    right: 0,
    color: "#ff0000",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        textAlign: "right",
        direction: "rtl",
      },
      android: {
        textAlign: "right",
        direction: "rtl",
      },
    }),
  },
});
