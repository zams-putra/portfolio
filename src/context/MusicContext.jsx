import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

const musics = [
  { title: "10C", artist: "Sharou", link: "/music/sharou-10c.mp3" },
  { title: "You and Me", artist: "Sharou", link: "/music/sharou-you_and_me.mp3" },
  { title: "Turirip ip ip", artist: "NCS Symbolism", link: "/music/turipip.mp3" },
];

// eslint-disable-next-line react/prop-types
export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [currTrack, setCurrTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const next = () => {
    setCurrTrack((p) => (p + 1) % musics.length);
    setTimeout(play, 100);
  };

  const prev = () => {
    setCurrTrack((p) => (p - 1 + musics.length) % musics.length);
    setTimeout(play, 100);
  };

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currMusic: musics[currTrack],
        isPlaying,
        play,
        pause,
        next,
        prev,
      }}
    >
      <audio
        ref={audioRef}
        src={musics[currTrack].link}
        onEnded={next}
      />
      {children}
    </MusicContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMusic = () => useContext(MusicContext);
