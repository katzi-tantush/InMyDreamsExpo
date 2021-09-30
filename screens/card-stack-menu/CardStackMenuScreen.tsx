import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, View } from "react-native";
import screenNavigations from "../../constants/screenNavigation";
import { useStore } from "../../context/StoreProvider";
import CardStackItemScreen from "../shared/CardStackItemScreen";

interface Props {
    navigation: any;
}

const CardStackMenuScreen: FC<Props> = ({ navigation }) => {
    const { cardStackEditDetailsNav } = screenNavigations;
    
    const { cardStackStore } = useStore();
    const { cardStacks, setSelectedCardStack, deleteCardStack, initNewCardStack } = cardStackStore;

    return (
        <View>
            {cardStacks.map(cardStack => 
            <View key={cardStack.id}>
                    <CardStackItemScreen cardStack={cardStack} />
                    <Button
                        title='edit card stack'
                        onPress={() => {
                            setSelectedCardStack(cardStack);
                            navigation.navigate(cardStackEditDetailsNav.name);
                        }}
                    />
                    <Button
                        title='Remove Card Stack'
                        onPress={() => {
                            deleteCardStack(cardStack.id)
                        }}
                    />
            </View>
            )}
            <Button
                title='Add New Card Stack'
                onPress={() => {
                    initNewCardStack();
                    navigation.navigate(cardStackEditDetailsNav.name);
                }}
            />
        </View>
    )
}

export default observer(CardStackMenuScreen)