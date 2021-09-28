import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react"
import {  Button, TextInput, View } from "react-native"
import { useStore } from "../../../context/StoreProvider";
import { Card } from "../../../models/Card";
import { Factory } from "../../../Utils/Factory";

interface Props {
    addCardHandeler: Function;
    selectedCardStackId: string;
}

const AddNewCardScreen: FC<Props> = ({ selectedCardStackId, addCardHandeler }) => {

    // const { cardStackStore } = useStore();
    // const { selectedCardStack, setCardStackCards } = cardStackStore;
    // const { id, cards } = selectedCardStack!;
    

    const [cardTextVal, setCardTextVal] = useState<string>('');

    // let newCard: Card;
    
    // useEffect(() => {
    //     if (newCard) {
    //         newCard.setText(cardTextVal);
    //     }
    //     if (cardTextVal.length == 1) {
    //         newCard = Factory.genCard(cardTextVal);
    //     }
    //     return () => {

    //     }
    // }, [cardTextVal])
    

    return (
        <View>
            <TextInput
                value={cardTextVal}
                onChangeText={inputText => {
                    setCardTextVal(inputText);
                }}
            />

            <Button
                title='Add New Card To Stack'
                onPress={() => {
                    // if (newCard) {
                        // add(id, [...cards, newCard]);
                    addCardHandeler(selectedCardStackId, cardTextVal);
                    setCardTextVal('');
                    // }
                }}
            />
        </View>
    )
}

export default observer(AddNewCardScreen);