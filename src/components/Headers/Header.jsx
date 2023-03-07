import React from 'react'
import { motion } from "framer-motion";
import { childVariants, parentVariants } from '../../animations/hotProducts';
// import { ConnectWallet} from '@thirdweb-dev/react';
function Header() {
  return (
     <>
     <div className="container max-w-6xl mx-auto overflow-hidden">
     <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-row justify-between items-start space-y-4 text-white"
            >
              <motion.h1
                variants={childVariants}
                className="text-white text-2xl md:text-3xl font-medium "
              >
                NFT Market place
              </motion.h1>
              <motion.div
                variants={childVariants}
                className="text-white max-w-lg text-center"
              >
              {/*<ConnectWallet />*/}
              </motion.div>
            </motion.div>
            </div>
     </>
  )
}

export default Header