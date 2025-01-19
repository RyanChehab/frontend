import React, {useContext} from "react";
import { TTSContext } from "./TtsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop, faRedo } from "@fortawesome/free-solid-svg-icons";
import './TTS.css';

const TTSControls = ({ text }) => {
const { isSpeaking, isPaused, playTTS, pauseTTS, resumeTTS, stopTTS } = useContext(TTSContext);

    return (
        <div className="tts-controls">
            
            {/* play btn  */}
        <button className="tts-button" onClick={() => playTTS(text)} disabled={isSpeaking && !isPaused}>
        <FontAwesomeIcon icon={faPlay} />
        <span className="tooltip">Play</span>
        </button>

            {/* Pause btn */}
        <button className="tts-button" onClick={pauseTTS} disabled={!isSpeaking || isPaused}>
                <FontAwesomeIcon icon={faPause} />
                <span className="tooltip">Pause</span>
        </button>
         
            {/* resume btn  */}
        <button className="tts-button" onClick={resumeTTS} disabled={!isPaused}>
            <FontAwesomeIcon icon={faRedo} />
            <span className="tooltip">Resume</span>
        </button>


        <button className="tts-button" onClick={stopTTS} disabled={!isSpeaking}>
            <FontAwesomeIcon icon={faStop} />
            <span className="tooltip">Stop</span>
        </button>
        </div>
    );
};

export default TTSControls;