import { useMusic } from "../context/MusicContext";
import { motion } from "motion/react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function FloatingMusic() {
  const { currMusic, isPlaying, play, pause } = useMusic();

  return (
    <motion.button
      onClick={isPlaying ? pause : play}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ boxShadow: "0 0 0px #22c55e" }}
      animate={{
        boxShadow: isPlaying
          ? [
              "0 0 0px #22c55e",
              "0 0 16px #22c55e",
              "0 0 32px #22c55e",
              "0 0 16px #22c55e",
              "0 0 0px #22c55e",
            ]
          : "0 0 0px #22c55e",
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="fixed top-2 left-2 z-40
                 bg-green-400 hover:bg-green-500 text-black
                 px-4 py-2 rounded-lg font-semibold
                 flex items-center gap-2"
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
      <span className="text-sm hidden md:block truncate max-w-[120px]">
        {currMusic.title}
      </span>
    </motion.button>
  );
}
