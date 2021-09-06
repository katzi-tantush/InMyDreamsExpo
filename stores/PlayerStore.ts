import { action, makeAutoObservable, observable } from "mobx";
import { dummyPlayers } from "../dummy-data/dummyPlayers";
import { Player } from "../models/Player";
import { RootStore } from "./RootStore";

export class PlayerStore {
    rootStore: RootStore;

    @observable
    players: Player[];

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.players = dummyPlayers;
        makeAutoObservable(this);
    }

    @action
    addPlayer = (newPlayer: Player) => {
        this.players.push(newPlayer);
    }

    @action
    removePlayer = (id: number) => {
        this.players = this.players.filter(p => p.id != id);
        console.log(this.players);
    }

    @action
    editPlayer = (id: number, edittedName: string) => {
        let player: Player = this.players.find(p => p.id == id) as Player;
        player.name = edittedName;
    }
}

export const rootStore: RootStore = new RootStore();