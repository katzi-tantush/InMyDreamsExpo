import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

export class CardStackLibraryStore {
    rootStore: RootStore;


    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        makeAutoObservable(this);
    }
}