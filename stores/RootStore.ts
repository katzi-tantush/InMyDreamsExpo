import { CardStore } from "./domain-stores/CardStore";
import { PlayerStore } from "./domain-stores/PlayerStore";
export class RootStore{
    // domain stores
    playerStore: PlayerStore;
    cardStore: CardStore;

    constructor() {
        this.playerStore = new PlayerStore(this);
        this.cardStore = new CardStore(this);
    }
}