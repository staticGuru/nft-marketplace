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
function NFTCollections({walletAccount}) {
  const [nftLists, setNftLists] = React.useState([]);
  React.useEffect(() => {
     console.log("walletAccount",walletAccount)
     let demoaccount="0x943590A42C27D08e3744202c4Ae5eD55c2dE240D"
    async function fetchData() {
      const items = await fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${walletAccount}&offset=0&limit=50`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res=====>",res)
          return res;
        })
        .catch((e) => {
          console.error(e);
          console.error("Could not talk to OpenSea");
          return null;
        });
      setNftLists(items);
    }
    if(walletAccount) fetchData();
  }, [walletAccount]);
  return (
    <>
      <section className="p-4 pb-24 text-white">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Content */}
            <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 "
            >
              <motion.h1
                variants={childVariants}
                className="text-2xl md:text-3xl font-medium"
              >
                NFT Market place
              </motion.h1>
              <motion.p
                variants={childVariants}
                className="text-slate-400 max-w-lg text-center"
              >
                We are a huge marketplace dedicated to connecting great artists
                of all Techwind with their fans and unique token collectors!
              </motion.p>
            </motion.div>
            {/* Collection of NFTs */}
            {nftLists.length ? (
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
