import { Card } from "./Card";

export class GameRound {
    dreamerId: string;
    fairyIds: string[];
    nightGoblinIds: string[];
    tricksterIds: string[];

    correctCards: Card[];
    incorrectCards: Card[];

    constructor(_dreamerId:string, _fairyIds: string[], _nightGoblinIds:string[], _tricksterIds:string[]) {
        this.dreamerId = _dreamerId;
        this.fairyIds = _fairyIds;
        this.nightGoblinIds = _nightGoblinIds;
        this.tricksterIds = _tricksterIds;

        this.correctCards = [];
        this.incorrectCards = [];
    }
}