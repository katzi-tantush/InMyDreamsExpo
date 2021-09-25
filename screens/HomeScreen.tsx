import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import screenNavigations from "../constants/screenNavigation";

interface Props{
    navigation: any
}

export const HomeScreen: FC<Props> = ({ navigation }) => {
    const { gameInitNav, cardStackMenuNav } = screenNavigations;

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button
                title='To Card Sack Menu Screen'
                onPress={() => {navigation.navigate(cardStackMenuNav.name)}}
            />
            <Button
                title='To Game Init Screen'
                onPress={() => { navigation.navigate(gameInitNav.name) }} />
        </View>
    )
}