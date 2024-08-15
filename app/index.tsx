import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import { globalStyles } from "./styles";
import LikedButton from "@/components/LikedButton";
import ItemsContainer from "@/components/ItemsContainer";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [drinkState, setDrinkState] = useState("Whisky");
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <LikedButton />
      <Title text="Be more than a little drink!" />
      <SearchBar placeholder="Search a drink" />
      <View style={styles.tabsContainer}>
        <ScrollView horizontal={true}>
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
            text="Ballena"
            active={drinkState === "Ballena" ? true : false}
            onPress={() => setDrinkState("Ballena")}
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
      <ItemsContainer drink={drinkState} />
    </SafeAreaView>
  );
}

import { StyleSheet } from "react-native";
import TabItem from "@/components/TabItem";

export const styles = StyleSheet.create({
  tabsContainer: {
    paddingLeft: 24,
    marginTop: 50,
  },
});
