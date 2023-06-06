import React, { useEffect, useState } from "react";
import { AppContentWrapper, AppLayoutWrapper } from "./style";
import Header from "./header/Index";
import Footer from "./footer/Index";
import Sidebar from "./header/Sidebar";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [isSidebar, setIsSidebar] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = isSidebar ? "hidden" : "auto";
    document.documentElement.scrollTop = 0;
  }, [isSidebar]);

  return (
    <AppLayoutWrapper>
      <Header onMenuOpen={() => setIsSidebar(true)} />
      <Sidebar isshow={isSidebar} onClose={() => setIsSidebar(false)} />
      <AppContentWrapper>{children}</AppContentWrapper>
      <Footer />
    </AppLayoutWrapper>
  );
};
