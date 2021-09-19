import { action, makeAutoObservable, observable } from "mobx";
import { Player } from "../../models/Player";
import { RootStore } from "../RootStore";

export class GameRoundStore {
    rootStore: RootStore;

    @observable
    showTimerEndMsg: Boolean;

    @observable
    lastCardCommited: boolean;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.showTimerEndMsg = false;
        this.lastCardCommited = false;

        makeAutoObservable(this);
    }

    @action
    SetShowTimerEndMsg = (show: boolean) => {
        this.showTimerEndMsg = show;
    }

    @action
    setLastCardCommited = (commited: boolean) => {
        this.lastCardCommited = commited;
    }

    @action
    settleScores = () => {
        const { correctCards, inCorrectCards } = this.rootStore.cardStore;

        let fairyScore: number = correctCards.length;
        let nightGoblinScores: number = inCorrectCards.length;
        let scoreDiff: number = Math.abs(fairyScore - nightGoblinScores);

        let tricksterScores: number;

        switch (scoreDiff) {
            case 0:
                tricksterScores = fairyScore + 2;
                break;
            case 1:
                tricksterScores = fairyScore > nightGoblinScores ? fairyScore : nightGoblinScores;
                break;
            default:
                tricksterScores = fairyScore < nightGoblinScores ? fairyScore : nightGoblinScores;
        }

        const { getRoleFilteredPlayers, addPointsToPlayersScore, players } = this.rootStore.playerStore;
    }
}