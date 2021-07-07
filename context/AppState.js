import React, { useContext, useReducer } from "react";
import { CLEAR_RESULT, SET_RESULT } from "./app-action";
import AppContext from "./app-context";
import AppReducer from "./app-reducer";

const AppState = (props) => {
  const initialAppState = {
    formatted: "",
  };

  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  
  // Action Creators
  const setFormatted = (formatted) => {
    dispatch({type: SET_RESULT, payload: formatted})
  }

  const clearFormatted = () => {
    dispatch({type: CLEAR_RESULT })
  }

  return (
    <AppContext.Provider value={{
        formatted: state.formatted,
        setFormatted,
        clearFormatted
    }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
