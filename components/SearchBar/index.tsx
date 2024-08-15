import { TextInput, View } from "react-native"
import {styles} from "./styles"
import { globalStyles } from "@/app/styles"

interface ISearchBarProps {
    placeholder: string,
    color?: string
}

export default function SearchBar({placeholder, color}: ISearchBarProps) {
    return (
        <View style={globalStyles.container}>
            <TextInput style={styles.searchInput} placeholder={placeholder} placeholderTextColor={!color ? "#2d3238" : color} />
        </View>
    )
}