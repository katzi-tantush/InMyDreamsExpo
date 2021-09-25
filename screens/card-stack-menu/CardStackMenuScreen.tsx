import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { View } from "react-native";
import { useStore } from "../../context/StoreProvider";
import CardStackItemScreen from "./CardStackItemScreen";

const CardStackMenuScreen: FC = () => {
    const { cardStackStore } = useStore();
    const { cardStacks } = cardStackStore;

    return (
        <View>
            {/* TODO: 
            implement 2 default card stack:
            1 hebrew
            1 english
            spec unwanted chars
            filter unwanted chars
            */}

            {cardStacks.map(c => <CardStackItemScreen key={c.id} cardStack={c} />)}
            
            {/* TODO: 
            implement create card stack screens
            */}
        </View>
    )
}

export default observer(CardStackMenuScreen)