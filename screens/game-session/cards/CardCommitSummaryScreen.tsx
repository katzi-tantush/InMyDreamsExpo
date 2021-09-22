import React, { FC } from "react";
import { View, Text } from "react-native";
import { Card } from "../../../models/Card";
import { CardScreen } from "./CardScreen";

interface Props {
    cardCommitType: string,
    cards: Card[]
}

export const CardCommitSummaryScreen: FC<Props> = ({ cardCommitType, cards }) => {
    return (
        <View>
            <Text>
                { cardCommitType }:
            </Text>
            {cards.map(c => <CardScreen key={ c.id } card={ c }/>) }
        </View>
    )
}