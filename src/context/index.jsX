import React, { useContext, createContext, useState } from "react";
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [currentUserAccount,setCurrentUserAccount] = useState(null)
  // let currentUserAccount = null;
  const changeCurrentUserAccount = (data) => {
    console.log("contextData",data)
    setCurrentUserAccount(data);
    // return currentUserAccount;
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
