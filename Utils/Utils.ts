import { roles } from "../constants/roles";
import { Player } from "../models/Player";
class RoleCount {
    role: string;
    count: number;

    constructor(_role: string, _count: number) {
        this.role = _role;
        this.count = _count;
    }
}

class RuleSet {
    playerCount: number;
    roleCounts: RoleCount[]

    constructor(
        _playerCount: number,
        _fairyCount: number,
        _nughtGoblinCount: number,
        _tricksterCount: number
    ) {

        this.playerCount = _playerCount;

        this.roleCounts = [
            new RoleCount(roles.fairy, _fairyCount),
            new RoleCount(roles.nightGoblin, _nughtGoblinCount),
            new RoleCount(roles.trickster, _tricksterCount)
        ];
    }
}

const getRuleSets = (): RuleSet[] => {
    return ([
        new RuleSet(4, 1, 1, 2),
        new RuleSet(5, 2, 1, 2),
        new RuleSet(6, 3, 2, 1),
        new RuleSet(7, 3, 2, 2),
        new RuleSet(8, 4, 3, 1),
        new RuleSet(9, 4, 3, 2),
        new RuleSet(10, 5, 4, 1)
    ]);
}


export class Utils {
    static getRandomElement = (arr: any[]): any => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // TODO: move this to apropriate call
    static setRoles = (playersArr: Player[], nextDreamerId: string): Player[] => {

        let playersWithNewRoles: Player[] = [...playersArr];
        let ruleSets: RuleSet[] = getRuleSets();


        let ruleSet: RuleSet | undefined = ruleSets.find(r => r.playerCount == playersWithNewRoles.length);
        if (ruleSet == undefined) {
            // TODO: implement thrown player count err
        }

        // assign dreamer role to desired player
        ruleSet = ruleSet as RuleSet
        let dreamer: Player = playersWithNewRoles.find(p => p.id == nextDreamerId) as Player;
        dreamer.role = roles.dreamer;

        // there is always one role too many - this is the case for etopping the role distribution
        let oneRoleRemaining = (): Boolean => {
            return (ruleSet?.roleCounts.length == 1 && ruleSet.roleCounts[0].count == 1);
        }

        while (!oneRoleRemaining()) {
            let nextRole: RoleCount = this.getRandomElement(ruleSet.roleCounts);

            let nexPlayerToAsighnRole: Player = playersWithNewRoles.find(p => p.role == '') as Player;

            nexPlayerToAsighnRole.role = nextRole.role;
            nextRole.count -= 1;

            // if count is 0 - remove the role from thee assignable roles
            if (nextRole.count == 0) ruleSet.roleCounts = [...ruleSet.roleCounts.filter(r => r.role != nextRole.role)];
        }

        return playersWithNewRoles;
    }
}

