import { Card } from "./Card";

export class CardStack {
    id: number;
    name: string;
    cards: Card[];

    constructor(_id: number, _name: string, _cards: Card[]) {
        this.id = _id;
        this.name = _name;
        this.cards = _cards;
    }

    addCard = (newCard: Card) => {
        this.cards = [...this.cards, newCard];
    }

    removeCard = (cardId: number) => {
        this.cards = [...this.cards.filter(c => c.id == cardId)];
    }
}