import { CardStore } from "./CardStore";
import { GameStore } from "./GameStore";
import { PlayerStore } from "./PlayerStore";

export class RootStore{
    gameStore: GameStore;
    playerStore: PlayerStore;
    cardStore: CardStore;


    constructor() {
        this.playerStore = new PlayerStore(this);
        this.cardStore = new CardStore(this);
        this.gameStore = new GameStore(this);
    }
}