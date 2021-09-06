import React, { FC } from "react";
import { Button, Text, View } from "react-native";

interface Props{
    navigation: any
}

export const HomeScreen: FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button
                title='To Game Init Screen'
                onPress={() => { navigation.navigate('new game init') }} />
        </View>
    )
}