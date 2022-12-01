import InstructorMenuBar from "../../components/LayoutComponents/InstructorMenuBar/InstructorMenuBar";
import InstructorNavbar from "../../components/LayoutComponents/InstructorNavbar/InstructorNavbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";

import css from "./InstructorLayout.module.css";

const InstructorLayout = ({ children }) => {
  return (
    <div className={css.outerDiv}>
      <InstructorNavbar />
      <InstructorMenuBar />
      <div className={css.innerDiv}>{children}</div>
      <Footer />
    </div>
  );
};

export default InstructorLayout;
