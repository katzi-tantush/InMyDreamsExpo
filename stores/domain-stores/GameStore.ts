import { action, makeAutoObservable, observable } from "mobx";
import { dummyPlayers } from "../../dummy-data/dummyPlayers";
import { Card } from "../../models/Card";
import { GameRound } from "../../models/GameRound";
import { RootStore } from "../RootStore";

export class GameStore{
    rootStore: RootStore;

    @observable
    gameRounds: GameRound[];

    @observable
    currentGameRound?: GameRound;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.gameRounds = [];

        //TODO: remove whn done with dev: test gameRoundInit:
        const [dreamer, fairy, nightGoblin, trickster] = dummyPlayers;
        this.currentGameRound = new GameRound(dreamer.id, [fairy.id], [nightGoblin.id], [trickster.id]);

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
    commitCard = (correct: boolean, card: Card) => {
        let { correctCards, incorrectCards } = this.currentGameRound as GameRound;

        if (correct) {
            correctCards = [...correctCards, card];
            console.log(`in GameStore - correct cards: ${JSON.stringify(correctCards)}`);
        }
        else {
            incorrectCards = [...incorrectCards, card];
            console.log(`in GameStore - in-correct cards: ${JSON.stringify(incorrectCards)}`);
        }
    }
}