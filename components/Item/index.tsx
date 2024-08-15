import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface IItemProps {
  image: string;
  title: string;
}

export default function Item({ image, title }: IItemProps) {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 100, height: 80, borderRadius: 4 }}
      />
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
}
