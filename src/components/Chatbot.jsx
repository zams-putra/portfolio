/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiX, FiSend } from "react-icons/fi";

// TODO: ganti getBotReply ini sama call ke API/model beneran pas fiturnya jadi.
// Sekarang cuma canned response biar UI-nya bisa langsung dicoba end-to-end.
function getBotReply(userText) {
  const text = userText.toLowerCase();
  if (text.includes("halo") || text.includes("hai")) {
    return "Halo! Ada yang mau ditanyain soal project atau background gue?";
  }
  if (text.includes("project") || text.includes("proyek")) {
    return "Coba cek section Projects di halaman utama — ada CTF lab, boot2root machine, sampe web app.";
  }
  if (text.includes("sertif") || text.includes("cert")) {
    return "Sertifikat gue ada di section Certifications, dari CyberSec sampe bahasa Inggris.";
  }
  return "Noted. (Ini masih canned response ya — belum nyambung ke model beneran)";
}

function Message({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] font-mono text-sm px-4 py-2 rounded-lg leading-relaxed ${
          isUser
            ? "bg-[#B1FC0A] text-black"
            : "bg-transparent border border-[#484BB1] text-slate-200"
        }`}
      >
        {!isUser && <span className="text-[#B1FC0A] mr-1">bot@nasgor:~$</span>}
        {text}
      </div>
    </div>
  );
}

/**
 * Chatbot — full-screen overlay, dipicu dari action button di FooterNav
 * (persis kayak Terminal). Sengaja masih pake token warna/font yang sama
 * kayak rest-of-site (#B1FC0A, #484BB1, font-mono) biar konsisten dulu;
 * kalau nanti mau kasih "universe" sendiri, tinggal ganti bagian className
 * di sini tanpa ganggu App.jsx / FooterNav.jsx.
 */
export default function Chatbot({ setIsChatbot }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Yo! Tanya-tanya soal gue, project, atau sertifikat aja." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { role: "user", text: trimmed };
    const botMsg = { role: "bot", text: getBotReply(trimmed) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-2xl h-[80vh] flex flex-col rounded-xl border-2 border-[#484BB1] bg-black overflow-hidden"
      >
        {/* title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#484BB1]/50">
          <span className="font-mono text-xs text-slate-400">
            <span className="text-[#B1FC0A]">putra@nasgor</span>:~/chatbot
          </span>
          <button
            onClick={() => setIsChatbot(false)}
            aria-label="Close chatbot"
            className="text-slate-400 hover:text-[#B1FC0A] transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Message role={m.role} text={m.text} />
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>

        {/* input */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 p-3 border-t border-[#484BB1]/50"
        >
          <span className="font-mono text-[#B1FC0A] text-sm shrink-0">{'>'}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 bg-transparent font-mono text-sm text-white placeholder:text-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#B1FC0A] text-black active:scale-95 transition-transform"
          >
            <FiSend size={14} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}