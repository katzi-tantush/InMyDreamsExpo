import { makeAutoObservable, observable } from "mobx";
import { Card } from "./Card";

export class CardStack {
    id: string;
    @observable
    name: string;
    cards: Card[];

    constructor(_id: string, _name: string, _cards: Card[]) {
        this.id = _id;
        this.name = _name;
        this.cards = _cards;

        makeAutoObservable(this);
    }

    addCard = (newCard: Card) => {
        this.cards = [...this.cards, newCard];
    }

    removeCard = (cardId: string) => {
        this.cards = [...this.cards.filter(c => c.id == cardId)];
    }
}