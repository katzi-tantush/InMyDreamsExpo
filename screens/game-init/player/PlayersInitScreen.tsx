import { observer } from "mobx-react";
import React, { FC } from "react";
import { View } from "react-native";
import { PlayerStore } from "../../../stores/domain-stores/PlayerStore";
import { RootStore } from "../../../stores/RootStore";
import { PlayerUiStore } from "../../../stores/ui-stores/PlayerUiStore";
import ExistingPlayerFormField from "./ExistingPlayerFormField";
import InitedPlayerScreen from "./InitedPlayerScreen";

interface Props {
    playerStore: PlayerStore
    playerUiStore: PlayerUiStore
}

const PlayersInitScreen: FC<Props> = ({ playerStore, playerUiStore }) => {
    const { 
        removePlayer, 
        editPlayer,
        players
    } = playerStore;

    const {
        setBeingEdittedId,
        beingEdittedId
    } = playerUiStore;


    return (
        <View>
            {players.map((p, i) => (
                // <InitedPlayerScreen
                //     key={i}
                //     player={p}
                //     editHandeler={editPlayer}
                //     removeHandeler={removePlayer}
                // />
                <ExistingPlayerFormField
                    key={i}
                    player={p}
                    editNameHandeler={editPlayer}
                    removePlayerHandeler={removePlayer}
                />
            ))}
        </View>
    )
}

export default observer(PlayersInitScreen)