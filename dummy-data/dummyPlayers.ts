import { Player } from "../models/Player";
import { playerRoles } from "../models/playerRoles";

export const dummyPlayers: Player[] = [
    {
        id: 0,
        name: '0',
        role: playerRoles[0],
        score: 0
    },
    {
        id: 1,
        name: '1',
        role: playerRoles[1],
        score: 0
    },
    {
        id: 2,
        name: '2',
        role: playerRoles[2],
        score: 0
    }
]