import { Fragment, useEffect, useState } from "react";
import NFTCollections from "./components/NFTCollections/NFTCollections";
// import {ethers} from 'ethers';
import Header from "./components/Headers/header";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  const [walletAddress,setWalletAddress]=useState(undefined);
  // const activeChainId = ChainId.Goerli;
async function connect(){
//   let signer = null;
//   let provider;
//   if (window.ethereum == null) {
    
//     provider = ethers.getDefaultProvider()
// } else {
//     provider = new ethers.BrowserProvider(window.ethereum)
//     signer = await provider.getSigner();
// }
// setWalletAddress(signer.address??"")
}
useEffect(()=>{
  // connect();
},[])
  return(
    <>
    {/*<ThirdwebProvider network ={activeChainId}>*/}
    <button onClick={()=>connect()}>connect</button>
  <Header/>
 <NFTCollections walletAccount={walletAddress}/>
 {/*</ThirdwebProvider>*/}
    
    </>
  )
}

export default App;
