import React from 'react';
import { RightIcon } from '../../assets/icons';
import CategoriesSlider from '../../utils/DoubleSlider/CategoriesSlider';

const Categories = () => {
    return (
        <div className='custom-container '>
            <div className='bg-white mt-[8px] flex py-2 px-[6px] rounded-[4px] items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                <h1 className='text-[14px] md:text-[16px] md:font-medium text-[#5A5A5A]'>Categories</h1>
                
                </div>
            </div>

            <CategoriesSlider />
        </div>
    );
};

export default Categories;