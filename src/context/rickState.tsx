import React, { Dispatch, createContext, useReducer } from "react";
import { RickStateInterface, RickActions } from "./interface";
import RickReducer from "./rickReducer";

const initialState: RickStateInterface = {
  episodes: [],
  favourites: [],
};

interface IContext {
  state: RickStateInterface;
  dispatch: Dispatch<RickActions>;
}

export const RickContext = createContext({} as IContext);

const RickState = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(RickReducer, initialState);

  return <RickContext.Provider value={{ state, dispatch }}>{children}</RickContext.Provider>;
};

export default RickState;
