import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

interface IItemProps {
  image: string;
  title: string;
  id: string;
}

export default function Item({ id, image, title }: IItemProps) {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => router.push({ pathname: `/drink`, params: { id: id } })}
    >
      <Image
        source={{
          uri: image as string,
        }}
        style={{ width: 100, height: 80, borderRadius: 4 }}
      />
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
}
