import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { useStore } from "../../../context/StoreProvider";
import TimerFormattedTime from "../../../interfaces/TimerFormattedTime";
import TimeDisplay from "./TimeDisplay";
import TimerDisplay from "./TimeDisplay";

const TimerScreen: FC = () => {
    const { timerStore } = useStore();
    const {
        startTimer,
        stopTimer,
        getFormattedRemainingSecs,
        timerIsActive
    } = timerStore;

    return (
        <View>
            <TimeDisplay formattedTime={getFormattedRemainingSecs()} />
            <Button
                title={timerIsActive ? 'Stop' : 'Start'}
                onPress={() => {
                    timerIsActive ?
                        stopTimer()
                        :
                        startTimer()
                }}
            />
        </View>
    )
}

export default observer(TimerScreen);