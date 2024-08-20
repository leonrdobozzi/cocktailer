import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Item from "../Item";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface IItemsContainerProps {
  route: string;
  title?: string;
}

interface IDrink {
  strDrinkThumb: string;
  strDrink: string;
  idDrink: string;
}

export default function ItemsContainer({ route, title }: IItemsContainerProps) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    api.get(route).then((response) => {
      setDrinks(response.data.drinks);
    });
  }, [route]);

  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.itemsContainerTitle}>{title && title}</Text>
      <ScrollView horizontal={true}>
        {drinks && drinks.length > 0 ? (
          drinks.map((drink: IDrink) => (
            <Item
              key={drink.idDrink}
              id={drink.idDrink}
              image={drink.strDrinkThumb}
              title={drink.strDrink}
            />
          ))
        ) : (
          <Text style={{ color: "#fff" }}>Drinks not found...</Text>
        )}
      </ScrollView>
    </View>
  );
}
