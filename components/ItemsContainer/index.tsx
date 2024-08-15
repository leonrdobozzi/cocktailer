import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Item from "../Item";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface IItemsContainerProps {
  drink: string;
}

interface IDrink {
  strDrinkThumb: string;
  strDrink: string;
}

export default function ItemsContainer({ drink }: IItemsContainerProps) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    api.get(`/filter.php?i=${drink}`).then((response) => {
      setDrinks(response.data.drinks);
    });
  }, [drink]);

  return (
    <View style={styles.itemsContainer}>
      <ScrollView horizontal={true}>
        {drinks && drinks.length > 0 ? (
          drinks.map((drink: IDrink) => (
            <Item image={drink.strDrinkThumb} title={drink.strDrink} />
          ))
        ) : (
          <Text style={{ color: "#fff" }}>Drinks not found...</Text>
        )}
      </ScrollView>
    </View>
  );
}
