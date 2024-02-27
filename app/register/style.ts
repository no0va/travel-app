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
    fontWeight: "700",
    lineHeight: 53,
    paddingRight: 25,
  },
  contentbox:{ flex: 1, justifyContent: "space-between" },
  inputBox: {
    paddingHorizontal: 6,
    marginTop: 40,
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
    width: "100%",
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    textAlign: "right",
    fontFamily: "iran-sans",
    width: "100%",
  },
});
