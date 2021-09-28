import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Button, View } from "react-native";
import screenNavigations from "../../constants/screenNavigation";
import { useStore } from "../../context/StoreProvider";
import CardStackItemScreen from "./CardStackItemScreen";

interface Props {
    navigation: any;
}

const CardStackMenuScreen: FC<Props> = ({ navigation }) => {
    const { cardStackEditDetailsNav } = screenNavigations;
    
    const { cardStackStore } = useStore();
    const { cardStacks, setSelectedCardStack } = cardStackStore;

    return (
        <View>
            {/* TODO: 
            implement 2 default card stack:
            1 hebrew
            1 english
            spec unwanted chars
            filter unwanted chars
            */}

            {cardStacks.map(c => 
            <View key={c.id}>
                    <CardStackItemScreen cardStack={c} />
                    <Button
                        title='edit card stack'
                        onPress={() => {
                            setSelectedCardStack(c);
                            navigation.navigate(cardStackEditDetailsNav.name);
                        }}
                    />
            </View>
            )}
            
            {/* TODO: 
            implement create card stack screens
            */}
        </View>
    )
}

export default observer(CardStackMenuScreen)