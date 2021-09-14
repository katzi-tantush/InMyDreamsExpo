import { Component } from "react";
import NewGameInitScreen from "../screens/game-init/NewGameInitScreen";
import CardStackScreen from "../screens/game-session/cards/CardStackScreen";
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
}

export default screenNavigations;