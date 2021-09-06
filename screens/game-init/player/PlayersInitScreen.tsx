import { observer } from "mobx-react";
import React, { FC } from "react";
import { View } from "react-native";
import { PlayerStore } from "../../../stores/PlayerStore";
import { RootStore } from "../../../stores/RootStore";
import PlayerInitedScreen from "./PlayerInitedScreen";


interface Props {
    playerStore: PlayerStore
}

const PlayersInitScreen: FC<Props> = ({ playerStore }) => {
    const { 
        removePlayer, 
        editPlayer,
        players
    } = playerStore;

    return (
        <View>
            {players.map((p, i) => (
                <PlayerInitedScreen
                    key={ i } 
                    player={ p } 
                    removeHandeler={removePlayer}
                    editHandeler={editPlayer}
                />
            ))}
        </View>
    )
}

export default observer(PlayersInitScreen)