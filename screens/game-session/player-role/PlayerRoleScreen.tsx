import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import { useStore } from "../../../context/StoreProvider";
import { Player } from "../../../models/Player";

interface Props{
    player: Player
}

const PlayerRoleScreen: FC<Props> = ({ player }) => {
    const { name, role, score } = player;
    
    return (
        <View>
            <Text>
                Name: {name} {role==='' ? '' : `| Role: ${role}`} | Score: {score}
            </Text>
        </View>
    );
}

export default PlayerRoleScreen;