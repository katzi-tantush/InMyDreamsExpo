import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import GameRoundScreen from "../screens/game-session/GameRoundScreen";
import PlayersRoleScreen from "../screens/game-session/player-role/PlayersRoleScreen";
import { HomeScreen } from "../screens/HomeScreen";

const screenNavigations = {
    homeNav: {
        name: 'home',
        component: HomeScreen
    },
    gameInitNav: {
        name: 'game init',
        component: NewGameInitScreen
    },
    gameRoundNav: {
        name: 'game round screen',
        component: GameRoundScreen
    },
    playerRolesNav: {
        name: 'player roles',
        component: PlayersRoleScreen
    }
}

export default screenNavigations;