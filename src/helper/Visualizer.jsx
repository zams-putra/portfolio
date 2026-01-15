import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
export default function FakeVisualizer({ isPlaying, bars = 24 }) {
    return (
        <div className="flex items-end gap-1 h-24">
            {Array.from({ length: bars }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-green-400 rounded-sm"
                    animate={{
                        height: isPlaying
                            ? [`20%`, `${Math.random() * 100}%`, `30%`]
                            : "20%",
                        opacity: isPlaying ? 1 : 0.3,
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: isPlaying ? Infinity : 0,
                        repeatType: "mirror",
                        delay: i * 0.05,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
