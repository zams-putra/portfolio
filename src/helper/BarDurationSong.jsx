import { AnimatePresence, motion } from "motion/react"

// eslint-disable-next-line react/prop-types
export default function BarDurationSong({ progress, duration }) {
    // 4500 / 9000 * 100 -> 50%
    const percent = Math.min(progress / duration, 1) * 100
    return (
        <div className="w-full max-w-xs mt-4">
            <div className="w-full h-2 bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 rounded-full overflow-hidden relative">
                <AnimatePresence mode="wait">
                    <motion.div key={duration} initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: `${percent}%` }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="h-full bg-green-400 rounded-md absolute top-0 left-0" />
                </AnimatePresence >
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-400">
                <span>{msToTime(progress)}</span>
                <span>{msToTime(duration)}</span>

            </div>
        </div>
    )
}

// conv milisec ke min dan sec
function msToTime(ms) {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000)
    return `${min}:${sec.toString().padStart(2, '0')}`
}