import { useDrag } from "@use-gesture/react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function ScrollUp({ onUp }) {
    const bind = useDrag((state) => {
        if (state.last) {
            if (state.movement[1] > 50) {
                onUp();
            }
        }
    });

    return (
        <motion.footer
            {...bind()}
            style={{ touchAction: "none" }}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileTap={{ translateY: -10, backgroundColor: '#4ade80', width: '100vw' }}
            className="flex flex-col items-center justify-center rounded-lg w-1/2 pb-6 p-2 text-center text-slate-200">

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                className="mt-2">
                <FiArrowUp size={24} />
            </motion.div>
        </motion.footer>
    )
}

