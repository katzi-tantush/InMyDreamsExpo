import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, View, Text } from "react-native";
import { roles } from "../../../constants/roles";
import screenNavigations from "../../../constants/screenNavigation";
import { useStore } from "../../../context/StoreProvider";
import { CardCommitSummaryScreen } from "../cards/CardCommitSummaryScreen";

interface Props{
    navigation: any
}

const RoundSummaryScreen: FC<Props> = ({ navigation }) => {
    const { playersInitNav } = screenNavigations;
    
    const { gameRoundStore, roundCardsStore } = useStore();

    const { 
        getDreamerFairyPoints, 
        getNightGoblinPoints, 
        getTricksterPoints,
        initRound
    } = gameRoundStore;

    const {
        correctCards,
        inCorrectCards
    } = roundCardsStore;

    const { dreamer, fairy, nightGoblin, trickster } = roles;

    return (
        <View>
            <Text>
                { dreamer } And { fairy } Score: { getDreamerFairyPoints() }
            </Text>
            <Text>
                { nightGoblin } Score: { getNightGoblinPoints() } 
            </Text>
            <Text>
                { trickster } Score: { getTricksterPoints() }
            </Text>
            <CardCommitSummaryScreen cardCommitType='correct cards' cards={ correctCards }/>
            <CardCommitSummaryScreen cardCommitType='incorrect cards' cards={ inCorrectCards }/>
            <Button
                title='Start New Round'
                onPress={() => {
                    initRound();
                    navigation.navigate(playersInitNav.name);
                }}
            />
        </View>
    )
}

export default observer(RoundSummaryScreen);