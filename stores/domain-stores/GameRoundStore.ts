import { action, computed, makeAutoObservable, observable } from "mobx";
import { roles } from "../../constants/roles";
import { CardStack } from "../../models/CardStack";
import { RootStore } from "../RootStore";

export class GameRoundStore {
    rootStore: RootStore;

    @observable
    roundTimeOver: Boolean;

    @observable
    lastCardWasCommited: boolean;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.roundTimeOver = false;
        this.lastCardWasCommited = false;

        makeAutoObservable(this);
    }

    @action
    setRoundTimeOver = (timerHasFinished: boolean) => {
        this.roundTimeOver = timerHasFinished;
    }

    @action
    setLastCardWasCommitted = (commited: boolean) => {
        this.lastCardWasCommited = commited;
    }

    @computed
    getDreamerFairyPoints = (): number => {
        return this.rootStore.roundCardsStore.correctCards.length;
    }

    @computed
    getNightGoblinPoints = (): number => {
        return this.rootStore.roundCardsStore.inCorrectCards.length;
    }

    @computed
    getTricksterPoints = (): number => {
        let score: number;

        let fairyPoints: number = this.getDreamerFairyPoints();
        let nightGoblinPoints: number = this.getNightGoblinPoints();

        let pointsDiff: number = Math.abs(fairyPoints - nightGoblinPoints);

        switch (pointsDiff) {
            case 0:
                score = fairyPoints + 2;
                break;
            case 1:
                score = fairyPoints > nightGoblinPoints ? fairyPoints : nightGoblinPoints;
                break;
            default:
                score = fairyPoints < nightGoblinPoints ? fairyPoints : nightGoblinPoints;
        }
        return score;
    }

    @action
    settleScores = () => {
        const { addPointsToPlayerScore, players } = this.rootStore.playerStore;

        console.log(`in GameRoundStore - settleScores. players: ${JSON.stringify(players)}`);

        players.forEach(p => {
            let pointsToAdd: number;
            console.log(`in GameRoundStore - settleScores. role: ${p.role}`);

            switch (p.role) {
                case roles.nightGoblin:
                    pointsToAdd = this.getNightGoblinPoints();
                    break;
                case roles.trickster:
                    pointsToAdd = this.getTricksterPoints();
                    break;
                default:
                    pointsToAdd = this.getDreamerFairyPoints();
                    break;
            }

            addPointsToPlayerScore(pointsToAdd, p);
        })
    }

    @action
    setSessionCards = (cardStack: CardStack) => {
        let { cards } = this.rootStore.roundCardsStore;
        cards = cardStack.cloneCards();
    }

    @action
    initRound = () => {
        // TODO: if this stays empty just use it form the card store directly
        this.setLastCardWasCommitted(false);
        this.setRoundTimeOver(false);
        this.rootStore.roundCardsStore.emptyCommittedCards();
    }
    
    @action
    endRound = () => {
        this.settleScores();
        this.rootStore.timerStore.resetTimer();
        this.rootStore.playerStore.emptyRoles();
    }

    @computed
    allPlayerRolesSet = (): boolean => {
        return this.rootStore.playerStore.players
            .every(p => p.role !== '');
    }
}