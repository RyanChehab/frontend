import React from "react";
import { TTSContext } from "./TtsContext";

const TTSControls = ({ text }) => {
const { isSpeaking, isPaused, playTTS, pauseTTS, resumeTTS, stopTTS } = useContext(TTSContext);

    return (
        <div className="tts-controls">
        <button onClick={() => playTTS(text)} disabled={isSpeaking && !isPaused}>
            Play
        </button>
        <button onClick={pauseTTS} disabled={!isSpeaking || isPaused}>
            Pause
        </button>
        <button onClick={resumeTTS} disabled={!isPaused}>
            Resume
        </button>
        <button onClick={stopTTS} disabled={!isSpeaking}>
            Stop
        </button>
        </div>
    );
};

export default TTSControls;