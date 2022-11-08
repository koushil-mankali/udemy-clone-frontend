import React from "react";

import css from "./FeaturedReviewComp.module.css";

import TimeSinceFunc from "../../helpers/TimeSinceFunc.js";

const FeaturedReviewComp = (props) => {
  const {
    img = "",
    name = "",
    courses = 0,
    reviews = 0,
    rated = 0,
    date = "",
    cmmt = "",
  } = props.data;
  return <div>FeaturedReviewComp</div>;
};

export default FeaturedReviewComp;
