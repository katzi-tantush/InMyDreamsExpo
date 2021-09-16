import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View } from "react-native"
import { useStore } from "../../context/StoreProvider"
import { Player } from "../../models/Player"
import screenNavigations from "../../navigation/screenNavigation"
import { Utils } from "../../Utils/Utils"
import PlayersInitScreen from "./player-init/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { playerRolesNav: playersRoleNav } = screenNavigations;

    return (
        <View>
            <PlayersInitScreen />
            <Button
                title='To Player Roles'
                onPress={() => {
                    navigation.navigate(playersRoleNav.name);
                }}
            />
        </View>
    )
}

export default observer(NewGameInitScreen);