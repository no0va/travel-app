import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  imageBox: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "700",
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
  contentBox: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1.5,
    borderColor: "#0C359E",
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
    // gap: 30,
    // width: "100%",
  },
  error: {
    position: "absolute",
    bottom: -30,
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
