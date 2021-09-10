// import React, { createContext, FC, useContext } from "react";
import * as React from "react";
import { rootStore } from "../stores/domain-stores/PlayerStore";

const StoreContext = React.createContext(rootStore);

// FIXME: provide meaningfull types 
interface ProviderProps{
    children: any
    store: any
}

export const StoreProvider:React.FC<ProviderProps> = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => React.useContext(StoreContext);