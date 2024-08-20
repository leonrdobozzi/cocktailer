import DrinkIngredient from "@/components/DrinkIngredient";
import { api } from "@/services/api";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "./styles";
import ImageContainer from "@/components/ImageContainer";

interface IDrinkState {
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strInstructions: string;
}

export default function Drink() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { id } = useLocalSearchParams();

  const [drink, setDrink] = useState<IDrinkState>({
    strDrink: "Loading...",
    strDrinkThumb: "https://placehold.co/50x40",
    strIngredient1: "Loading...",
    strInstructions: "Loading...",
  });

  useEffect(() => {
    api.get(`/lookup.php?i=${id}`).then((response) => {
      setDrink(response.data.drinks[0]);
    });
  }, []);

  return (
    <View style={styles.drinkContainer}>
      <ImageContainer
        title={drink.strDrink}
        category={drink.strIngredient1}
        image={drink.strDrinkThumb}
      />
      <View style={styles.ingredientsContainer}>
        <DrinkIngredient ingredient={drink.strIngredient1} />
        <DrinkIngredient ingredient={drink.strIngredient2} />
        <DrinkIngredient ingredient={drink.strIngredient3} />
        <DrinkIngredient ingredient={drink.strIngredient4} />
        <DrinkIngredient ingredient={drink.strIngredient5} />
        <DrinkIngredient ingredient={drink.strIngredient6} />
        <DrinkIngredient ingredient={drink.strIngredient7} />
        <DrinkIngredient ingredient={drink.strIngredient8} />
        <DrinkIngredient ingredient={drink.strIngredient9} />
        <DrinkIngredient ingredient={drink.strIngredient10} />
        <DrinkIngredient ingredient={drink.strIngredient11} />
        <DrinkIngredient ingredient={drink.strIngredient12} />
        <DrinkIngredient ingredient={drink.strIngredient13} />
        <DrinkIngredient ingredient={drink.strIngredient14} />
        <DrinkIngredient ingredient={drink.strIngredient15} />
      </View>
      <View style={globalStyles.container}>
        <Text style={styles.drinkDescription}>{drink.strInstructions}</Text>
      </View>
      <View style={globalStyles.container}>
        <TouchableOpacity>
          <Text style={styles.drinkBackToMenu} onPress={() => router.push("/")}>
            {"Back to menu"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drinkContainer: {
    paddingTop: 50,
    backgroundColor: "#0c0f14",
    minHeight: "100%",
  },
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
  ingredientsContainer: {
    marginTop: 20,
  },
  drinkDescription: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "MontserratBold",
    marginTop: 40,
  },
  drinkBackToMenu: {
    color: "#FF5121",
    fontFamily: "MontserratBold",
    marginTop: 100,
  },
});
