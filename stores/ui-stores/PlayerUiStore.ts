import { action, makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

export class PlayerUiStore{
    rootStore: RootStore;

    beingEdittedId: number | null;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        this.beingEdittedId = null;
        makeAutoObservable(this);
    }

    @action
    setBeingEdittedId = (playerId?: number) => {
        this.beingEdittedId = playerId || null;
    }
}