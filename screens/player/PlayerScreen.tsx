import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, Text } from "react-native";
import { Player } from "../../models/Player";

interface Props {
    player: Player
    pressHandeler: Function
}

const PlayerScreen: FC<Props> = ({ player, pressHandeler }) => {
    return (

        <Button
            title={JSON.stringify(player)}
            onPress={ () => pressHandeler(player.id)}
        />
        // <Text>
        //     { JSON.stringify(player) }
        // </Text>
    )
}

export default observer(PlayerScreen);