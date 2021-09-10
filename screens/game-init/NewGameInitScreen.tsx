import { observer } from "mobx-react"
import React, { FC } from "react"
import { View } from "react-native"
import { RootStore } from "../../stores/RootStore"
import PlayersInitScreen from "./player/PlayersInitScreen"

interface Props{
    // store: RootStore
}

// export const NewGameInitScreen: FC<Props> = ({ store }) => {
const NewGameInitScreen: FC = () => {
    // const { playerStore } = store;

    return (
        <View>
            <PlayersInitScreen
                // playerStore={playerStore}
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

export default observer(NewGameInitScreen);