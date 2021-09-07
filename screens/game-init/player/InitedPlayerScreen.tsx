import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Player } from "../../../models/Player";
import { PlayerUiStore } from "../../../stores/ui-stores/PlayerUiStore";

interface Props {
    player: Player
    removeHandeler: Function
    editHandeler: Function
}

const InitedPlayerScreen: FC<Props> = ({ 
    player,
    removeHandeler, 
    editHandeler, 
}) => {
    const [name, onChangeText] = useState(player.name);

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={() => editHandeler(player.id, player.name)}
            />
            <Button
                title='Remove Player'
                onPress={() => removeHandeler(player.id)}
            />
        </View>
    )
}

export default observer(InitedPlayerScreen);