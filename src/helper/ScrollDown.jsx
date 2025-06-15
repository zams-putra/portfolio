import { useDrag } from "@use-gesture/react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function ScrollDown({ onDown }) {
    const bind = useDrag((state) => {
        if (state.last) {
            if (state.movement[1] < -50) {
                onDown();
            }
        }
    });

    return (
        <motion.footer
            {...bind()}
            style={{ touchAction: "none" }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileTap={{ translateY: -40, backgroundColor: '#4ade80' }}
            className="flex flex-col items-center mt-10 justify-center rounded-lg w-1/2 pb-6 p-2 text-center text-slate-200">

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                className="mt-2">
                <FiArrowDown size={24} />
            </motion.div>
        </motion.footer>
    )
}

