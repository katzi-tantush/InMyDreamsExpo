import { action, makeAutoObservable, observable } from "mobx";
import { dummyCards } from "../../dummy-data/dummyCards";
import { Card } from "../../models/Card";
import { Utils } from "../../Utils/Utils";
import { RootStore } from "../RootStore";

export class CardStore{
    rootStore: RootStore;

    @observable
    cards?: Card[];

    @observable
    currentCard?: Card;

    @observable
    correctCards: Card[]

    @observable
    incorrectCards: Card[]

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        this.correctCards = [];
        this.incorrectCards = [];

        // dev:
        this.setCards(dummyCards);
        this.setCurrentCard();

        makeAutoObservable(this);
    }

    @action
    setCards = (_cards:Card[]) => {
        this.cards = _cards;
    }

    @action
    setCurrentCard = () => {
        if (this.cards != undefined && this.cards?.length > 0) {
            this.currentCard = Utils.getRandomElement(this.cards);
        }
    }

    @action
    removeCard = (id:number) => {
        this.cards = [...(this.cards as Card[]).filter(c => c.id != id)];
        this.setCurrentCard();
    }

    @action
    commitCard = (correct?: boolean) => {
        if (correct === true) {
            this.correctCards = [...this.correctCards, this.currentCard!];
        }
        if (correct === false) {
            this.incorrectCards = [...this.incorrectCards, this.currentCard!];
        }
        this.removeCard(this.currentCard?.id!);
        this.setCurrentCard();
    }
}