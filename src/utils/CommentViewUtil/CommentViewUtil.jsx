import css from "./CommentViewUtil.module.css";

const CommentViewUtil = (props) => {
  const {
    id = "00",
    img = "",
    name = "",
    rating = "",
    date = new Date(),
    comment = "",
    like = false,
  } = props.data;
  return <div>CommentViewUtil</div>;
};

export default CommentViewUtil;
