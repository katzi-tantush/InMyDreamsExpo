import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View } from "react-native"
import { useStore } from "../../context/StoreProvider"
import { Player } from "../../models/Player"
import screenNavigations from "../../navigation/screenNavigation"
import { Utils } from "../../Utils/Utils"
import PlayersInitScreen from "./player/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { gameRoundNav } = screenNavigations;
    const { playerStore } = useStore();
    const { players,initRoundRoles } = playerStore;
    const dreamerId: number = (Utils.getRandomElement(players) as Player).id;

    return (
        <View>
            <PlayersInitScreen />
            <Button
                title='Start Game'
                onPress={() => {
                    initRoundRoles(players, dreamerId);
                    navigation.navigate(gameRoundNav.name);
                }}
            />

        </View>
    )
}

export default observer(NewGameInitScreen);