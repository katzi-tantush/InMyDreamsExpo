import { CardStore } from "./CardStore";
import { PlayerStore } from "./PlayerStore";

export class RootStore{
    playerStore: PlayerStore;
    cardStore: CardStore;

    constructor() {
        this.playerStore = new PlayerStore(this);
        this.cardStore = new CardStore(this);
    }
}