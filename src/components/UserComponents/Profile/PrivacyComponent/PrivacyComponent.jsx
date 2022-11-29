import Button1 from "../../../../utils/Buttons/Button1/Button1";

import css from "./PrivacyComponent.module.css";

const PrivacyComponent = () => {
  const jsonData = [
    {
      id: 1,
      txt: "",
      name: "",
      checked: false,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("values");
  };

  return (
    <div className={css.outerDiv}>
      <form onSubmit={submitHandler}>
        <Button1
          type="submit"
          txt="Save"
          bck="var(--light-gray2)"
          color="var(--white)"
          hovBck="var(--gray)"
          extraCss={{ padding: "0.5rem", fontSize: "1rem" }}
        />
      </form>
    </div>
  );
};

export default PrivacyComponent;
