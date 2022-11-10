import { createPortal } from "react-dom";

import Navbar from "../../components/LayoutComponents/Navbar1/Navbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";
import LoginModal from "../../components/Auth/LoginModal/LoginModal";

const Layout1 = ({ modal = false, setModal = () => {}, children }) => {
  return (
    <>
      {modal
        ? createPortal(
            <LoginModal setModal={setModal} />,
            document.getElementById("modal")
          )
        : ""}
      <Navbar />
      {children}
      <Footer />;
    </>
  );
};

export default Layout1;
