import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Player } from "../../../models/Player";

interface Props{
    player: Player
    editNameHandeler: Function
    removePlayerHandeler: Function
}

const ExistingPlayerFormField: FC<Props> = ({
    player,
    editNameHandeler,
    removePlayerHandeler
}) => {
    const { name, id } = player

    const [nameValue, setnameValue] = useState(name);

    return (
        <View>
            <TextInput
                value={nameValue}
                onChangeText={(text) => {
                    setnameValue(text);
                    editNameHandeler(id, nameValue);
                }}
            />
            <Button
                title='Remove Player'
                onPress={() => {removePlayerHandeler(id)}}
            />
        </View>
    )
}

export default observer(ExistingPlayerFormField);