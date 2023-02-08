import Button1 from "../../../../utils/Buttons/Button1/Button1";

import css from "./CreateCourseFooter.module.css";

const CreateCourseFooter = (props) => {
  const {
    disablePrv = false,
    disableNxt = true,
    currentStep = 0,
    totalSteps = 0,
    setCurrentStep = () => {},
    moveToCreatePage = () => {},
  } = props;
  return (
    <div className={css.footer}>
      <div className={css.left}>
        {currentStep <= 1 ? null : (
          <Button1
            disableBtn={disablePrv}
            onClick={() => setCurrentStep(currentStep - 1)}
            txt="Previous"
            extraCss={{ fontSize: "1.1rem", padding: "0.8rem 1rem" }}
          />
        )}
      </div>
      <div className={css.right}>
        <Button1
          disableBtn={disableNxt}
          onClick={() =>
            currentStep === totalSteps
              ? moveToCreatePage()
              : setCurrentStep(currentStep + 1)
          }
          txt={currentStep === totalSteps ? "Create Course" : " Continue"}
          bck="var(--gray)"
          hovBck="var(--gray)"
          color="var(--white)"
          extraCss={{ fontSize: "1.1rem", padding: "0.8rem 1rem" }}
        />
      </div>
    </div>
  );
};

export default CreateCourseFooter;
