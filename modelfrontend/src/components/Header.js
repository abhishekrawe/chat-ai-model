import { useLocation, useNavigate } from "react-router-dom";
import { MenuOpenIcon, BaseLogoIcon, BellIcon } from "../assets/icons";
import { useEffect, useState } from "react";

export default function Header({ setMobileMenuOpen }) {
  const navigate = useNavigate();
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname.split("/");
    setPageName(pagePath[1] || "Home");
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <header className="w-full grid grid-cols-[1fr_auto]  items-center py-3 px-4 tablet:px-8 gap-4">
      <div className="flex items-center gap-2 tablet:gap-4">
        <div
          className="block tablet:hidden text-black-12"
          onClick={() => setMobileMenuOpen(true)}>
          <MenuOpenIcon width={24} height={24} />
        </div>

        {/* Visible on larger screens */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-black-10 text-2xl font-medium font-figtree leading-8">
            Soul AI
          </span>
        </div>

        {/* Visible on mobile screens */}
        <div className="flex gap-3 items-center w-[150px] md:hidden">
          <div className="w-12 h-12 rounded bg-black-100 overflow-hidden">
            <img src="https://www.soulhq.ai/assets/soul-ui-logo.webp" />
          </div>
          <div className="flex flex-col gap-1 grow items-start">
            <span className="text-blue-30 font-nunito font-semibold text-2xl">
              Soul AI 
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end tablet:gap-6 text-black-30 gap-4 ">
        <BellIcon />
      </div>
    </header>
  );
}
