import { CardStack } from "../models/CardStack";
import uuid from 'react-native-uuid';


export class Factory {
    static genUuid = (): string => {
        return uuid.v4().toString();
    }

    static genCardStack = (cardStackName: string): CardStack => {
        let cardStackId: string = Factory.genUuid();
        let newCardStack: CardStack = new CardStack(cardStackId, cardStackName, []);

        return newCardStack;
    }
}