import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import { Player } from "../../../models/Player";

interface Props {
    player: Player
    removeHandeler: Function
    editHandeler: Function
}

const PlayerInitedScreen: FC<Props> = ({ player, removeHandeler, editHandeler }) => {
    return (
        <View>
            <Text>{player.name}</Text>
            <Button 
                title='Remove Player' 
                onPress={() => removeHandeler(player.id)}
            />
        </View>
    )
}

export default observer(PlayerInitedScreen);