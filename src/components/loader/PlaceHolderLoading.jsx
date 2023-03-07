import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { parentNFTVariants } from "../../animations/hotProducts";
function PlaceHolderLoading({ count }) {
  function InlineWrapperWithMargin({ children }) {
    return <span style={{     marginRight: '.8rem',
    marginLeft: '.5rem', }}>{children}</span>;
  }
  return (
     <div className="flex flex-col w-full">

     <motion.div
     variants={parentNFTVariants}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
   >
      <Skeleton
        count={count}
        wrapper={InlineWrapperWithMargin}
        inline
        width="23%"
        height="50vh"
        baseColor="#15202b"
        highlightColor="#6555cc"
        borderRadius="0.5rem"
      />
  </motion.div>
    </div>
  );
}

export default PlaceHolderLoading;
