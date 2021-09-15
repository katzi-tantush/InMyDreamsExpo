import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import CardStackScreen from "../screens/game-session/cards/CardStackScreen";
import GameRoundScreen from "../screens/game-session/GameRoundScreen";
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
}

export default screenNavigations;