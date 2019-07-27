import React, { useReducer } from "react";

export const TodosContext = React.createContext({});

export const TodosProvider = ({ reducer, initialState, children }) => {
  return (
    <TodosContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TodosContext.Provider>
  );
};
