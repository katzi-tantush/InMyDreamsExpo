import { action, computed, makeAutoObservable, observable } from "mobx";
import { dummyStack } from "../../dummy-data/dummyCards";
import { Card } from "../../models/Card";
import { CardStack } from "../../models/CardStack";
import { Factory } from "../../Utils/Factory";
import { RootStore } from "../RootStore";

export class CardStackStore {
    rootStore: RootStore;

    @observable
    cardStacks: CardStack[];

    @observable
    selectedCardStack: CardStack | null;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.cardStacks = [dummyStack];
        this.selectedCardStack = null;

        makeAutoObservable(this);
    }

    @action
    setCardStacks = (_cardStacks: CardStack[]) => {
        this.cardStacks = [..._cardStacks];
    }

    @action
    addCardStack = (cardStack: CardStack) => {
        this.cardStacks = [...this.cardStacks, cardStack];
    }

    @action
    addCardToCardStack = (cardStackId: string, newCardText: string) => {
        const newCard: Card = Factory.genCard(newCardText);

        const cardStack: CardStack = this.getCardStackById(cardStackId);
        cardStack.addCard(newCard);
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
    setSelectedCardStackName = (newName: string) => {
        this.selectedCardStack!.name = newName;
    }

    // @action
    // setCardStackCards = (cardStackId: string, cards: Card[]) => {
    //     const cardStack: CardStack = this.getCardStackById(cardStackId);
    //     cardStack.cards = [...cards];
    // }

    @action
    setSelectedCardStack = (cardStack: CardStack) => {
        this.selectedCardStack = cardStack;
    }
}