import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "../RootStore";

export class GameSessionStore {
    rootStore: RootStore;

    @observable
    showTimerEndMsg: Boolean;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.showTimerEndMsg = false;

        makeAutoObservable(this);
    }

    @action
    SetShowTimerEndMsg = (show: boolean) => {
        this.showTimerEndMsg = show;
    }
}