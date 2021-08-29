import { observer } from "mobx-react";
import React, { FC } from "react";
import { View } from "react-native";
import { PlayerStore } from "../stores/PlayerStore";
import PlayerScreen from "./PlayerScreen";


interface Props {
    store: PlayerStore
}

const PlayersScreen: FC<Props> = ({ store }) => {
    return (
        <View>
            {store.players.map((p, i) => (<PlayerScreen key={ i } player={ p } pressHandeler={ store.removePlayer }></PlayerScreen>)) }
        </View>
    )
}

export default observer(PlayersScreen)