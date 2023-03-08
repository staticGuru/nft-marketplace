import React from "react";
import { motion } from "framer-motion";
import { childVariants, parentVariants } from "../../animations/hotProducts";
import ConnectWalletButton from "../ConnectWallet/ConnectWalletButton";
// import { ConnectWallet} from '@thirdweb-dev/react';
function Header() {
  return (
    <>
      <div className="container max-w-6xl mx-auto overflow-hidden mt-8">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center space-y-4 text-white"
        >
          <motion.h1
            variants={childVariants}
            className="text-white text-2xl md:text-3xl font-medium "
          >
            NFT Market place
          </motion.h1>
          {/*<motion.div
            variants={childVariants}
            className="text-white max-w-lg text-center"
          >
            <ConnectWalletButton />
          </motion.div>*/}
        </motion.div>
      </div>
    </>
  );
}

export default Header;
