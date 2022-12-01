import HelpCard from "../../Cards/HelpCard/HelpCard";

import { helpResources } from "../../../fakedata/fakedata";

import css from "./ResourcesComponent.module.css";

const ResourcesComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>Resources</div>
      <div className={css.cards}>
        {helpResources?.map((item) => {
          return <HelpCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ResourcesComponent;
