import React, { FC } from "react"
import { View, Text } from "react-native"
import TimerFormattedTime from "../../interfaces/TimerFormattedTime";

interface Props {
    formattedTime: TimerFormattedTime
}

const TimerDisplay: FC<Props> = ({ formattedTime }) => {
    const { mins, secs } = formattedTime;

    return (
        <View>
            <Text>
                {mins} : {secs}
            </Text>
        </View>
    )
}

export default TimerDisplay;