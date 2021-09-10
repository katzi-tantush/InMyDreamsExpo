import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View } from "react-native"
import screenNavigations from "../../navigation/screenNavigation"
import PlayersInitScreen from "./player/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { cardStackNav } = screenNavigations;

    return (
        <View>
            <PlayersInitScreen />
            <Button
                title='Start Game'
                onPress={() => {navigation.navigate(cardStackNav.name)}}
            />

        </View>
    )
}

export default observer(NewGameInitScreen);