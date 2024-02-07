import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import ChatSection from "./ChatSection";

export default function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main Content */}
        <main className="flex-1 p-4 tablet:p-8 overflow-y-auto">
          <div className="mx-auto">
            <ChatSection/>
          </div>
        </main>
      </div>
    </div>
  );
}
