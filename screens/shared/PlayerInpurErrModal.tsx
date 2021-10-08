import { observer } from "mobx-react";
import React, { FC } from "react";
import { Button, Modal, View, Text } from "react-native";
import { useStore } from "../../context/StoreProvider";

const PlayerInpurErrModal: FC = () => {
    const { inputErrModalStore } = useStore();
    const { inputErrors, showModal, setShowModal } = inputErrModalStore;

    return (
        <Modal
            visible={showModal}
            animationType='slide'
        >
            <View>
                <Text>
                    You can't continue because of the following errors:
                </Text>
                {inputErrors.map(e => {
                    return (
                        <Text key={e.type}>
                            { e.type }: { e.msg }
                        </Text>
                    )
                })}
            </View>
            <Button
                title='Got It'
                onPress={() => {
                    setShowModal(false);
                }}
            />
        </Modal>
    )
}

export default observer(PlayerInpurErrModal);