import { globalStyles } from "@/app/styles";
import { View } from "react-native";
import Like from "../../assets/icon-park-outline_like.svg";

export default function LikedButton() {
    return (
        <View style={globalStyles.containerRight}>
            <Like width={20} height={20}/>
        </View>
    )
}