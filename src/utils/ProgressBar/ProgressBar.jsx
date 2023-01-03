import css from "./ProgressBar.module.css";

const ProgressBar = (prop) => {
  return (
    <div className={css.outerPBar}>
      <div className={css.innerPBar}></div>
    </div>
  );
};

export default ProgressBar;
