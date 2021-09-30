import { action, computed, makeAutoObservable, observable } from "mobx";
import { Card } from "./Card";

export class CardStack {
    id: string;

    @observable
    name: string;

    @observable
    cards: Card[];

    constructor(_id: string, _name: string, _cards: Card[]) {
        this.id = _id;
        this.name = _name;
        this.cards = _cards;

        makeAutoObservable(this);
    }

    @action
    addCard = (newCard: Card) => {
        this.cards = [...this.cards, newCard];
    }

    @action
    removeCard = (cardId: string) => {
        this.cards = [...this.cards.filter(c => c.id != cardId)];
    }

    @computed
    cloneCards = (): Card[] => {
        return [...this.cards];
    }
}