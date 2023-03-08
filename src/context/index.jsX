import React, { useContext, createContext, useState } from "react";
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [currentUserAccount,setCurrentUserAccount] = useState(null);
  const [invalidUserAccount,setInvalidUserAccount] = useState(null);
  const changeCurrentUserAccount = (data) => {
    setCurrentUserAccount(data);
  };
  const changeInvalidAccount=(data)=>{
    setInvalidUserAccount(data);
  }
  return (
    <StateContext.Provider
      value={{ currentUserAccount,invalidUserAccount, changeCurrentUserAccount,changeInvalidAccount }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
