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

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

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
}