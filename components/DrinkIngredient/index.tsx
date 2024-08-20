import { StyleSheet, Text, View } from "react-native";

interface IDrinkIngredientProps {
  ingredient?: string;
}

export default function DrinkIngredient({ ingredient }: IDrinkIngredientProps) {
  return (
    <>
      {ingredient && (
        <View style={styles.drinkIngredientContainer}>
          <Text style={styles.drinkIngredient}>{"\u2022"}</Text>
          <Text style={styles.drinkIngredient}>{ingredient}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  drinkIngredientContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 10,
    marginVertical: 5,
  },
  drinkIngredient: {
    color: "#FFF",
    fontFamily: "MontserratBold",
    fontSize: 16,
  },
});
