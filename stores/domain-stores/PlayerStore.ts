import { action, computed, makeAutoObservable, observable } from "mobx";
import { dummyPlayers } from "../../dummy-data/dummyPlayers";
import { Player } from "../../models/Player";
import { Utils } from "../../Utils/Utils";
import { RootStore } from "../RootStore";

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
    setPlayers = (newPlayersArr: Player[]) => {
        console.log(`in setPlayers - newPlayersArr: ${JSON.stringify(newPlayersArr)}`);
        
        this.players = [...newPlayersArr];
        console.log(`in setPlayers - players (store):${JSON.stringify(this.players)}`);
        
    }

    @action
    addPlayer = (newPlayer: Player) => {
        this.players = [...this.players, newPlayer];
    }

    @action
    editPlayer = (id: number, edittedName: string) => {
        let player: Player = this.players.find(p => p.id == id) as Player;
        player.name = edittedName;
    }

    @action
    removePlayer = (id: number) => {
        this.players = [...this.getIdFilteredPlayers(id)]
    }

    @computed
    getIdFilteredPlayers = (id: number): Player[] => {
        const newPlayersArr: Player[] = [...this.players.filter(p => p.id !== id)];
        return newPlayersArr;
    }

    @action
    requestAddPlayer = (newPlayerName: string) => {
        console.log(`in playerStores requestAddPlayer - newPlayerName: ${newPlayerName}`);
        
        const unTakenPlayerName: boolean = this.players.every(p => p.name != newPlayerName);
        console.log(`in playerStores requestAddPlayer - unTakenPlayerName: ${unTakenPlayerName}`);

        if (newPlayerName == '') {
            // implement bad name msg
        }
        else if (!unTakenPlayerName) {
            // implement bad name msg
        }
        else {
            const newId: number = this.players.reduce(
                (acc, cur) => { return (acc > cur ? acc : cur) }
            ).id + 1;

            const newPlayer: Player = new Player(newId, newPlayerName);
            this.addPlayer(newPlayer);
        }
    }

    @action
    initRoundRoles = (playersArr: Player[], dreamerId: number) => {
        const newRoundPlayers: Player[] = Utils.setRoles(this.players, dreamerId);

        this.setPlayers([...newRoundPlayers]);
    }
}

export const rootStore: RootStore = new RootStore();