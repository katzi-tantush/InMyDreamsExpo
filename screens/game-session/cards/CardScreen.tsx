import React, { FC } from "react"
import { Text } from "react-native"
import { Card } from "../../../models/Card"

interface Props{
    card: Card;
}

export const CardScreen: FC<Props> = ({ card }) => {
    return (
        <Text>
            { card.text }
        </Text>
    )
}