import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import GameRoundScreen from "../screens/game-session/GameRoundScreen";
import { HomeScreen } from "../screens/HomeScreen";
import RoundSummaryScreen from "../screens/game-session/RoundSummary"

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
        name: 'game round',
        component: GameRoundScreen
    },
    roundSummaryNav: {
        name: 'round summary',
        component: RoundSummaryScreen
    },
}

export default screenNavigations;