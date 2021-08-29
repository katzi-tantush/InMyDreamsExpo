import React, { FC } from "react";
import { View } from "react-native";
import { PlayerStore } from "../stores/PlayerStore";
import { PlayerScreen } from "./PlayerScreen";


interface Props {
    store: PlayerStore
}

export const PlayersScreen: FC<Props> = ({ store }) => {
    return (
        <View>
            {store.players.map((p, i) => (<PlayerScreen key={ i } player={ p }></PlayerScreen>)) }
        </View>
    )
}