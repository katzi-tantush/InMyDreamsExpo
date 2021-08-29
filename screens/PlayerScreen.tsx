import React, { FC } from "react";
import { Text } from "react-native";
import { Player } from "../models/Player";

interface Props {
    player: Player
}

export const PlayerScreen: FC<Props> = ({ player }) => {
    return (
        <Text>
            { JSON.stringify(player) }
        </Text>
    )
}