import React, { useState } from "react";
import { useStateContext } from "../../context";

function ConnectWallet() {
  const [openSeaAccount, setOpenSeaAccount] = useState("");
  const { changeCurrentUserAccount } = useStateContext();
  const handleAccountChange = (e) => {
    setOpenSeaAccount(e.target.value);
  };
  const connectAccountChange = () => {
    changeCurrentUserAccount(openSeaAccount);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p>paste your Opensea wallet address here!!!</p>
      <input
        placeholder="Enter the Opensea account(0xa1243...A3422)"
        value={openSeaAccount}
        onChange={handleAccountChange}
      />
      <div onClick={connectAccountChange}>
        <p>Connect</p>
      </div>
    </div>
  );
}

export default ConnectWallet;
