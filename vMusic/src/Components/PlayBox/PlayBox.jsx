import styles from "./PlayBox.module.css";
import { useState, useEffect } from "react";

import { IoPlay, IoPause, IoStop } from "react-icons/io5";
import { FaForward, FaBackward } from "react-icons/fa";

function PlayBox({ audioTrack }) {
  const [audio] = useState(new Audio(audioTrack));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleEnd = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  const fastForward10 = () => {
    if (audio.currentTime + 10 >= duration) {
      audio.currentTime = duration;
      setIsPlaying(false);
    } else {
      audio.currentTime += 10;
    }
  };

  const fastBackward10 = () => {
    if (audio.currentTime - 10 <= 0) {
      audio.currentTime = 0;
    } else {
      audio.currentTime -= 10;
    }
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name : ${name}; Value: ${value}`);
    if (name === "currentTime") {
      audio.currentTime = value;
      setIsPlaying(true);
    } else if (name === "volume") {
      setVolume(value);
    }
  };

  return (
    <div className={styles.master}>
      <div className={styles.controls}>
        <button
          className={styles.btnUtility}
          onClick={isPlaying ? pause : play}
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>

        <button className={styles.btnUtility} onClick={fastForward10}>
          <FaForward />
        </button>
        <button className={styles.btnUtility} onClick={fastBackward10}>
          <FaBackward />
        </button>
        <button className={styles.btnUtility} onClick={stop}>
          <IoStop />
        </button>
      </div>
      <label htmlFor="currentTime" className={styles.controlRangesLabel}>
        Time
      </label>
      <input
        className={styles.controlRanges}
        type="range"
        value={currentTime}
        name="currentTime"
        min="0"
        max={duration}
        onChange={handleChange}
      />
      <label htmlFor="volume" className={styles.controlRangesLabel}>
        Volume
      </label>
      <input
        className={styles.controlRanges}
        type="range"
        value={volume}
        name="volume"
        min="0"
        step="0.01"
        max="1"
        onInput={handleChange}
      />
    </div>
  );
}

export default PlayBox;
