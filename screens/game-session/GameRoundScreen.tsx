import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View } from "react-native"
import CardStackScreen from "./cards/CardStackScreen"
import TimerScreen from "./timer/TimerScreen"

const GameRoundScreen: FC = () => {
    return (
        <View>
            <CardStackScreen />
            <TimerScreen/>
        </View>
    )
}

export default observer(GameRoundScreen);