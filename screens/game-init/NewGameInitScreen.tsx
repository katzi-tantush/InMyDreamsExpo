import React, { FC } from "react"
import { View } from "react-native"
import { RootStore } from "../../stores/RootStore"
import PlayersInitScreen from "./player/PlayersInitScreen"

interface Props{
    store: RootStore
}

export const NewGameInitScreen: FC<Props> = ({ store }) => {
    const { playerStore, playerUiStore } = store;

    return (
        <View>
            <PlayersInitScreen
                playerStore={playerStore}
                playerUiStore={playerUiStore}
            />
            {/* 
            add players:
            name input
            edit player
            remove player

            start game 
            */}
        </View>
    )
}