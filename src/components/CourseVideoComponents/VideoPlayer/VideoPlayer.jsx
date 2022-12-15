import css from "./VideoPlayer.module.css";

import video from "/videos/coding.mp4";

const VideoPlayer = (props) => {
  return (
    <div className={css.outerDiv}>
      <video controlsList="nodownload" className={css.video}>
        <source src={video} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
