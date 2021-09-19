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
    const { setLastCardCommited } = gameSessionStore;
    const { gameRoundNav } = screenNavigations;

    const playerCount: number = getPlayerCount();

    return (
        <View>
            <PlayersInitScreen />
            {
                dreamerIsSet() ?
                    playerCount > 10 || playerCount < 4 ?
                        <Text>
                            Player count must be between 4-10!
                        </Text>
                        :
                        <Button
                            title='Start Game'
                            onPress={() => {
                                if (getRoleFilteredPlayers('').length > 0) {
                                    // TODO: implement not all players have roles popup/warning
                                }
                                else {
                                    setLastCardCommited(false);
                                    navigation.navigate(gameRoundNav.name);
                                }
                            }}
                        />
                    :
                    <Text>
                        Please choose a dreamer to continue
                    </Text>
            }
        </View>
    )
}

export default observer(NewGameInitScreen);