import { Outlet } from "react-router-dom";
import TopNav from "../Shared/TopNav";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <TopNav />
      </div>

      {/* Body Section - Outlet */}
      <div>
        <Outlet />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
