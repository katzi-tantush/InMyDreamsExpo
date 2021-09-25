import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import GameRoundScreen from "../screens/game-session/round/GameRoundScreen";
import { HomeScreen } from "../screens/HomeScreen";
import RoundSummaryScreen from "../screens/game-session/round/RoundSummaryScreen"
import CardStackMenuScreen from "../screens/card-stack-menu/CardStackMenuScreen";
import CardStackDetailsScreen from "../screens/card-stack-menu/CardStackDetailsScreen";

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
    cardStackMenuNav: {
        name: 'card Stack menu',
        component: CardStackMenuScreen
    },
    cardStackDetailsNav: {
        name: 'card stack details',
        component: CardStackDetailsScreen
    }
}

export default screenNavigations;