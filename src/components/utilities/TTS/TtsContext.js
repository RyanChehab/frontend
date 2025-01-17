import React, { createContext, useState } from "react";

export const TTSContext = createContext();

export const TTSProvider = ({ children }) => {

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const playTTS = (text) => {

    const voices = window.speechSynthesis.getVoices();

    const selectedVoice = voices.find((voice) => voice.name.includes("Google UK English Female"))

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = selectedVoice;
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const pauseTTS = () => {
    setIsPaused(true);
    window.speechSynthesis.pause();
  };

  const resumeTTS = () => {
    setIsPaused(false);
    window.speechSynthesis.resume();
  };

  const stopTTS = () => {
    setIsSpeaking(false);
    setIsPaused(false);
    window.speechSynthesis.cancel();
  };

  return (
    <TTSContext.Provider value={{ isSpeaking, isPaused, playTTS, pauseTTS, resumeTTS, stopTTS }}>
      {children}
    </TTSContext.Provider>
  );
}
