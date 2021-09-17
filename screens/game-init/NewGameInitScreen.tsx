import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View, Text } from "react-native"
import { useStore } from "../../context/StoreProvider"
import screenNavigations from "../../navigation/screenNavigation"
import PlayersInitScreen from "./player-init/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { getPlayerCount, dreamerIsSet } = useStore().playerStore;
    const { gameRoundNav } = screenNavigations;

    return (
        <View>
            <PlayersInitScreen />
            {
                dreamerIsSet() ?
                    getPlayerCount() > 10 || getPlayerCount() < 4 ?
                        <Text>
                            Player count must be between 4-10!
                        </Text>
                        :
                        <Button
                            title='Start Game'
                            onPress={() => {
                                navigation.navigate(gameRoundNav.name);
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