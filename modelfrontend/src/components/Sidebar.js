import Navbar from "./Navbar";
import { BaseLogoIcon, MenuCloseIcon } from "../assets/icons";

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <div className="row-span-full bg-white-10 hidden tablet:flex flex-col items-center py-4 px-[10px] gap-4 text-black-100 h-100">
        <div className="flex flex-col gap-6 items-center w-full grow">
          <div className="flex gap-3 items-center w-[192px]">
            <div className="w-12 h-12 rounded bg-black-100 overflow-hidden">
              <img src="https://www.soulhq.ai/assets/soul-ui-logo.webp" />
            </div>
            <div className="flex flex-col gap-1 grow items-start">
              <span className="text-blue-30 font-nunito font-semibold text-2xl">
                Soul AI
              </span>
            </div>
          </div>
          <Navbar />
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="tablet:hidden fixed h-full w-screen bg-black-30/20 backdrop-blur-sm supports-[backdrop-filter]:bg-black-30/20 z-40 inset-0 overflow-hidden transition-all">
          <div className="h-full w-[224px] shadow-sm bg-white-10 flex flex-col items-center py-4 px-[10px] gap-4 text-black-100 overflow-y-auto rounded-r-3xl">
            <div className="flex flex-col gap-6 items-center w-full grow">
              <div className="flex gap-3 items-center w-[192px]">
                <div className="w-12 h-12 rounded bg-black-100 overflow-hidden">
                  <img src="https://www.soulhq.ai/assets/soul-ui-logo.webp" />
                </div>
                <div className="flex flex-col gap-1 grow items-start">
                  <span className="text-blue-30 font-nunito font-semibold text-xl leading-normal">
                    Soul AI
                  </span>
                </div>
              </div>
              <Navbar setMobileMenuOpen={setMobileMenuOpen} />
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-[10px] left-[160px] bg-black-100 text-black-12 rounded-full p-2 z-50">
                <MenuCloseIcon width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
