import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, View, Text } from "react-native";
import { roles } from "../../../constants/roles";
import screenNavigations from "../../../constants/screenNavigation";
import { useStore } from "../../../context/StoreProvider";
import AddNewPlayerScreen from "./AddNewPlayerScreen";
import ExistingPlayerFormField from "./ExistingPlayerFormField";
import { PlayerGameInfo } from "./PlayerGameInfo";

interface Props {
    navigation: any;
}

const PlayersInitScreen: FC<Props> = ({ navigation }) => {
    const { gameRoundNav } = screenNavigations;

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

    const playerCount = getPlayerCount();

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
                playerCount <= 11 ?
                    <AddNewPlayerScreen
                        addPlayerHandeler={requestAddPlayer}
                    />
                    :
                    {}
            }
            {
                playerCount >= 4 ?
                    <Button
                        title='Start Round'
                        onPress={() => {
                            navigation.navigate(gameRoundNav.name);
                        }}
                    />
                    :
                    {}
            }
        </View>
    )
}

export default observer(PlayersInitScreen)