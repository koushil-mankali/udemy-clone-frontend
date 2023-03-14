import { useState, useRef } from "react";

import css from "./VideoPlayer.module.css";

import playIcon from "/icons/videoPlayer/play.png";
import pauseIcon from "/icons/videoPlayer/pause.png";
import captionIcon from "/icons/videoPlayer/caption.png";
import expandIcon from "/icons/videoPlayer/expand.png";
import contractIcon from "/icons/videoPlayer/opposite-arrows.png";
import forwardIcon from "/icons/videoPlayer/forward.png";
import backwardIcon from "/icons/videoPlayer/backward.png";
import muteIcon from "/icons/videoPlayer/mute.png";
import volumeIcon from "/icons/videoPlayer/volume.png";
import stretchIcon from "/icons/videoPlayer/stretch.png";
import settingsIcon from "/icons/videoPlayer/settings.png";
import notesIcon from "/icons/videoPlayer/notes.png";
import leftArrowIcon from "/icons/videoPlayer/left-arrow.png";
import rightArrowIcon from "/icons/videoPlayer/right-arrow.png";

import video from "../../../../public/videos/Coding.mp4";
// import video from "/videos/sample2.mp4";
import { useEffect } from "react";

const VideoPlayer = (props) => {
  const { playerWidthState, playerWidthSetter, data } = props;
  const { autoplay = false } = data;
  const [videoState, setVideostate] = useState(false);
  const [playbackOptionsBox, setPlaybackOptionsBox] = useState(false);
  const [playbackSpeedOption, setPlaybackSpeedOption] = useState("1.0");
  const [volumeState, setVolumeState] = useState(true);
  const [currVolume, setCurrVolume] = useState(0.3);
  const [captionsMenuBar, setCaptionsMenuBar] = useState(false);
  const [captionLang, setCaptionLang] = useState("off");
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [settingsOption, setSettingsOption] = useState("auto");
  const [stretchPlayer, setStretchPlayer] = useState(false);
  const [autoPlayState, setAutoPlayState] = useState(autoplay);
  const [fullScreen, setFullScreen] = useState(false);
  const [videoDuration, setVideoDuration] = useState({
    current: "0:0:0",
    total: "0:0:0",
  });
  const [arrowsToggle, setArrowsToggle] = useState(false);

  const videoPlayer = useRef();

  // Setting video player timeline settings START
  const videoControlsContainer = document.querySelector(
    "#videoControlsContainer"
  );
  const videoContainer = document.querySelector("#videoContainer");
  const currentTimeLine = document.querySelector("#currentTimeLine");

  window.addEventListener("play", () => {
    setVideostate(false);
  });
  window.addEventListener("pause", () => {
    setVideostate(true);
  });
  window.addEventListener("click", (e) => {
    if (
      e.target.dataset.div !== "caption" &&
      !e.target.id?.split("-")[0].includes("captionlang")
    ) {
      setCaptionsMenuBar(false);
    }
    if (
      e.target.dataset.div !== "settings" &&
      !e.target.id?.split("-")[0].includes("settingsoption") &&
      !e.target.id.includes("autoplay") &&
      !e.target.dataset.switch
    ) {
      setSettingsMenu(false);
    }
    if (
      e.target.dataset.div !== "playback" &&
      !e.target.id?.split("-")[0].includes("playbackoption")
    ) {
      setPlaybackOptionsBox(false);
    }
  });

  // setTimeout(() => {
  //   videoControlsContainer?.classList.add(css["dnone"]);
  // }, [5000]);
  videoContainer?.addEventListener("mouseenter", () => {
    videoControlsContainer?.classList.remove(css["dnone"]);
    setArrowsToggle(true);
  });
  videoContainer?.addEventListener("mouseleave", () => {
    videoControlsContainer?.classList.add(css["dnone"]);
    setArrowsToggle(false);
  });
  videoPlayer.current?.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement === null) {
      setFullScreen(false);
    }
  });
  videoPlayer.current?.addEventListener("timeupdate", () => {
    currentTimeLine.style.width =
      ((videoPlayer.current.currentTime || 0) /
        (videoPlayer.current.duration || 0)) *
        100 +
      "%";
  });
  // Setting video player timeline settings END

  // Setting video player video duration and timeupdate.
  videoPlayer.current?.addEventListener("timeupdate", () => {
    let totalHours = parseInt(
      (videoPlayer.current.duration || 0) / (60 * 60),
      10
    );
    let totalMinutes = parseInt((videoPlayer.current.duration || 0) / 60, 10);
    let totalSeconds = parseInt((videoPlayer.current.duration || 0) % 60);
    let hours = parseInt(videoPlayer.current.currentTime / (60 * 60), 10);
    let minutes = parseInt(videoPlayer.current.currentTime / 60, 10);
    let seconds = parseInt(videoPlayer.current.currentTime % 60);

    setVideoDuration((p) => {
      return {
        current: `${hours}:${minutes}:${seconds}`,
        total: `${totalHours}:${totalMinutes}:${totalSeconds}`,
      };
    });
  });

  useEffect(() => {
    videoPlayer.current.volume = currVolume;
  }, [currVolume]);

  useEffect(() => {
    if (fullScreen) {
      videoPlayer.current.requestFullscreen().catch((err) => {
        console.log("Error full screen");
      });
    }
  }, [fullScreen]);

  const playBtnHandler = () => {
    setVideostate(true);
    videoPlayer?.current.play();
  };
  const pauseBtnHandler = () => {
    setVideostate(false);
    videoPlayer?.current.pause();
  };

  const videoPlayerHandler = () => {
    setVideostate((p) => !p);
    videoPlayer?.current.paused
      ? videoPlayer?.current.play()
      : videoPlayer?.current.pause();
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

  const resolutionOptions = [
    {
      key: "1080p",
      value: "1080",
    },
    {
      key: "720p",
      value: "720",
    },
    {
      key: "576p",
      value: "576",
    },
    {
      key: "432p",
      value: "432",
    },
    {
      key: "360p",
      value: "360",
    },
    {
      key: "Auto",
      value: "auto",
    },
  ];

  const playBackSpeedOptions = [
    {
      key: "3.0x",
      value: "3.0",
    },
    {
      key: "2.5x",
      value: "2.5",
    },
    {
      key: "2.0x",
      value: "2.0",
    },
    {
      key: "1.0x",
      value: "1.0",
    },
    {
      key: "0.5x",
      value: "0.5",
    },
  ];

  const playbackSpeedHandler = () => {
    setPlaybackOptionsBox((p) => !p);
  };

  useEffect(() => {
    videoPlayer.current.playbackRate = playbackSpeedOption || "1.0";
  }, [playbackSpeedOption]);

  const playerArrowClickHandler = (arrow) => {
    console.log("clicked", arrow);
  };

  const strecthBtnHandler = () => {
    setStretchPlayer((p) => !p);
    playerWidthSetter((p) => !p);
  };

  return (
    <div
      className={[css.videoContainer].join(" ")}
      id="videoContainer"
      style={{
        maxWidth: playerWidthState ? "100%" : "1200px",
        maxHeight: playerWidthState ? "100%" : "700px",
      }}
    >
      {arrowsToggle ? (
        <div
          className={css.leftArrow}
          id="leftArrow"
          onClickCapture={() => playerArrowClickHandler("left")}
        >
          <img src={leftArrowIcon} alt="left arrow" className={css.arrowIcon} />
        </div>
      ) : null}
      <div
        className={css.videoControlsContainer}
        onClick={() => {}}
        id="videoControlsContainer"
      >
        <div className={css.timelineContainer}>
          <div className={css.currentLoadedTimeLine}></div>
          <div className={css.currentTimeLine} id="currentTimeLine"></div>
        </div>
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
            <div id="buttonBox" className={css.buttonBox}>
              {playbackOptionsBox ? (
                <div className={css.playbackMenu}>
                  {playBackSpeedOptions?.map((item, id) => {
                    return (
                      <div
                        key={`playbackoption-${id}`}
                        className={[
                          css.playbackOptionItem,
                          item.value === playbackSpeedOption
                            ? css.activePlaybackOption
                            : "",
                        ].join(" ")}
                        id={`playbackoption-${id}`}
                        onClick={() => setPlaybackSpeedOption(item.value)}
                      >
                        {item.key}
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <button
                data-div="playback"
                className={[css.plyBtn].join(" ")}
                onClick={playbackSpeedHandler}
              >
                {playbackSpeedOption}x
              </button>
            </div>
            <div className={css.durationCount}>
              {`${videoDuration.current}/${videoDuration.total}`}
            </div>
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
            <div id="captionsBox" className={css.captionsBox}>
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
            <div id="settingsbox" className={css.settingsBox}>
              {settingsMenu ? (
                <div className={css.captionsMenu}>
                  {resolutionOptions?.map((item, id) => {
                    return (
                      <div
                        key={`settingsoption-${id}`}
                        className={[
                          css.settingOption,
                          item.value === settingsOption
                            ? css.activeLangSetting
                            : "",
                        ].join(" ")}
                        id={`settingsoption-${id}`}
                        onClick={() => setSettingsOption(item.value)}
                      >
                        {item.key}
                      </div>
                    );
                  })}
                  <hr />
                  <div className={css.autoplayOption} id="autoplay">
                    Autoplay
                    <label className={css.switch} data-switch>
                      <input
                        type="checkbox"
                        checked={autoPlayState}
                        data-switch
                        onChange={() => {
                          setAutoPlayState((p) => !p);
                        }}
                      />
                      <span
                        data-switch
                        className={[css.slider, css.round].join(" ")}
                      ></span>
                    </label>
                  </div>
                </div>
              ) : null}
              <button className={[css.btn].join(" ")}>
                <img
                  data-div="settings"
                  className={[css.settingsIcon, css.icon].join(" ")}
                  src={settingsIcon}
                  alt="settings icon"
                  onClick={() => setSettingsMenu((p) => !p)}
                />
              </button>
            </div>
            <button
              className={[css.btn].join(" ")}
              onClick={() => setFullScreen((p) => !p)}
            >
              <img
                className={[
                  fullScreen ? css.expandIconR : "",
                  css.expandIcon,
                  css.icon,
                ].join(" ")}
                src={expandIcon}
                alt="expan icon"
              />
            </button>
            <button className={[css.btn].join(" ")} onClick={strecthBtnHandler}>
              <img
                className={[css.stretchIcon, css.icon].join(" ")}
                src={stretchPlayer ? contractIcon : stretchIcon}
                alt="stretch icon"
              />
            </button>
          </div>
        </div>
      </div>
      <video
        ref={videoPlayer}
        controlsList="nodownload"
        className={css.video}
        onClick={videoPlayerHandler}
        id="video"
      >
        <source src={video} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
      {arrowsToggle ? (
        <div
          className={css.rightArrow}
          id="rightArrow"
          onClickCapture={() => playerArrowClickHandler("right")}
        >
          <img
            src={rightArrowIcon}
            alt="right arrow"
            className={css.arrowIcon}
          />
        </div>
      ) : null}
    </div>
  );
};

export default VideoPlayer;
