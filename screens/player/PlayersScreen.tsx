import { observer } from "mobx-react";
import React, { FC } from "react";
import { View } from "react-native";
import { PlayerStore } from "../../stores/PlayerStore";
import { RootStore } from "../../stores/RootStore";
import PlayerScreen from "./PlayerScreen";


interface Props {
    store: RootStore
}

const PlayersScreen: FC<Props> = ({ store }) => {
    const playerStore = store.playerStore;

    return (
        <View>
            {playerStore.players.map((p, i) => (<PlayerScreen key={ i } player={ p } pressHandeler={ playerStore.removePlayer }></PlayerScreen>)) }
        </View>
    )
}

export default observer(PlayersScreen)