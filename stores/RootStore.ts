import { CardStore } from "./domain-stores/CardStore";
import { GameStore } from "./domain-stores/GameStore";
import { PlayerStore } from "./domain-stores/PlayerStore";
import { PlayerUiStore } from "./ui-stores/PlayerUiStore";

export class RootStore{
    // domain stores
    gameStore: GameStore;
    playerStore: PlayerStore;
    cardStore: CardStore;

    // ui stores
    playerUiStore: PlayerUiStore;

    constructor() {
        this.playerStore = new PlayerStore(this);
        this.cardStore = new CardStore(this);
        this.gameStore = new GameStore(this);
        
        this.playerUiStore = new PlayerUiStore(this);
    }
}