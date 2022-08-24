import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Content, WrapperLayout } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </WrapperLayout>
  );
};

export default Layout;
