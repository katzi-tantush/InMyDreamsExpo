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

    @computed
    dreamerIsSet = (): boolean => {
        let dreamer: Player | undefined = this.players.find(p => p.role == 'dreamer');
        return dreamer ? true : false;
    }

    @action
    setPlayers = (newPlayersArr: Player[]) => {
        this.players = [...newPlayersArr];
    }

    @action
    private addPlayer = (newPlayer: Player) => {
        this.players = [...this.players, newPlayer];
    }

    @action
    removePlayer = (id: number) => {
        this.players = [...this.getIdFilteredPlayers(id)]
    }

    @action
    editPlayer = (id: number, edittedName: string) => {
        let player: Player = this.players.find(p => p.id == id) as Player;
        player.name = edittedName;
    }

    @computed
    getIdFilteredPlayers = (id: number): Player[] => {
        const newPlayersArr: Player[] = [...this.players.filter(p => p.id !== id)];
        return newPlayersArr;
    }

    @computed
    getPlayerCount = ():number => {
        return this.players.length;
    }

    @action
    requestAddPlayer = (newPlayerName: string) => {
        const unTakenPlayerName: boolean = this.players.every(p => p.name != newPlayerName);

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
    emptyRoles = () => {
        let emptyRolePlayers: Player[] = this.players.map(p => {
            let emptyRolePlayer: Player = p;
            emptyRolePlayer.role = '';
            return emptyRolePlayer;
        });
        
        
        this.setPlayers([...emptyRolePlayers]);
    }
    
    @action
    initRoundRoles = (dreamerId: number) => {
        this.emptyRoles();
        const newRoundPlayers: Player[] = Utils.setRoles(this.players, dreamerId);
        
        this.setPlayers([...newRoundPlayers]);
        console.log(`in playerStore, initRoundRoles - players: ${JSON.stringify(this.players)}`);
    }
}

export const rootStore: RootStore = new RootStore();