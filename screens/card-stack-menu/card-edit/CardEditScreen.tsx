import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import { TextInput, View } from "react-native";
import { useStore } from "../../../context/StoreProvider";
import { Card } from "../../../models/Card";

interface Props {
    card: Card;
}

const CardEditScreen: FC<Props> = ({ card }) => {

    const { setText, text } = card
    const [cardTextVal, setCardTextVal] = useState(text)

    return (
        <View>
            <TextInput
                value={cardTextVal}
                onChangeText={inputText => {
                    setCardTextVal(inputText);
                    setText(cardTextVal);
                }}
            />
        </View>
    )
}

export default observer(CardEditScreen);
