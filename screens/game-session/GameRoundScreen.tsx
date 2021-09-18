import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Button, View } from "react-native"
import { useStore } from "../../context/StoreProvider"
import CardStackScreen from "./cards/CardStackScreen"
import TimerScreen from "./timer/TimerScreen"

interface Props {
    navigation: any;
}

const GameRoundScreen: FC<Props> = ({ navigation }) => {
    const { timerStore, gameSessionStore } = useStore();
    const { forceTimerEnd } = timerStore;
    const { showTimerEndMsg, SetShowTimerEndMsg } = gameSessionStore;

    // dev TODO: make a better component for this -
    if (showTimerEndMsg) {
        SetShowTimerEndMsg(
            confirm('dev - take your time reminder popup')
            )
    }

    return (
        <View>
            <CardStackScreen />
            <TimerScreen />
            {/* dev TODO: remove after dev */}
            <Button
                title='Force Timer End'
                onPress={() => {
                    forceTimerEnd();
                }}
            />
        </View>
    )
}

export default observer(GameRoundScreen);