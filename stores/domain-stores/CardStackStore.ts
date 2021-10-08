import { action, computed, makeAutoObservable, observable } from "mobx";
import { dummyStacks } from "../../dummy-data/dummyCards";
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
        this.cardStacks = dummyStacks;
        this.selectedCardStack = null;

        // console.log(`in cardStackStore, constructor -  dummyStacks: ${JSON.stringify(dummyStacks)}`);
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
    deleteCardStack = (cardStackId: string) => {
        this.setCardStacks([...this.cardStacks.filter(c => c.id != cardStackId)]);
    }

    @computed
    getCardStackById = (cardStackId: string): CardStack => {
        return this.cardStacks.find(c => c.id == cardStackId)!;
    }

    @action
    setSelectedCardStackName = (newName: string) => {
        this.selectedCardStack!.name = newName;
    }

    @action
    setSelectedCardStack = (cardStack: CardStack) => {
        this.selectedCardStack = cardStack;
    }

    @action
    initNewCardStack = () => {
        const newCardStack: CardStack = Factory.genCardStack('');
        this.setSelectedCardStack(newCardStack);
    }
}