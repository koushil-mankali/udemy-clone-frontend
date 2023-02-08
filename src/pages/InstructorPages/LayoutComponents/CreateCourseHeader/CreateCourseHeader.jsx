import { Link } from "react-router-dom";

import logoImg from "/images/logo-udemy-inverted.svg";

import css from "./CreateCourseHeader.module.css";

const CreateCourseHeader = (props) => {
  const { totalSteps = 0, currentStep = 0 } = props;
  return (
    <>
      <div className={css.header}>
        <div className={css.left}>
          <img src={logoImg} alt="logo" className={css.logoImg} />
          <div className={css.vDivider}></div>
          <div className={css.steps}>
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        <div className={css.right}>
          <Link to="#" className={css.exit}>
            Exit
          </Link>
        </div>
      </div>
      <div className={css.progressLine}>
        <div
          className={css.innerProgressBar}
          style={{ width: (currentStep / totalSteps) * 100 + "%" }}
        ></div>
      </div>
    </>
  );
};

export default CreateCourseHeader;
