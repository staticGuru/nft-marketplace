import { Fragment, useEffect, useState } from "react";
import NFTCollections from "./components/NFTCollections/NFTCollections";
// import {ethers} from 'ethers';
import Header from "./components/Headers/header";

function App() {
  return (
    <>
      <Header />
      <NFTCollections/>
    </>
  );
}

export default App;
