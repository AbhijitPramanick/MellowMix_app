import React from "react";
import PlayBox from "./Components/PlayBox/PlayBox";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import sound1 from "/sounds/sound1.mp3";
import sound2 from "/sounds/sound2_keys-of-moon-white-petals.mp3";
import sound3 from "/sounds/sound3_twilight_piano.mp3";
import sound4 from "/sounds/sound4_Valetines-Day.mp3";
import sound5 from "/sounds/sound5_sagar_kinaray.mp3";
import sound6 from "/sounds/sound6_largestreamoverloginforestmarch.mp3";
const App = () => {
  return (
    <div className="masterAppContainer">
      <Navbar />
      <div className="playBoxContainer">
        <PlayBox audioTrack={sound1} />
        <PlayBox audioTrack={sound2} />
        <PlayBox audioTrack={sound3} />
        <PlayBox audioTrack={sound4} />
        <PlayBox audioTrack={sound5} />
        <PlayBox audioTrack={sound6} />
      </div>
    </div>
  );
};

export default App;
