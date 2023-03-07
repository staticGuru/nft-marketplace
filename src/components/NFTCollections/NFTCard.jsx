import React, { useState } from 'react'
import { AiOutlineClockCircle, AiFillHeart } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import Modal from '../Modal/Modal'
import { NFTDetail } from '../NFTDetails/NFTDetail';
import Tilt from 'react-parallax-tilt';

function NFTCard(props) {
  const { img, title, price, likes }=props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Tilt>
      <div onClick={() => setIsOpen(true)} className='flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative'>
        {/* Image & Counter */}
        <div className='flex flex-col items-start relative'>
          <img src={img} alt='NFT' className='object-cover' />
        </div>
        {/* Content */}
        <div className='px-6 flex flex-col space-y-3'>
          {/* Title */}
          <h1>{title}</h1>
          {/* Price & Like */}
          <div className='flex justify-between'>
            {/* Price */}
            <div className='flex space-x-2 text-indigo-600 items-center'>
              <FaEthereum size={18} />
              <p className='text-sm font-semibold'>{price} ETH</p>
            </div>
            {/* Like */}
            <div className='flex space-x-2 items-center'>
              <AiFillHeart className='text-rose-600' />
              <p className='text-sm text-slate-400 '>{likes}</p>
            </div>
          </div>
        </div>
        {/* Hover */}
       {/* <div className='absolute hidden top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000'>
          <button className='text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out'>
            Place bid
          </button>
  </div>*/}
      </div>
      </Tilt>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
      <NFTDetail {...props} handleClose={() => setIsOpen(false)}/>
    </Modal>
    </>
   
  )
}

export default NFTCard
