import { action, computed, makeAutoObservable, observable } from "mobx";
import { roles } from "../../constants/roles";
import { dummyPlayers } from "../../dummy-data/dummyPlayers";
import { Player } from "../../models/Player";
import { Factory } from "../../Utils/Factory";
import { Utils } from "../../Utils/Utils";
import { RootStore } from "../RootStore";

export class PlayerStore {
    rootStore: RootStore;
    roles: any;

    @observable
    players: Player[];

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        this.players = dummyPlayers;
        this.roles = roles;

        makeAutoObservable(this);
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
    removePlayer = (id: string) => {
        this.players = [...this.getIdFilteredPlayers(id)]
    }

    @action
    editPlayerName = (id: string, edittedName: string) => {
        let player: Player = this.players.find(p => p.id == id) as Player;
        player.name = edittedName;
    }

    @action
    addPointsToPlayerScore = (points: number, player: Player) => {
        player.score = player.score + points;
    }

    @computed
    getIdFilteredPlayers = (id: string): Player[] => {
        const newPlayersArr: Player[] = [...this.players.filter(p => p.id !== id)];
        return newPlayersArr;
    }

    @computed
    getRoleFilteredPlayers = (_role: string): Player[] => {
        return this.players.filter(p => p.role == _role);
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
            const newPlayer: Player = Factory.genPlayer(newPlayerName);
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
    initRoundRoles = (dreamerId: string) => {
        this.emptyRoles();
        const newRoundPlayers: Player[] = Utils.setRoles(this.players, dreamerId);
        
        this.setPlayers([...newRoundPlayers]);
    }
}

export const rootStore: RootStore = new RootStore();