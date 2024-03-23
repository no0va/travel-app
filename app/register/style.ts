import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageBox: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { paddingRight: 25, marginBottom: 30 },

  contentbox: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1.5,
    borderColor: "#0C359E",
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
    marginHorizontal: 20,
    // gap: 30,
    // width: "100%",
  },
  forgetPassword: {
    marginTop: -30,
    color: "#0C359E",
  },
  // inputContainer: { position: "relative" },
  button: {
    backgroundColor: "#0C359E",
    borderRadius: 10,
    width: "100%",
  },
  labelButton: {
    fontWeight: "900",
    fontSize: 18,
    color: "#fff",
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
