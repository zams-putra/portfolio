/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiFolder,
  FiBriefcase,
  FiShare2,
  FiFlag,
  FiMessageSquare,
} from "react-icons/fi";
import { SiGnometerminal } from "react-icons/si";

// kudu sinkron ama app.jsx
const NAV_ITEMS = [
  { icon: FiHome, label: "Home" },
  { icon: FiUser, label: "About" },
  { icon: FiCpu, label: "Stack" },
  { icon: FiFolder, label: "Work" },
  { icon: FiBriefcase, label: "Exp" },
  { icon: FiShare2, label: "Social" },
  { icon: FiFlag, label: "End" },
];

const idx = (i) => String(i).padStart(2, "0");


function BarButton({ icon: Icon, number, active, onClick, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={number !== undefined && active ? "page" : undefined}
      className="relative flex flex-col items-center justify-center flex-1 py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B1FC0A] rounded-md"
    >
      {active && (
        <motion.div
          layoutId="footernav-active"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute inset-x-2 top-0 h-[2px] bg-[#B1FC0A]"
        />
      )}
      <Icon size={18} className={active ? "text-[#B1FC0A]" : "text-slate-500"} />
   
      <span
        className={`mt-0.5 font-mono text-[9px] tracking-wider ${
          active ? "text-[#B1FC0A]" : "text-slate-600"
        }`}
      >
        {number !== undefined ? idx(number) : "\u00A0"}
      </span>
    </button>
  );
}


export default function FooterNav({
  page,
  onNavigate,
  onLaunchTerminal,
  onLaunchChatbot,
  musicSlot,
}) {
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="md:hidden fixed bottom-0 inset-x-0 z-30 pb-[env(safe-area-inset-bottom)] bg-black/80 backdrop-blur-md border-t border-white/10"
    >
      <div className="flex items-stretch">
        {NAV_ITEMS.map((item, i) => (
          <BarButton
            key={item.label}
            icon={item.icon}
            number={i}
            active={page === i}
            onClick={() => onNavigate(i)}
            ariaLabel={`Ke section ${item.label}`}
          />
        ))}

   
        <div className="w-px my-2 bg-white/10" />

        {musicSlot}

        <BarButton
          icon={FiMessageSquare}
          onClick={onLaunchChatbot}
          ariaLabel="Open chatbot"
        />

        <BarButton
          icon={SiGnometerminal}
          onClick={onLaunchTerminal}
          ariaLabel="Launch terminal"
        />
      </div>
    </motion.nav>
  );
}