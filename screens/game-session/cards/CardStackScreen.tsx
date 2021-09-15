import React, { FC, useEffect } from "react"
import { View, Text, Button } from "react-native"
import { Card } from "../../../models/Card"
import { CardScreen } from "./CardScreen"
import * as ScreenOrientation from 'expo-screen-orientation';
import { useStore } from "../../../context/StoreProvider"
import { observer } from "mobx-react-lite";
import TimerScreen from "../../timer/TimerScreen";


interface Props{
}

const CardStackScreen: FC = () => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const { cardStore } = useStore();
    
    const {
        currentCard, 
        commitCard
    } = cardStore;
    
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
                }}
            />
            <Button
                title='swipte left - incorrect'
                onPress={() => {
                    commitCard(false, currentCard);
                }}
            />
            <Button
                title='swipte up - pass'
                onPress={() => {
                    commitCard();
                }}
            />
            <TimerScreen/>
        </View>
        )
    return (
        <Text> No cards left! </Text>
    )
}

export default observer(CardStackScreen);