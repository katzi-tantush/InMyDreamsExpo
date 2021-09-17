import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View, Text } from "react-native"
import { useStore } from "../../context/StoreProvider"
import { Player } from "../../models/Player"
import screenNavigations from "../../navigation/screenNavigation"
import { Utils } from "../../Utils/Utils"
import PlayersInitScreen from "./player-init/PlayersInitScreen"

interface Props{
    navigation: any
}

const NewGameInitScreen: FC<Props> = ({ navigation }) => {
    const { getPlayerCount } = useStore().playerStore;
    const { playerRolesNav } = screenNavigations;

    return (
        <View>
            <PlayersInitScreen />
            {
                getPlayerCount() > 10 || getPlayerCount() < 4 ?
                    <Text>
                        Player count must be between 4-10!
                    </Text>
                    :
                    <Button
                        title='To Player Roles'
                        onPress={() => {
                            navigation.navigate(playerRolesNav.name);
                        }}
                    />
            }
        </View>
    )
}

export default observer(NewGameInitScreen);