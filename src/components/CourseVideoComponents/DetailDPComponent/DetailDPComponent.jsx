import Button1 from "../../../utils/Buttons/Button1/Button1";

import css from "./DetailDPComponent.module.css";

const DetailDPComponent = (props) => {
  const { title = "", desc = "", btnTxt = "" } = props;
  return (
    <details className={css.details}>
      <summary className={css.summary}>{title}</summary>
      <p>{desc}</p>
      {btnTxt ? <Button1 txt={btnTxt} /> : null}
    </details>
  );
};

export default DetailDPComponent;
