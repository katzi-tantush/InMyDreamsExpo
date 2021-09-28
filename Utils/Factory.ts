import { CardStack } from "../models/CardStack";
import uuid from 'react-native-uuid';
import { Card } from "../models/Card";


export class Factory {
    static genUuid = (): string => {
        return uuid.v4().toString();
    }

    static genCard = (newCardText: string): Card => {
        return new Card(newCardText, Factory.genUuid());
    }

    static genCardStack = (cardStackName: string): CardStack => {
        let cardStackId: string = Factory.genUuid();
        let newCardStack: CardStack = new CardStack(cardStackId, cardStackName, []);

        return newCardStack;
    }
}