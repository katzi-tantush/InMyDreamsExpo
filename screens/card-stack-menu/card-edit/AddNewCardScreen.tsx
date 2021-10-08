import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react"
import {  Button, TextInput, View } from "react-native"
import { PlayerInputException } from "../../../constants/exceptions/PlayerInputException";
import { useStore } from "../../../context/StoreProvider";
import { Card } from "../../../models/Card";
import { defaultInputErrs } from "../../../stores/ui-stores/InputErrModalStore";
import { Factory } from "../../../Utils/Factory";
import { Validator } from "../../../Utils/Validator";

interface Props {
    addCardHandeler: Function;
}

const AddNewCardScreen: FC<Props> = ({ addCardHandeler }) => {
    const { inputErrModalStore } = useStore();
    const { setShowModal, addErr, removeErr } = inputErrModalStore;

    const { inValidCardText } = defaultInputErrs;

    const [cardTextVal, setCardTextVal] = useState<string>('');

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
                    try {
                        if (!Validator.validCardText(cardTextVal)) {
                            throw new PlayerInputException('card text must be at least 2 characters long');
                        }

                        addCardHandeler(cardTextVal);
                        setCardTextVal('');

                        removeErr(inValidCardText.type);
                    } catch (e) {
                        console.log(e);
                        
                        addErr(inValidCardText);
                        setShowModal(true);
                    }
                }}
            />
        </View>
    )
}

export default observer(AddNewCardScreen);