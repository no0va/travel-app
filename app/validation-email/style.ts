import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  headerTitle: { marginBottom: 30 },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 53,
    color: "#0C359E",
  },
  description: {
    fontSize: 16,
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
    marginBottom: 30,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#0C359E",
    borderRadius: 10,
    color: "#0C359E",
    fontSize: 40,
    textAlign: "center",
    width: 35,
  },
});
