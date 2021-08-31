import { action, makeAutoObservable, observable } from "mobx";
import { Card } from "../models/Card";
import { Utils } from "../Utils/Utils";
import { RootStore } from "./RootStore";

export class CardStore{
    rootStore: RootStore;

    @observable
    cards?: Card[];

    @observable
    currentCard?: Card;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        makeAutoObservable(this);
    }

    @action
    setCards = (_cards:Card[]) => {
        this.cards = _cards;
    }

    @action
    setCurrentCard = () => {
        if (this.cards != undefined && this.cards?.length > 0) {
            this.currentCard = Utils.randomElement(this.cards);
        }
    }

    @action
    removeCard = (id:number) => {
        this.cards = this.cards?.filter(c => c.id != id);
        this.setCurrentCard();
    }
}