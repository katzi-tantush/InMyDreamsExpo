import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View, Text } from "react-native"
import { useStore } from "../../context/StoreProvider"
import screenNavigations from "../../constants/screenNavigation"
import PlayersInitScreen from "./player-init/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { playerStore,gameRoundStore: gameSessionStore } = useStore();
    const { getPlayerCount, dreamerIsSet, getRoleFilteredPlayers } = playerStore;
    const { initRound } = gameSessionStore;
    const { gameRoundNav } = screenNavigations;

    const playerCount: number = getPlayerCount();
    const playersWithoutRolesCount: number = getRoleFilteredPlayers('').length;

    return (
        <View>
            <PlayersInitScreen />
            {
                playersWithoutRolesCount > 0 ?
                    <Text>
                        Not all players have a role - please select a dreamer to distribute roles
                    </Text>
                    :
                    playerCount > 10 || playerCount < 4 ?
                        <Text>
                            Player count must be between 4-10!
                        </Text>
                        :
                        <Button
                            title='Start Game'
                            onPress={() => {
                                initRound();
                                navigation.navigate(gameRoundNav.name);
                            }}
                        />
            }
        </View>
    )
}

export default observer(NewGameInitScreen);