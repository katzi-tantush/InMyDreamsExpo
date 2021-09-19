import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, View, Text } from "react-native";
import { roles } from "../../../constants/roles";
import { useStore } from "../../../context/StoreProvider";
import AddNewPlayerScreen from "./AddNewPlayerScreen";
import ExistingPlayerFormField from "./ExistingPlayerFormField";
import { PlayerGameInfo } from "./PlayerGameInfo";

const PlayersInitScreen: FC = () => {
    const { playerStore } = useStore();
    const { dreamer } = roles;
    
    const { 
        editPlayerName: editPlayer,
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
                        title={`Set ${dreamer}`}
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