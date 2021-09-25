import { action, computed, makeAutoObservable, observable } from "mobx";
import { dummyStack } from "../../dummy-data/dummyCards";
import { Card } from "../../models/Card";
import { CardStack } from "../../models/CardStack";
import { RootStore } from "../RootStore";

export class CardStackStore {
    rootStore: RootStore;

    @observable
    cardStacks: CardStack[];

    @observable
    selectedCardStack: string | null;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.cardStacks = [dummyStack];
        this.selectedCardStack = null;

        makeAutoObservable(this);
    }

    @action
    addCardStack = (cardStack: CardStack) => {
        this.cardStacks = [...this.cardStacks, cardStack];
    }

    @action
    deleteCardStack = (cardStackId: string) => {
        this.cardStacks = [...this.cardStacks.filter(c => c.id != cardStackId)];
    }

    @computed
    getCardStackById = (cardStackId: string): CardStack => {
        return this.cardStacks.find(c => c.id == cardStackId)!;
    }

    @action
    setCardStackCards = (cardStackId: string, cards: Card[]) => {
        const cardStack: CardStack = this.getCardStackById(cardStackId);
        cardStack.cards = [...cards];
    }

    @action
    setSelectedCardStack = (cardStackId: string) => {
        this.selectedCardStack = cardStackId;
    }
}