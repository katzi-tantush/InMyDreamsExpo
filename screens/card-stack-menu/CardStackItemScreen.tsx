import React,{ FC } from "react";
import { View, Text } from "react-native";
import { CardStack } from "../../models/CardStack";

interface Props {
    cardStack: CardStack;
}

const CardStackItemScreen: FC<Props> = ({ cardStack }) => {
    const { name } = cardStack;

    return (
        <View>
            <Text>
                { name }
            </Text>
        </View>
    )
}

export default CardStackItemScreen;