import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import CreateCourseHeader from "../LayoutComponents/CreateCourseHeader/CreateCourseHeader";
import CreateCourseFooter from "../LayoutComponents/CreateCourseFooter/CreateCourseFooter";

import css from "./CreateCourseSteps.module.css";

const CreateCourseSteps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { step = 1 } = useParams();
  const totalSteps = 4;

  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);

  const changeStepHandler = (step) => {
    setCurrentStep(step);
    const path = location.pathname.slice(0, -1);
    navigate(path + step);
  };

  const moveToCreatePage = () => {
    navigate("/instructor/create-course");
  };

  return (
    <div className={css.outerDiv}>
      <CreateCourseHeader currentStep={currentStep} totalSteps={totalSteps} />
      <CreateCourseFooter
        currentStep={currentStep}
        totalSteps={totalSteps}
        setCurrentStep={changeStepHandler}
        moveToCreatePage={moveToCreatePage}
      />
    </div>
  );
};

export default CreateCourseSteps;
