import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, View, Text } from "react-native";
import { useStore } from "../../../context/StoreProvider";
import AddNewPlayerScreen from "./AddNewPlayerScreen";
import ExistingPlayerFormField from "./ExistingPlayerFormField";
import { PlayerGameInfo } from "./PlayerGameInfo";

const PlayersInitScreen: FC = () => {
    const { playerStore } = useStore();
    
    const { 
        editPlayer,
        removePlayer,
        requestAddPlayer,
        initRoundRoles,
        getPlayerCount,
        players
    } = playerStore;

    return (
        <View>
            {players.map(p =>
                <View>
                    <ExistingPlayerFormField
                        key={p.id.toString()}
                        player={p}
                        editNameHandeler={editPlayer}
                    />
                    <PlayerGameInfo role={p.role} score={p.score} />
                    <Button
                        title='Set Dreamer'
                        onPress={() => initRoundRoles(p.id)}
                    />

                    <Button
                        title='Remove Player'
                        onPress={() => { removePlayer(p.id) }}
                    />

                </View>
            )}
            {
                getPlayerCount() <= 11 ?
                    <AddNewPlayerScreen
                        addPlayerHandeler={requestAddPlayer}
                    />
                    :
                    <Text>

                    </Text>
            }
        </View>
    )
}

export default observer(PlayersInitScreen)