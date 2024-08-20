import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import { globalStyles } from "./styles";
import LikedButton from "@/components/LikedButton";
import ItemsContainer from "@/components/ItemsContainer";
import TabItem from "@/components/TabItem";
import RandomDrink from "@/components/RandomDrink";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [drinkState, setDrinkState] = useState("Vodka");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInset={{ bottom: 150 }}
      style={globalStyles.safeAreaContainer}
    >
      <LikedButton />
      <Title text="Be more than a little drink!" />
      <SearchBar placeholder="Search a drink" />

      <View style={styles.tabsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TabItem
            text="Whisky"
            active={drinkState === "Whisky" ? true : false}
            onPress={() => setDrinkState("Whisky")}
          />
          <TabItem
            text="Vodka"
            active={drinkState === "Vodka" ? true : false}
            onPress={() => setDrinkState("Vodka")}
          />
          <TabItem
            text="Gin"
            active={drinkState === "Gin" ? true : false}
            onPress={() => setDrinkState("Gin")}
          />
          <TabItem
            text="Campari"
            active={drinkState === "Campari" ? true : false}
            onPress={() => setDrinkState("Campari")}
          />
          <TabItem
            text="Beer"
            active={drinkState === "Beer" ? true : false}
            onPress={() => setDrinkState("Beer")}
          />
          <TabItem
            text="Rum"
            active={drinkState === "Rum" ? true : false}
            onPress={() => setDrinkState("Rum")}
          />
        </ScrollView>
      </View>
      <ItemsContainer route={`/filter.php?i=${drinkState}`} />
      <RandomDrink />
      <View style={styles.lastContainerPadding}>
        <ItemsContainer
          title="Non Alcoholic"
          route={`/filter.php?a=Non_Alcoholic`}
        />
      </View>
    </ScrollView>
  );
}

//TODO: Create context to tabs and adjusts bottom padding of page scroll
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabsContainer: {
    paddingLeft: 24,
    marginTop: 50,
  },

  lastContainerPadding: {
    paddingBottom: 40,
  },
});
