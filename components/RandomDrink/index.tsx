import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "@/app/styles";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { router } from "expo-router";

interface IDrinkState {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export default function RandomDrink() {
  const [drink, setDrink] = useState<IDrinkState>({
    strDrink: "Loading...",
    strDrinkThumb: "https://placehold.co/50x40",
    idDrink: "123",
  });

  useEffect(() => {
    api.get(`/random.php`).then((response) => {
      setDrink(response.data.drinks[0]);
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.randomTextTitle}>Random drinks</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          router.push({ pathname: `/drink`, params: { id: drink.idDrink } })
        }
        style={styles.randomItemContainer}
      >
        <Image
          source={{
            uri: drink.strDrinkThumb as string,
          }}
          style={{ width: 100, height: 80, borderRadius: 4 }}
        />
        <Text style={styles.randomText}>{drink.strDrink}</Text>
      </TouchableOpacity>
    </View>
  );
}
