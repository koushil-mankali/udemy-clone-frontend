import HelpCard from "../../Cards/HelpCard/HelpCard";

import { toolsResources } from "../../../fakedata/fakedata";

import css from "./ToolsComponent.module.css";

const ToolsComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>Tools</div>
      <div className={css.cards}>
        {toolsResources?.map((item) => {
          return <HelpCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ToolsComponent;
