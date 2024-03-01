import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  mainBox: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 53,
    paddingRight: 25,
    color: "#5b5a5a",
  },
  contentbox: { flex: 1, justifyContent: "space-between" },
  inputBox: {
    paddingHorizontal: 15,
    marginTop: 40,
    gap: 40,
    width: "100%",
  },
  inputContainer: { position: "relative" },
  inputBorder: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#bbb",
    paddingBottom: 10,
    width: "100%",
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
  button: {
    backgroundColor: "rgba(164, 235, 243, 1)",
    width: 128,
  },
  labelButton: {
    fontWeight: "900",
    fontSize: 16,
  },
});
