import { action, makeAutoObservable, observable } from "mobx";
import { GameRound } from "../models/GameRound";
import { RootStore } from "./RootStore";

export class GameStore{
    rootStore: RootStore;

    @observable
    gameRounds: GameRound[];

    @observable
    currentGameRound?: GameRound;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.gameRounds = [];

        makeAutoObservable(this);
    }

    @action
    finishRound = (newGameRound:GameRound) => {
        this.gameRounds = [...this.gameRounds, newGameRound];
    }

    @action
    newRound = (dreamerId:number, fairyIds:number[], nightGoblinIds: number[], tricksterIds:number[]) => {
        this.currentGameRound = new GameRound(dreamerId, fairyIds, nightGoblinIds, tricksterIds);
    }

    @action
    commitCard = (correct: boolean) => {

    }
}