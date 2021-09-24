import { action, computed, makeAutoObservable, observable } from "mobx";
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
    correctCards: Card[];

    @observable
    inCorrectCards: Card[];

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        // dev:
        this.setCards(dummyCards);
        this.setCurrentCard();

        this.correctCards = [];
        this.inCorrectCards = [];

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

    @computed
    permitCardCommit = (): boolean => {
        return this.rootStore.timerStore.timerIsActive;
    }

    @action
    commitCard = (correct?: boolean, currentCard?: Card) => {
        if (this.permitCardCommit()) {
            if (correct === true) this.correctCards = [...this.correctCards, currentCard!];
            if (correct === false) this.inCorrectCards = [...this.inCorrectCards, currentCard!];
            this.removeCard(currentCard?.id!);
            if (this.rootStore.timerStore.secsRemaining == 0) {
                this.rootStore.gameRoundStore.setLastCardWasCommitted(true);
            }
        }
        else {
            // TODO: implement start timer popup
        }
    }

    @action
    emptyCommittedCards = () => {
        this.correctCards = [];
        this.inCorrectCards = [];
    }
}