import { useState, useRef } from "react";

import css from "./VideoPlayer.module.css";

import playIcon from "/icons/videoPlayer/play.png";
import pauseIcon from "/icons/videoPlayer/pause.png";
import captionIcon from "/icons/videoPlayer/caption.png";
import expandIcon from "/icons/videoPlayer/expand.png";
import forwardIcon from "/icons/videoPlayer/forward.png";
import backwardIcon from "/icons/videoPlayer/backward.png";
import muteIcon from "/icons/videoPlayer/mute.png";
import volumeIcon from "/icons/videoPlayer/volume.png";
import stretchIcon from "/icons/videoPlayer/stretch.png";
import settingsIcon from "/icons/videoPlayer/settings.png";
import notesIcon from "/icons/videoPlayer/notes.png";

import video from "/videos/coding.mp4";
import video2 from "/videos/sample2.mp4";
import { useEffect } from "react";

const VideoPlayer = (props) => {
  const [videoState, setVideostate] = useState(false);
  const [volumeState, setVolumeState] = useState(true);
  const [currVolume, setCurrVolume] = useState(0.3);
  const [captionsMenuBar, setCaptionsMenuBar] = useState(false);
  const [captionLang, setCaptionLang] = useState("off");

  const videoPlayer = useRef();

  useEffect(() => {
    window.addEventListener("play", () => {
      setVideostate(false);
    });
    window.addEventListener("pause", () => {
      setVideostate(true);
    });
    window.addEventListener("click", (e) => {
      if (e.target.dataset.div !== "caption") {
        setCaptionsMenuBar(false);
      }
    });
  }, []);

  useEffect(() => {
    videoPlayer.current.volume = currVolume;
  }, [currVolume]);

  const playBtnHandler = () => {
    setVideostate(true);
    videoPlayer?.current.play();
  };
  const pauseBtnHandler = () => {
    setVideostate(false);
    videoPlayer?.current.pause();
  };

  const videoPlayerHandler = () => {
    // setVideostate((p) => !p);
    // videoPlayer?.current.paused
    //   ? videoPlayer?.current.play()
    //   : videoPlayer?.current.pause();
  };

  const reversePlaybackHandler = () => {
    videoPlayer.current.currentTime -= 10;
  };

  const forwardPlaybackHanlder = () => {
    videoPlayer.current.currentTime += 10;
  };

  const notesHandler = () => {};

  const volumeHandler = () => {
    setVolumeState((p) => {
      if (!p) {
        setCurrVolume(0);
      }
      return !p;
    });
    videoPlayer.current.muted
      ? (videoPlayer.current.muted = false)
      : (videoPlayer.current.muted = true);
  };

  const volumeChangeHandler = (e) => {
    const volume = e.target.value || 0;
    setCurrVolume(volume);
    if (volume <= 0) {
      setVolumeState(false);
    } else {
      setVolumeState(true);
    }
  };

  const captionsLangOptions = [
    {
      key: "Off",
      value: "off",
    },
    {
      key: "Telugu[Auto]",
      value: "telugu",
    },
    {
      key: "Sanskrit[Auto]",
      value: "sanskrit",
    },
    {
      key: "Hindi[Auto]",
      value: "hindi",
    },
    {
      key: "Tamil[Auto]",
      value: "tamil",
    },
    {
      key: "English[Auto]",
      value: "english",
    },
    {
      key: "French[Auto]",
      value: "french",
    },
  ];

  return (
    <div className={[css.videoContainer].join(" ")}>
      <div className={css.videoControlsContainer} onClick={() => {}}>
        <div className={css.timelineContainer}></div>
        <div className={css.controls}>
          <div className={css.leftControls}>
            <button className={[css.playPauseBtn, css.btn].join(" ")}>
              {!videoState ? (
                <img
                  className={[css.playIcon, css.icon].join(" ")}
                  src={playIcon}
                  alt="play icon"
                  onClick={playBtnHandler}
                />
              ) : (
                <img
                  className={[css.pauseIcon, css.icon].join(" ")}
                  src={pauseIcon}
                  alt="pause icon"
                  onClick={pauseBtnHandler}
                />
              )}
            </button>
            <button className={[css.btn].join(" ")}>
              <img
                className={[css.backwardIcon, css.icon].join(" ")}
                src={backwardIcon}
                alt="backward icon"
                onClick={reversePlaybackHandler}
              />
              <img
                className={[css.forwardIcon, css.icon].join(" ")}
                src={forwardIcon}
                alt="forward icon"
                onClick={forwardPlaybackHanlder}
              />
            </button>
            <button className={[css.btn].join(" ")}>
              <img
                className={[css.notesIcon, css.icon].join(" ")}
                src={notesIcon}
                alt="notes icon"
                onClick={notesHandler}
              />
            </button>
          </div>
          <div className={css.rightControls}>
            <div className={css.voulmeDiv}>
              {!captionsMenuBar ? (
                <div className={css.volumeProgressBar}>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    value={currVolume}
                    step="0.1"
                    className={css.volumeRange}
                    onChange={volumeChangeHandler}
                  />
                  {/* <div className={css.volumeScrollBar}></div> */}
                </div>
              ) : null}
              <button className={[css.voulmeBtn, css.btn].join(" ")}>
                {volumeState ? (
                  <img
                    className={[css.volumeIcon, css.icon].join(" ")}
                    src={volumeIcon}
                    alt="volume icon"
                    onClick={volumeHandler}
                  />
                ) : (
                  <img
                    className={[css.muteIcon, css.icon].join(" ")}
                    src={muteIcon}
                    alt="mute icon"
                    onClick={volumeHandler}
                  />
                )}
              </button>
            </div>
            <div className={css.captionsBox}>
              {captionsMenuBar ? (
                <div className={css.captionsMenu}>
                  {captionsLangOptions?.map((item, id) => {
                    return (
                      <div
                        key={`captionlang-${id}`}
                        className={[
                          css.captionLangItem,
                          item.value === captionLang
                            ? css.activeLangCaption
                            : "",
                        ].join(" ")}
                        id={`captionlang-${id}`}
                        onClick={() => setCaptionLang(item.value)}
                      >
                        {item.key}
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <button
                className={[css.btn].join(" ")}
                onClick={() => setCaptionsMenuBar((p) => !p)}
              >
                <img
                  data-div="caption"
                  className={[css.captionIcon, css.icon].join(" ")}
                  src={captionIcon}
                  alt="caption icon"
                />
              </button>
            </div>
            <button className={[css.btn].join(" ")}>
              <img
                className={[css.settingsIcon, css.icon].join(" ")}
                src={settingsIcon}
                alt="settings icon"
              />
            </button>
            <button className={[css.btn].join(" ")}>
              <img
                className={[css.expandIcon, css.icon].join(" ")}
                src={expandIcon}
                alt="expan icon"
              />
            </button>
            <button className={[css.btn].join(" ")}>
              <img
                className={[css.stretchIcon, css.icon].join(" ")}
                src={stretchIcon}
                alt="stretch icon"
              />
            </button>
          </div>
        </div>
      </div>
      <video
        // controls
        ref={videoPlayer}
        controlsList="nodownload"
        className={css.video}
        onClick={videoPlayerHandler}
        id="video"
      >
        <source src={video2} type="video/webm" />
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
