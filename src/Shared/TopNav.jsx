import { Link } from "react-router-dom";
import { SmallDownArrow } from "../assets/icons";

const TopNav = () => {
  return (
    <div className="bg-background py-[5px]">
      <div className="custom-container flex items-center justify-between">
        {/* Left items */}
        <div>
          <ul className="flex items-center gap-[37px]">
            <li className="flex text-primary hover-svg hover:text-special duration-100 items-center gap-[4.17px]">
              <Link>Language</Link>
              <SmallDownArrow />
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link>Help Center</Link>
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link>
                Helpline: <span>0954781656</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right items */}
        <div>
            <ul className="flex items-center gap-[37px]">
                <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
                    <Link>Become a Seller</Link>
                </li>
                <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
                    <Link>Order Track</Link>
                </li>
                <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
                    <Link>Sign up / Login</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
