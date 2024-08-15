import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ITabItemProps {
  active: boolean;
  text: string;
  onPress: () => void;
}

export default function TabItem({ active, text, onPress }: ITabItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tab}>
      <Text style={styles.tabsText}>{text}</Text>
      {active && <View style={styles.tabDot} />}
    </TouchableOpacity>
  );
}
