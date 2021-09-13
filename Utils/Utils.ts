import { Player } from "../models/Player";

class RoleCount {
    role: string;
    count: number;

    constructor(_role:string, _count:number) {
        this.role = _role;
        this.count = _count;
    }
}

class RuleSet {
    playerCount: number;
    roleCounts: RoleCount[]

    constructor(
        _playerCount:number, 
        _fairyCount:number, 
        _nughtGoblinCount: number,
        _tricksterCount:number    
    ) {

        this.playerCount = _playerCount;

        this.roleCounts = [
            new RoleCount('fairy', _fairyCount),
            new RoleCount('night golblin', _nughtGoblinCount),
            new RoleCount('trickster', _tricksterCount)
        ];
    }
}

const ruleSets: RuleSet[] = [
    new RuleSet(4, 1, 1, 2),
    new RuleSet(5, 2, 1, 2),
    new RuleSet(6, 3, 2, 1),
    new RuleSet(7, 3, 2, 2),
    new RuleSet(8, 4, 3, 1),
    new RuleSet(9, 4, 3, 2),
    new RuleSet(10, 5, 4, 1)
];


export class Utils{
    static getRandomElement = (arr:any[]):any => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // TODO: move this to apropriate call
    static setRoles = (playersArr: Player[], nextDreamerId: number): Player[] => {
        // reset player roles for new round
        playersArr.forEach(p => p.role = '');

        let ruleSet: RuleSet | undefined = ruleSets.find(r => r.playerCount == playersArr.length);
        if (ruleSet == undefined) {
            // TODO: implement thrown player count err
        }
        
        // assign dreamer role to desired player
        ruleSet = ruleSet as RuleSet
        let dreamer: Player = playersArr.find(p => p.id == nextDreamerId) as Player;
        dreamer.role = 'dreamer';
        
        // there is always one role too many - this is the case for etopping the role distribution
        let oneRoleRemaining = (): Boolean => {
            return (ruleSet?.roleCounts.length == 1 && ruleSet.roleCounts[0].count == 1);
        }

        while (!oneRoleRemaining()) {
            let nextRole: RoleCount = this.getRandomElement(ruleSet.roleCounts);
            let nexPlayerToAsighnRole: Player = playersArr.find(p => p.role == '') as Player;

            nexPlayerToAsighnRole.role = nextRole.role;
            nextRole.count -= 1;

            // if count is 0 - remove the role from thee assignable roles
            if (nextRole.count == 0) ruleSet.roleCounts = [...ruleSet.roleCounts.filter(r => r.role != nextRole.role)];
        }

        return playersArr;
    }
}

