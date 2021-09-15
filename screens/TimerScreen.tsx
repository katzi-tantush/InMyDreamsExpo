import React, { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";
import BackgroundTimer from 'react-native-background-timer';

interface FormattedTime{
    mins: number
    secs: number
}

const TimerScreen: FC = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [secsLeft, setSecsLeft] = useState(120);

    const formatTime = ():FormattedTime => {
        let formattedTime: FormattedTime = {
            mins: Math.floor(secsLeft),
            secs: secsLeft % 60
        }

        return formattedTime;
    }
    
    let formattedSecs: FormattedTime = formatTime();

    const startTimer = () => {
        BackgroundTimer.runBackgroundTimer(() => {
            setSecsLeft(secsLeft => {
                if (secsLeft > 0) return secsLeft - 1;
                return 0;
            })
        }, 1000)    
    }

    useEffect(() => {
        if (isCounting) startTimer();
        else BackgroundTimer.stopBackgroundTimer();
        return () => {
            BackgroundTimer.stopBackgroundTimer();
        }
    }, [isCounting]);

    useEffect(() => {
        formattedSecs = formatTime();
        if (secsLeft == 0) {
            // implement end round popup
        }
    }, [secsLeft])


    return (
        <View>
            <Text onPress={() => setIsCounting(!isCounting)}>
                mins: {formattedSecs.mins} secs: {formattedSecs.secs}
            </Text>
        </View>
    )
}

export default TimerScreen;