import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    position: "relative",
  },
  textsContainer: {
    position: "absolute",
    zIndex: 9999,
    backgroundColor: "#00000090",
    width: "90%",
    bottom: 0,
    padding: 24,
  },
  drinkTitle: {
    color: "#FFF",
    fontFamily: "MontserratBold",
    fontSize: 32,
  },
  drinkCategory: {
    color: "#FF5121",
    fontFamily: "MontserratBold",
  },
  image: {
    width: "90%",
    height: 250,
    borderRadius: 4,
  },
});
