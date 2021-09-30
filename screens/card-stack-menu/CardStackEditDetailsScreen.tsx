import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useStore } from "../../context/StoreProvider";
import AddNewCardScreen from "./card-edit/AddNewCardScreen";
import CardEditScreen from "./card-edit/CardEditScreen";

const CardStackEditDetailsScreen: FC = () => {
    const { cardStackStore } = useStore();
    const { 
        selectedCardStack, 
        setSelectedCardStackName, 
        addCardToCardStack 
    } = cardStackStore;

    const { 
        name: cardStackName, 
        cards, 
        removeCard 
    } = selectedCardStack!;

    const [nameValue, setNameValue] = useState(cardStackName);

    console.log(`in CardStackEditDetailsScreen - selectedCardStack: ${JSON.stringify(selectedCardStack)}`);
    

    return (
        <View>
            <Text>
                Card Stack Title:
                <TextInput
                    value={nameValue}
                    onChangeText={inputText => {
                        setNameValue(inputText);
                        setSelectedCardStackName(inputText);
                    }}
                />
            </Text>
            <Text>
                Card Stack Cards:
            </Text>
            {cards.map(c =>
                <View key={c.id}>
                    <CardEditScreen card={c} />
                    <Button
                        title='Delete Card'
                        onPress={() => {
                            removeCard(c.id)
                        }}
                    />
                </View>
            )}
            <AddNewCardScreen
                selectedCardStackId={selectedCardStack?.id!}
                addCardHandeler={addCardToCardStack}
            />
        </View>
    )
}

export default observer(CardStackEditDetailsScreen);