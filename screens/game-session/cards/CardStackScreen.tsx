import React, { FC, useEffect } from "react"
import { View, Text, Button } from "react-native"
import { Card } from "../../../models/Card"
import { CardScreen } from "./CardScreen"
import * as ScreenOrientation from 'expo-screen-orientation';
import { useStore } from "../../../context/StoreProvider"
import { observer } from "mobx-react-lite";
import TimerScreen from "../../TimerScreen";


interface Props{
}

const CardStackScreen: FC = () => {
    const { cardStore } = useStore();
    
    const {
        currentCard, 
        commitCard, 
    } = cardStore;
    
    // when entering this screen - lock to landscape
    // when exiting - lock to portrait
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
                title='swipe right - correct'
                onPress={() => commitCard(true)}
            />
            <Button
                title='swipe left - incorrect'
                onPress={() => commitCard(false)}
            />
            <Button
                title='swipe up - pass'
                onPress={() => commitCard()}
            />
            <TimerScreen/>
        </View>
        )
    return (
        <Text> No cards left! </Text>
    )
}

export default observer(CardStackScreen);