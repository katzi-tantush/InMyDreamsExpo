import React, { FC } from "react"
import { View, Text } from "react-native"
import { dummyCards } from "../../dummy-data/dummyCards"
import { Card } from "../../models/Card"
import { CardStore } from "../../stores/CardStore"
import { CardScreen } from "./CardScreen"

interface Props{
    cardStore: CardStore;
}

export const CardStackScreen: FC<Props> = ({ cardStore }) => {
    cardStore.setCards(dummyCards);
    cardStore.setCurrentCard();
    const { currentCard } = cardStore;

    if (currentCard)
    return (
        <View>
            <CardScreen card={ cardStore.currentCard as Card }></CardScreen>
        </View>
        )
    return (
        <Text> No cards left! </Text>
    )
}