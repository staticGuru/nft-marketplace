import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context";

function ConnectWalletButton() {
  const [walletAddress, setWalletAddress] = useState("");
  const {changeCurrentUserAccount,currentUserAccount} = useStateContext();
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
    <div>
      <button
        className="button is-white connect-wallet"
        onClick={connectWallet}
      >
        <span className="is-link has-text-weight-bold">
          {currentUserAccount && currentUserAccount.length > 0
            ? `Connected: ${currentUserAccount.substring(
                0,
                6
              )}...${currentUserAccount.substring(38)}`
            : "Connect Wallet"}
        </span>
      </button>
    </div>
  );
}

export default ConnectWalletButton;
