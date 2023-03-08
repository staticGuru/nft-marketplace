import React, { useContext, createContext } from "react";
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  let currentUserAccount = null;
  const changeCurrentUserAccount = (data) => {
    console.log("contextData",data)
    currentUserAccount = data;
    return currentUserAccount;
  };
  return (
    <StateContext.Provider
      value={{ currentUserAccount, changeCurrentUserAccount }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
