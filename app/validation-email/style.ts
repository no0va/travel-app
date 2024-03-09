import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: { paddingRight: 25, marginBottom: 30 },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 53,
    color: "#5b5a5a",
  },
  description: {
    fontSize: 16,
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
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#5b5a5a",
    fontSize: 30,
  },
  button: {
    backgroundColor: "rgba(164, 235, 243, 1)",
    width: 128,
    marginTop: 30,
  },
  labelButton: {
    fontWeight: "900",
    fontSize: 16,
  },
});
