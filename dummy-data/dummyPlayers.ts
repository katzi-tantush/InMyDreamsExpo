import { Player } from "../models/Player";
import { playerRoles } from "../models/playerRoles";

export const dummyPlayers: Player[] = [
    {
        id: 0,
        name: '0',
        role: playerRoles[0].role,
        score: 0
    },
    {
        id: 1,
        name: '1',
        role: playerRoles[1].role,
        score: 0
    },
    {
        id: 2,
        name: '2',
        role: playerRoles[2].role,
        score: 0
    },
    {
        id: 3,
        name: '3',
        role: playerRoles[3].role,
        score: 0
    },
]