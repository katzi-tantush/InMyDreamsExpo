import { Card } from "./Card";

export class GameRound{
    dreamerId: number;
    fairyIds: number[];
    nightGoblinIds: number[];
    tricksterIds: number[];

    correctCards: Card[];
    incorrectCards: Card[];

    constructor(_dreamerId:number, _fairyIds: number[], _nightGoblinIds:number[], _tricksterIds:number[]) {
        this.dreamerId = _dreamerId;
        this.fairyIds = _fairyIds;
        this.nightGoblinIds = _nightGoblinIds;
        this.tricksterIds = _tricksterIds;

        this.correctCards = [];
        this.incorrectCards = [];
    }
}