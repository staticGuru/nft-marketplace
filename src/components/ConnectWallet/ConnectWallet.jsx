import React from "react";

function ConnectWallet() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>connect wallet via metamask</p>
      <p>or</p>
      <input placeholder="Enter the Opensea account(0xa1243...A3422)" />
    </div>
  );
}

export default ConnectWallet;
