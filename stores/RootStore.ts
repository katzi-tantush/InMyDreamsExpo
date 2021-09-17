import { CardStore } from "./domain-stores/CardStore";
import { PlayerStore } from "./domain-stores/PlayerStore";
import { TimerStore } from "./domain-stores/TimerStore";
export class RootStore{
    // domain stores
    playerStore: PlayerStore;
    cardStore: CardStore;
    timerStore: TimerStore;

    constructor() {
        this.playerStore = new PlayerStore(this);
        this.cardStore = new CardStore(this);
        this.timerStore = new TimerStore(this);
    }
}