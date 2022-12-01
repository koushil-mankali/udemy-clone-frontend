import InstructorMenuBar from "../../components/LayoutComponents/InstructorMenuBar/InstructorMenuBar";
import InstructorNavbar from "../../components/LayoutComponents/InstructorNavbar/InstructorNavbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";

import css from "./InstructorLayout.module.css";

const InstructorLayout = ({ children }) => {
  return (
    <div className={css.outerDiv}>
      <InstructorMenuBar />
      <InstructorNavbar />
      <div className={css.innerDiv}>
        <div className={css.dummy}>d</div>
        <div className={css.outletBdy}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorLayout;
