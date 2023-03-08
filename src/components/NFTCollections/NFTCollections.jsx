import NFTCardsList from "./NFTCardsList";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import React from "react";
import {
  parentNFTVariants,
  parentVariants,
  childVariants,
} from "../../animations/hotProducts";
import PlaceHolderLoading from "../loader/PlaceHolderLoading";
import Header from "../Headers/header";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useStateContext } from "../../context";

function NFTCollections() {
  const [nftLists, setNftLists] = React.useState([]);
  const { currentUserAccount } = useStateContext();

  React.useEffect(() => {
    console.log("walletAccount", currentUserAccount);
    let demoaccount = "0x943590A42C27D08e3744202c4Ae5eD55c2dE240D";
    async function fetchData() {
      const items = await fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${currentUserAccount}&offset=0&limit=50`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res=====>", res);
          return res;
        })
        .catch((e) => {
          console.error(e);
          console.error("Could not talk to OpenSea");
          return null;
        });
      setNftLists(items);
    }
    if (currentUserAccount) fetchData();
  }, [currentUserAccount]);

  return (
    <>
      <section className="p-4 pb-24 text-white">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Collection of NFTs */}
            {!currentUserAccount ? (
              <ConnectWallet />
            ) : nftLists.length ? (
              <motion.div
                variants={parentNFTVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {/* Card 1 */}
                <NFTCardsList nftLists={nftLists} />
              </motion.div>
            ) : (
              <PlaceHolderLoading count={4} />
            )}
            <div className="md:flex items-center space-x-2 text-slate-400 font-semibold hidden  ">
              <p>Explore All Items</p>
              <AiOutlineArrowRight size={12} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NFTCollections;
