import { Text, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "@/app/styles";

interface ITitleProps {
    text: string
}

export default function Title({text}: ITitleProps) {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}