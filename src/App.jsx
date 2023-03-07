import { Fragment, useEffect, useState } from "react";
import NFTCollections from "./components/NFTCollections/NFTCollections";
// import {ethers} from 'ethers';
import Header from "./components/Headers/header";

function App() {
  const [walletAddress,setWalletAddress]=useState(undefined);
  
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
  
    <button onClick={()=>connect()}>connect</button>
  <Header/>
 <NFTCollections walletAccount={walletAddress}/>

    </>
  )
}

export default App;
