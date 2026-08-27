/* eslint-disable react/prop-types */
import { useMusic } from "../context/MusicContext";
import { motion } from "motion/react";
import { FaPlay, FaPause } from "react-icons/fa";


export default function FloatingMusic({ compact = false }) {
  const { currMusic, isPlaying, play, pause } = useMusic();

  if (compact) {
    return (
      <motion.button
        onClick={isPlaying ? pause : play}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="relative flex flex-col items-center justify-center flex-1 py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B1FC0A] rounded-md"
      >
        {isPlaying && (
          <motion.div
            layoutId="footernav-active"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className="absolute inset-x-2 top-0 h-[2px] bg-[#B1FC0A]"
          />
        )}
        {isPlaying ? (
          <FaPause size={16} className="text-[#B1FC0A]" />
        ) : (
          <FaPlay size={16} className="text-slate-500" />
        )}
        <span className="mt-0.5 font-mono text-[9px] tracking-wider text-slate-600">
          {"\u00A0"}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={isPlaying ? pause : play}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ boxShadow: "0 0 0px #22c55e" }}
      animate={{
        boxShadow: isPlaying
          ? [
              "0 0 0px #B1FC0A",
              "0 0 16px #B1FC0A",
              "0 0 32px #B1FC0A",
              "0 0 16px #B1FC0A",
              "0 0 0px #B1FC0A",
            ]
          : "0 0 0px #22c55e",
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="fixed top-2 left-2 z-40
                 bg-[#B1FC0A] hover:bg-[#484BB1] text-black
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