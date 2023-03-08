import React, { useState } from "react";
import { useStateContext } from "../../context";

function ConnectWallet() {
  const [openSeaAccount, setOpenSeaAccount] = useState("");
  const { changeCurrentUserAccount, invalidUserAccount } = useStateContext();
  const handleAccountChange = (e) => {
    setOpenSeaAccount(e.target.value?.trim());
  };
  const connectAccountChange = () => {
    if (openSeaAccount) changeCurrentUserAccount(openSeaAccount);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {invalidUserAccount && (
        <div className="flex flex-col items-center justify-center text-xl text-white mb-2">
          <h4 className="text-yellow-300">
            No collections found in the wallet Account
          </h4>
          <h2>{invalidUserAccount}</h2>
          or
        </div>
      )}
      <div className="flex flex-col items-center justify-center text-xl text-white mb-2">
        <h3 className="text-2xl mb-5">
          paste your Opensea wallet address here!!!
        </h3>
        <input
          placeholder="Enter the Opensea account(0xa1243...A3422)..."
          value={openSeaAccount}
          onChange={handleAccountChange}
          className="w-full p-2 rounded-lg outline-none bg-slate-600 text-white"
        />
        <div
          className="text-2xl mt-5 pl-5 pr-5 pt-2 pb-2 bg-blue-900 rounded-lg cursor-pointer disabled"
          onClick={connectAccountChange}
        >
          <p>Connect</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
