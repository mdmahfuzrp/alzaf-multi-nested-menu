import React from 'react';
import { BeautyIcon, FashionIcon, FreeDelivery, HomeIcon, HomeMakeOverIcon } from '../../assets/icons';

const WhatWeOffer = () => {
    return (
        <div className='bg-[#EDEDED] '>
            <ul className='flex items-center px-[6px] py-[6px] gap-[19px] justify-center'>
                <li className='bg-white w-fit p-[10px] rounded-full shadow-sm duration-100 cursor-pointer hover:bg-special'><HomeIcon /></li>
                <li className='bg-white w-fit p-[10px] rounded-full shadow-sm duration-100 cursor-pointer hover:bg-special'><FashionIcon /></li>
                <li className='bg-white w-fit p-[10px] rounded-full shadow-sm duration-100 cursor-pointer hover:bg-special'><BeautyIcon /></li>
                <li className='bg-white w-fit p-[10px] rounded-full shadow-sm duration-100 cursor-pointer hover:bg-special'><HomeMakeOverIcon /></li>
                <li className='bg-white w-fit p-[10px] rounded-full shadow-sm duration-100 cursor-pointer hover:bg-special'><FreeDelivery /></li>
            </ul>
        </div>
    );
};

export default WhatWeOffer;