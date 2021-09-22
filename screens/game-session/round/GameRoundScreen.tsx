import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Button, View } from "react-native"
import { useStore } from "../../../context/StoreProvider"
import screenNavigations from "../../../constants/screenNavigation"
import CardStackScreen from "../cards/CardStackScreen"
import TimerScreen from "../timer/TimerScreen"

interface Props {
    navigation: any;
}

const GameRoundScreen: FC<Props> = ({ navigation }) => {
    const { roundSummaryNav } = screenNavigations;

    const { timerStore, gameRoundStore } = useStore();
    const { forceTimerEnd } = timerStore;
    const { roundTimeOver, lastCardCommited, setRoundTimeOver, endRound } = gameRoundStore;

    if (lastCardCommited) {
        // TODO: implement 
        endRound();
        navigation.navigate(roundSummaryNav.name);
    }

    // dev TODO: make a better component for this -
    if (roundTimeOver) {
        setRoundTimeOver(
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