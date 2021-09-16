import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import CardStackScreen from "../screens/game-session/cards/CardStackScreen";
import GameRoundScreen from "../screens/game-session/GameRoundScreen";
import PlayersRoleScreen from "../screens/game-session/player-role/PlayersRoleScreen";
import { HomeScreen } from "../screens/HomeScreen";

const screenNavigations = {
    homeNav: {
        name: 'home',
        component: HomeScreen
    },
    gameInitNav: {
        name: 'gameInit',
        component: NewGameInitScreen
    },
    cardStackNav: {
        name: 'cardStack',
        component: CardStackScreen
    },
    gameRoundNav: {
        name: 'gameRound',
        component: GameRoundScreen
    },
    playersRoleNav: {
        name: 'playersRole',
        component: PlayersRoleScreen
    }
}

export default screenNavigations;