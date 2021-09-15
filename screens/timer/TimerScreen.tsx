import React, { FC, useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import TimerFormattedTime from "../../interfaces/TimerFormattedTime";
import TimerDisplay from "./TimeDisplay";

const TimerScreen: FC = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [remainingSecs, setRemainingSecs] = useState(120);

    const getFormattedTime = (secs: number): TimerFormattedTime => {
        const formattedTime: TimerFormattedTime = {
            mins: Math.floor(secs / 60),
            secs: secs % 60
        };

        return formattedTime;
    }

    useEffect(() => {
        let interval: any;
        if (timerActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }, 1000);
        }
        else if (!timerActive && remainingSecs == 0) clearInterval(interval);
        
        return () => {
            clearInterval(interval);
        }
    }, [timerActive, remainingSecs]);

    return (
        <View>
            <Text>
                {/* Secs Remaining: { remainingSecs } */}
                <TimerDisplay formattedTime={ getFormattedTime(remainingSecs) }/>
            </Text>
            <Button
                title={timerActive ? 'Strop' : 'Start'}
                onPress={() => setTimerActive((timerActive) => !timerActive)}
            />
        </View>
    )
}

export default TimerScreen