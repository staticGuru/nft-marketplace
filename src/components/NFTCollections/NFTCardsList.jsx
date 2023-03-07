import React from 'react'
import NFTCard from './NFTCard'
import nfts from '../../data/nfts'
import { motion } from 'framer-motion'
function NFTCardsList({nftLists}) {
  const parentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  }
  const childVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      // transition: { delay: 0.1 },
    },
  }

  return (
    <>
      {nftLists.map((nft, idx) => {
        return (
            <NFTCard
              key={idx}
              img={nft.image_url}
              title={nft.name}
              price={nft.opensea_seller_fee_basis_points}
              likes={nft.owned_asset_count}
              sale={nft.owned_asset_count}
              description={nft.description}
            />
        )
      })}
    </>
  )
}

export default NFTCardsList
