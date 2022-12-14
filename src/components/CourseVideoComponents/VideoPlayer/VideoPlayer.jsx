import css from "./VideoPlayer.module.css";

import video from "/videos/flower.webm";

const VideoPlayer = () => {
  return (
    <div className={css.outerDiv}>
      <video controls controlsList="nodownload" className={css.video}>
        <source src={video} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
