import { observer } from "mobx-react-lite"
import React, {FC, useState} from "react"
import { Button, TextInput, View } from "react-native"

interface Props{
    addPlayerHandeler: Function
}

const AddNewPlayerScreen: FC<Props> = ({ addPlayerHandeler }) => {
const [newPlayerName, setNewPlayerName] = useState('')

    return (
        <View>
            <TextInput
                value={newPlayerName}
                onChangeText={(text) => setNewPlayerName(text)}
            />
            <Button
                title='Add New Player'
                onPress={() => {
                    console.log(`in AddNewPlayerScreen - newPlayerName: ${newPlayerName}`);
                    
                    addPlayerHandeler(newPlayerName)
                    // setNewPlayerName('');
                }}
            />
        </View>
    )
}

export default observer(AddNewPlayerScreen);