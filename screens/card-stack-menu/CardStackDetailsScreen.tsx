import { FC } from "react";
import { View } from "react-native";
import { useStore } from "../../context/StoreProvider";

const CardStackDetailsScreen: FC = () => {
    const { cardStackStore } = useStore();

    return (
        <View>
            Card Stack Title: 
        </View>
    )
}

export default CardStackDetailsScreen;