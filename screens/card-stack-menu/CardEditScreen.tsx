import React, { FC } from "react";
import { TextInput, View } from "react-native";
import { Card } from "../../models/Card";

interface Props {
    card: Card | null;
}

const CardEditScreen: FC<Props> = ({ card }) => {
    
    return (
        <View>
            <TextInput
                value=''
                onChangeText={()=>{}}
            />
        </View>
    )
}
