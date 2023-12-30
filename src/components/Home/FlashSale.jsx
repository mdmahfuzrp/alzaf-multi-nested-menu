import React from 'react';
import { RightIcon } from '../../assets/icons';
import DoubleSlider from '../../utils/DoubleSlider/DoubleSlider';

const FlashSale = () => {
    return (
        <div className='custom-container'>
            <div className='bg-white flex py-2 px-[6px] rounded-[4px] items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                <h1 className='text-[14px] md:text-[16px] md:font-medium text-special'>Flash Sale</h1>
                <p className='flex items-center gap-[7px]'>
                    
                <span className='text-[9px] md:text-[12px] rounded-[3px] text-white bg-special py-[3px] px-[5px]'>10</span>
                <span className='text-[9px] md:text-[12px] rounded-[3px] text-white bg-special py-[3px] px-[5px]'>10</span>
                <span className='text-[9px] md:text-[12px] rounded-[3px] text-white bg-special py-[3px] px-[5px]'>10</span>
                </p>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-[12px] md:text-[12px] font-medium text-special'>See More</p>
                    <span className=''><RightIcon /></span>
                </div>
            </div>

            <DoubleSlider />
        </div>
    );
};

export default FlashSale;