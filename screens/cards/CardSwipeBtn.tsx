import React, { FC } from "react"
import { Button, View } from "react-native"

interface Props{
    resulTitle: string;
    resultAction?: Function;
    removeCardFunction: Function;
}

export const CardSwipeBtn: FC<Props> = ({ resulTitle, resultAction, removeCardFunction }) => {
    return (
        <View>
            <Button 
            title={ resulTitle } 
                onPress={() => {
                    resultAction;
                    removeCardFunction
                }}
            />
        </View>
    )
}