import { observer } from "mobx-react"
import React, { FC } from "react"
import { Button, View, Text } from "react-native"
import { useStore } from "../../../context/StoreProvider"
import screenNavigations from "../../../navigation/screenNavigation"
import PlayerRoleScreen from "./PlayerRoleScreen"

interface Props{
    navigation: any
}

const PlayersRoleScreen: FC<Props> = ({ navigation }) => {
    const { gameRoundNav } = screenNavigations;

    const { playerStore } = useStore();
    const { 
        players, 
        dreamerIsSet,
        initRoundRoles,
    } = playerStore;

    return (
        <View>
            {players.map(p =>
                <View key={p.id.toString()}>
                    <PlayerRoleScreen player={p} />
                    <Button
                        title='Set Dreamer'
                        onPress={() => initRoundRoles(p.id)}
                    />
                </View>
            )}

            {
                // verify that there is a dreamer and roles have been set
                dreamerIsSet() ?
                    // verify that player count is correct 
                    <Button
                        title='Start Game'
                        onPress={() => { navigation.navigate(gameRoundNav.name) }}
                    />
                    :
                    <Text>
                        'Please select a dreamer for this round'
                    </Text>
            }

        </View>
    )
}

export default observer(PlayersRoleScreen); 