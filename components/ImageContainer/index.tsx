import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface IImageContainerProps {
  title: string;
  category: string;
  image: string;
}

export default function ImageContainer({
  title,
  category,
  image,
}: IImageContainerProps) {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.textsContainer}>
        <Text style={styles.drinkTitle}>{title}</Text>
        <Text style={styles.drinkCategory}>{category}</Text>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
}
