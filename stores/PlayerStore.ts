import { action, makeAutoObservable, observable } from "mobx";
import { dummyPlayers } from "../dummy-data/dummyPlayers";
import { Player } from "../models/Player";

export class PlayerStore {
    @observable
    players: Player[];

    constructor() {
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
}

export const playerStore = new PlayerStore();