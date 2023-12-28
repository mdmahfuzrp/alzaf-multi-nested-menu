import React, { useState } from "react";
import Slider from "../../utils/Slider/Slider";
import { menus } from "../../utils/menus";
import { RightIcon } from "../../assets/icons";

const images = [
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
];

const Header = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subSubMenu, setActiveSubSubMenu] = useState(null);

  return (
    <div className="relative mt-[12px]">
      <Slider images={images} />
      <div className="relative custom-container w-full top-0 z-10">
        <ul className="w-full absolute top-[-381px] max-w-[230px] bg-white p-[6px] flex flex-col gap-y-3">
          {/* Menus have external data and here i actually maping all manus */}
          {menus.map((menu, index) => (
            <li
              key={index}
              className="hover:text-special flex items-center gap-2 text-secondary cursor-pointer"
              onMouseEnter={() => setActiveSubMenu(index)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <span className="">{menu.icon}</span>
              <p className="flex items-center justify-between pr-5 w-full capitalize">
                <span>{menu.name}</span>
                {menu.dropdown.length > 0 && <RightIcon />}
              </p>

              {/* Every menu is a object, and every have dropdown property in object, so here i actually checking if dropdown have data then submenu will show and work */}
              {activeSubMenu === index && menu.dropdown.length > 0 && (
                <ul className="w-full absolute top-0 left-[95%] bottom-0 max-w-[230px] bg-white p-[6px] flex flex-col gap-y-3 duration-200">
                  {menu.dropdown.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="hover:text-special flex items-center gap-2 text-secondary cursor-pointer"
                      onMouseEnter={() => setActiveSubSubMenu(subIndex)}
                      onMouseLeave={() => setActiveSubSubMenu(null)}
                    >
                      <span>{submenu.icon}</span>
                      <p className="flex items-center justify-between pr-5 w-full capitalize">
                        {submenu.name}
                        {submenu.dropdown.length > 0 && <RightIcon />}
                      </p>

                      {/* Every submenu have another nested submenu so basically, as same of main submenu. and this time also every submenu is a single object and object have dropdown and here i'm checking dropdown have any data or not. if have then it will show when you hover submenu parents */}
                      {subSubMenu === subIndex &&
                        submenu.dropdown.length > 0 && (
                          <ul className="w-full absolute top-0 bottom-0 sm:max-w-[230px] bg-white p-[6px] flex flex-col gap-y-3 duration-200  left-[95%] ">
                            {submenu.dropdown.map((subsubmenu, subsubIndex) => (
                              <li
                                key={subsubIndex}
                                className="hover:text-special flex items-center gap-2 text-secondary cursor-pointer"
                              >
                                <span>{subsubmenu.icon}</span>
                                <p className="capitalize">{subsubmenu.name}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
