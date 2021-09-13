import React, { FC } from "react"
import { View, Text } from "react-native"
import { dummyCards } from "../../../dummy-data/dummyCards"
import { Card } from "../../../models/Card"
import { CardStore } from "../../../stores/domain-stores/CardStore"
import { CardScreen } from "./CardScreen"
import * as ScreenOrientation from 'expo-screen-orientation';
import { CardSwipeBtn } from "./CardSwipeBtn"
import { GameStore } from "../../../stores/domain-stores/GameStore"
import { useStore } from "../../../context/StoreProvider"


interface Props{
}

export const CardStackScreen: FC = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const { playerStore, cardStore, gameStore } = useStore();

    // debug
    // console.log(`players after init in CradStackScreen - players: ${JSON.stringify(playerStore.players)}`);
    

    const { currentCard, removeCard } = cardStore;
    const { commitCard } = gameStore;

    if (currentCard)
    return (
        <View>
            <CardScreen card={cardStore.currentCard as Card}></CardScreen>
            <CardSwipeBtn
                resulTitle='correct'
                resultAction={() => commitCard(true, currentCard)}
                removeCardFunction={ () => removeCard(currentCard.id) }
            />
            <CardSwipeBtn
                resulTitle='in-correct' 
                resultAction={ () => commitCard(false, currentCard)} 
                removeCardFunction={ () => removeCard(currentCard.id) } 
            />
            <CardSwipeBtn 
            resulTitle='pass' 
            removeCardFunction={ () => removeCard(currentCard.id) }
            />
        </View>
        )
    return (
        <Text> No cards left! </Text>
    )
}