import { useParams } from "react-router-dom";

import CreateCourseHeader from "../LayoutComponents/CreateCourseHeader/CreateCourseHeader";
import CreateCourseFooter from "../LayoutComponents/CreateCourseFooter/CreateCourseFooter";

import css from "./CreateCourseSteps.module.css";

const CreateCourseSteps = () => {
  const { step = 1 } = useParams();

  return (
    <div className={css.outerDiv}>
      <CreateCourseHeader />
      <CreateCourseFooter />
    </div>
  );
};

export default CreateCourseSteps;
