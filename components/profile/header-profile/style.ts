import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 140,
    marginHorizontal: 20,
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  elevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  title: {
    marginRight: 13,
    alignItems: "flex-end",
  },
  username: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0C359E",
  },
  phoneNumber: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
  },
});
