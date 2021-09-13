import { observer } from "mobx-react";
import React, { FC } from "react";
import { View } from "react-native";
import { useStore } from "../../../context/StoreProvider";
import AddNewPlayerScreen from "./AddNewPlayerScreen";
import ExistingPlayerFormField from "./ExistingPlayerFormField";

// interface Props {
//     playerStore: PlayerStore
// }

// const PlayersInitScreen: FC<Props> = ({ playerStore }) => {
const PlayersInitScreen: FC = () => {
    const { playerStore } = useStore();
    
    const { 
        setPlayers, 
        editPlayer,
        // getIdFilteredPlayers,
        removePlayer,
        players,
        requestAddPlayer
    } = playerStore;

    return (
        <View>
            {players.map(p =>
                <ExistingPlayerFormField
                    key={p.id.toString()}
                    player={p}
                    editNameHandeler={editPlayer}
                    removePlayerHandeler={removePlayer}
                />
            )}
            <AddNewPlayerScreen
                addPlayerHandeler={requestAddPlayer}
            />
        </View>
    )
}

export default observer(PlayersInitScreen)