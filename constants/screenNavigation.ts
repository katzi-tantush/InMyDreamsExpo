import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import GameRoundScreen from "../screens/game-session/round/GameRoundScreen";
import { HomeScreen } from "../screens/HomeScreen";
import RoundSummaryScreen from "../screens/game-session/round/RoundSummaryScreen"
import CardStackMenuScreen from "../screens/card-stack-menu/CardStackMenuScreen";
import CardStackEditDetailsScreen from "../screens/card-stack-menu/CardStackEditDetailsScreen";
import PlayersInitScreen from "../screens/game-init/player-init/PlayersInitScreen";
import SessionCardStackSelectScreen from "../screens/game-init/SessionCardStackSelectScreen";

const screenNavigations = {
    homeNav: {
        name: 'home',
        component: HomeScreen
    },
    // gameInitNav: {
    //     name: 'game init',
    //     component: NewGameInitScreen
    // },
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
    cardStackEditDetailsNav: {
        name: 'card stack edit details',
        component: CardStackEditDetailsScreen
    },
    playersInitNav: {
        name: 'players Init',
        component: PlayersInitScreen
    },
    sessionCardStackSelectNav: {
        name: 'card stack selection',
        component: SessionCardStackSelectScreen
    }
}

export default screenNavigations;