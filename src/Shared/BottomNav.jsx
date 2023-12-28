import { Link } from "react-router-dom";
import BrandLogo from "../assets/images/brand-logo.png";
import {
  CloudServiceIcon,
  FavoriteIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../assets/icons";

const BottomNav = () => {
  return (
    <div className="mt-[12px]">
      <div className="custom-container flex items-center justify-between">
        {/* Brand Logo */}
        <div>
          <Link to="/">
            <img src={BrandLogo} alt="" />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center w-full max-w-[704px] rounded-[10px] justify-between bg-background">
          <input
            type="text"
            className="text-[14px] p-[12px] w-full outline-none border-none bg-transparent"
            placeholder="Search Product"
          />
          <span>
            <SearchIcon />
          </span>
        </div>

        {/* User Action Button */}
        <div>
          <ul className="flex items-center gap-3">
            <li className="user-action">
              <UserIcon />
            </li>
            <li className="user-action">
              <FavoriteIcon />
            </li>
            <li className="user-action">
              <ShoppingIcon />
            </li>
          </ul>
        </div>

        {/* Service Icon */}
        <div>
          <Link>
            <CloudServiceIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
