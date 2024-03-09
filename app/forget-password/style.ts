import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
  contentBox: {
    paddingHorizontal: 35,
    marginVertical: 70,
    width: "100%",
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(153, 153, 153, 1)",
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
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "rgba(164, 235, 243, 1)",
    width: 200,
    marginTop: 40,
  },
  labelButton: {
    fontWeight: "900",
    fontSize: 16,
  },
});
