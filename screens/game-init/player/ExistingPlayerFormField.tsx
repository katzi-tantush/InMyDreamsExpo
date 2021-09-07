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
                    console.log(`event text: ${nameValue}`);
                }}
            />
            <Button
                title='Remove Player'
                onPress={() => {
                    console.log(`in player edit - id: ${id}`);
                    
                    removePlayerHandeler(id)
                }}
            />

        </View>
    )
}

export default observer(ExistingPlayerFormField);