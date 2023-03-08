import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context";

function ConnectWalletButton() {
  const [walletAddress, setWalletAddress] = useState("");
  const {changeCurrentUserAccount } = useStateContext();
  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    changeCurrentUserAccount(walletAddress);
  }, [walletAddress]);
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
         alert("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      alert("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
       
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
  return (
    <div className="flex flex-row">
      <div class="mb-3 pt-0">
        <input
          type="text"
          placeholder="Enter the Opensea account(0xa1243...A3422)"
          classkName="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"
        />
      </div>
      <button
        className="button is-white connect-wallet"
        onClick={connectWallet}
      >
        <span className="is-link has-text-weight-bold">
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </span>
      </button>
    </div>
  );
}

export default ConnectWalletButton;
