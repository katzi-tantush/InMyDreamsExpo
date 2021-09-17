import React, { FC } from "react"
import { View,Text } from "react-native"

interface Props{
    role: string,
    score: number
}

export const PlayerGameInfo: FC<Props> = ({ role, score }) => {
    return (
        <View>
            <Text>
                Role: { role } | Score: { score }
            </Text>
        </View>
    )
}