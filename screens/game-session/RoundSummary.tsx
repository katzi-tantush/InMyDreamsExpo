import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, View } from "react-native";
import screenNavigations from "../../constants/screenNavigation";

interface Props{
    navigation: any
}

const RoundSummaryScreen: FC<Props> = ({ navigation }) => {
    const { roundSummaryNav: RoundSummaryNav } = screenNavigations;

    return (
        <View>
            <Button
                title='Start New Round'
                onPress={() => navigation.navigate(RoundSummaryNav.name)}
            />
        </View>
    )
}

export default observer(RoundSummaryScreen);