import { CardStackStore } from "./domain-stores/CardStackStore";
import { CardStore } from "./domain-stores/RoundCardsStore";
import { GameRoundStore } from "./domain-stores/GameRoundStore";
import { PlayerStore } from "./domain-stores/PlayerStore";
import { TimerStore } from "./domain-stores/TimerStore";
export class RootStore{
    // domain stores
    cardStackStore: CardStackStore
    playerStore: PlayerStore;
    roundCardsStore: CardStore;
    timerStore: TimerStore;
    gameRoundStore: GameRoundStore;

    constructor() {
        this.cardStackStore = new CardStackStore(this);
        this.playerStore = new PlayerStore(this);
        this.roundCardsStore = new CardStore(this);
        this.timerStore = new TimerStore(this);
        this.gameRoundStore = new GameRoundStore(this);
    }
}