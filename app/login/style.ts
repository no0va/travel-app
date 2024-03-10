import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
  mainBox: {
    padding: 16,
    flex: 1,
  },
  headerTitle: { paddingRight: 25, marginBottom: 30 },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#5b5a5a",
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
  description: {
    fontSize: 22,
    marginTop: 15,
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
  contentbox: { flex: 1, justifyContent: "space-between" },
  inputBox: {
    paddingHorizontal: 15,
    marginVertical: 40,
    gap: 40,
    width: "100%",
  },
  forgetPassword: {
    marginTop: -30,
    color: "#0C359E",
  },
  inputContainer: { position: "relative" },
  button: {
    backgroundColor: "rgba(164, 235, 243, 1)",
    width: 128,
  },
  labelButton: {
    fontWeight: "900",
    fontSize: 16,
    fontFamily: "iran-sans",
  },
  snackBar: {
    fontSize: 14,
    fontFamily: "iran-sans",
    ...Platform.select({
      ios: {
        textAlign: "right",
        direction: "rtl",
        color: "#fff",
      },
      android: {
        textAlign: "right",
        direction: "rtl",
        color: "#fff",
      },
    }),
  },
});
