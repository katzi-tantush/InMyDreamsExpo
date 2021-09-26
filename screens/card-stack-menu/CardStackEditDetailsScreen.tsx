import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useStore } from "../../context/StoreProvider";

const CardStackEditDetailsScreen: FC = () => {
    const { cardStackStore } = useStore();
    const { selectedCardStack, setSelectedCardStackName } = cardStackStore;

    const { name } = selectedCardStack!;

    const [nameValue, setNameValue] = useState(name)

    return (
        <View>
            <Text>
                Card Stack Title:
                <TextInput
                    value={nameValue}
                    onChangeText={text => {
                        setNameValue(text);
                        setSelectedCardStackName(text);
                    }}
                />
            </Text>
        </View>
    )
}

export default observer(CardStackEditDetailsScreen);