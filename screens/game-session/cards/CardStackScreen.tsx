import React, { FC, useEffect } from "react"
import { View, Text, Button } from "react-native"
import { Card } from "../../../models/Card"
import { CardScreen } from "./CardScreen"
import * as ScreenOrientation from 'expo-screen-orientation';
import { useStore } from "../../../context/StoreProvider"
import { observer } from "mobx-react-lite";


interface Props{
}

const CardStackScreen: FC = () => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const { playerStore, cardStore, gameStore } = useStore();
    
    const {
        currentCard, 
        removeCard, 
    } = cardStore;
    
    const { commitCard } = gameStore;
    
    //TODO: test that portrait is enforced when leaving this screen
    // and that landscape is enforced when rendering
    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }, [])

    if (currentCard)
    return (
        <View>
            <CardScreen card={currentCard as Card}></CardScreen>
            <Button
                title='swipte right - correct'
                onPress={() => {
                    commitCard(true, currentCard);
                    removeCard(currentCard.id);
                }}
            />
            <Button
                title='swipte left - incorrect'
                onPress={() => {
                    commitCard(false, currentCard);
                    removeCard(currentCard.id);
                }}
            />
            <Button
                title='swipte up - pass'
                onPress={() => {
                    removeCard(currentCard.id);
                }}
            />
        </View>
        )
    return (
        <Text> No cards left! </Text>
    )
}

export default observer(CardStackScreen);