"use client";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import computerImg from "../../assets/images/computer.png";

// custom css
import "./DoubleSlider.css";
import { VoucherIcon } from "../../assets/icons";

const DoubleSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    console.log("Previous Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    console.log("Next Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full relative">
      <Slider className="relative mx-auto " ref={sliderRef} {...settings}>
        <div className=" flex flex-col gap-10 mt-[1px] ">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 grid-rows-2 gap-[2px]">
              <div className="bg-white rounded-[4px] row-span-full col-span-1 w-full slideOverlay px-[6px] flex flex-col gap-2 md:items-center">
                <div className="">
                  <img src={computerImg} alt="" className="" />
                  <span className="mt-[5px]">
                    <VoucherIcon />
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-primary text-[10px]">
                    Airpods Pro Made In Dubai Bluetooth Earbuds -
                  </p>
                  <h3 className="text-[12px] font-semibold text-special mt-[8px]">
                    ৳ 1,9900
                    <del className="ml-[6px] text-[8px] text-[#5A5A5A]">৳ 3000</del>
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay flex flex-col xl:flex-row gap-2">
                <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
                
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-10 mt-[1px]">
          <div className="flex flex-col gap-5 mb-[1px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-[2px]">
              <div className="bg-white rounded-[4px] row-span-full col-span-1 w-full slideOverlay px-[6px] flex flex-col xl:flex-row gap-2">
                <div className="">
                  <img src={computerImg} alt="" className="" />
                  <span className="mt-[5px]">
                    <VoucherIcon />
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-primary text-[10px]">
                    Airpods Pro Made In Dubai Bluetooth Earbuds -
                  </p>
                  <h3 className="text-[12px] font-semibold text-special mt-[8px]">
                    ৳ 1,9900
                    <del className="ml-[6px] text-[8px] text-[#5A5A5A]">৳ 3000</del>
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay flex flex-col xl:flex-row gap-2">
                <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
                
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
              <div className="bg-white rounded-[4px] col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative flex flex-col items-center justify-center px-[14px] pb-[14px] mx-auto">
                  <img
                    src="https://i.ibb.co/y07F9J8/jerseys.png"
                    alt=""
                    className=""
                  />
                  <h1 className="text-primary">Jersey</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="absolute left-0 top-[38%] md:top-[38.5%]  w-full h-[55px] flex justify-between items-center">
        <div className="flex w-full justify-between items-center">
          <span
            onClick={handlePrev}
            className="bg-white  w-[45px] h-[45px] rounded-full shadow-md border border-slate-100 hover:border-special flex justify-center items-center hover:bg-special group duration-300 cursor-pointer z-[10]"
          >
            <IoIosArrowBack className="text-gray-400 text-[18px] group-hover:text-white" />
          </span>

          <span
            onClick={handleNext}
            className="bg-white w-[45px] h-[45px] rounded-full shadow-md border border-slate-100 hover:border-special flex justify-center items-center hover:bg-special group duration-300 cursor-pointer z-[10]"
          >
            <MdOutlineArrowForwardIos className="text-gray-400 text-[18px] group-hover:text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoubleSlider;
