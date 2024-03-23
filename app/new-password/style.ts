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
    borderWidth: 1.5,
    borderColor: "#0C359E",
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
  },
});
