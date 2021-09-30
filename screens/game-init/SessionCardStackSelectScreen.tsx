import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, View } from "react-native";
import screenNavigations from "../../constants/screenNavigation";
import { useStore } from "../../context/StoreProvider";
import CardStackItemScreen from "../shared/CardStackItemScreen";

interface Props {
    navigation: any;
}

const SessionCardStackSelectScreen: FC<Props> = ({ navigation }) => {
    const { playersInitNav } = screenNavigations;

    const { cardStackStore , gameRoundStore } = useStore();
    const { cardStacks } = cardStackStore;
    const { setSessionCards } = gameRoundStore;

    return (
        <View>
            {cardStacks.map(cardStack => 
                <View key={cardStack.id}>
                    <CardStackItemScreen
                        cardStack={cardStack}
                    />
                    <Button
                        title='Select cards'
                        onPress={() => {
                            setSessionCards(cardStack);
                        }}
                    />
                </View>
            )}
            
            <Button
                title='To Players Init'
                onPress={() => {
                    navigation.navigate(playersInitNav.name);
                }}
            />
        </View>
    )
}

export default observer(SessionCardStackSelectScreen);