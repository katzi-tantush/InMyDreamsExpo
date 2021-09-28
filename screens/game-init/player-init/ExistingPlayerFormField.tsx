import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Player } from "../../../models/Player";

interface Props{
    player: Player
    editNameHandeler: Function
}

const ExistingPlayerFormField: FC<Props> = ({ player, editNameHandeler, }) => {
    
    const { name, id } = player

    const [nameVal, setnameValue] = useState(name);

    return (
        <View>
            <TextInput
                value={nameVal}
                onChangeText={inputText => {
                    setnameValue(inputText);
                    editNameHandeler(id, nameVal);
                }}
            />
        </View>
    )
}

export default observer(ExistingPlayerFormField);