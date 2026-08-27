/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiX, FiSend, FiLoader } from "react-icons/fi";

async function askChatbot(messages) {
  const res = await fetch("https://quizmaker-app-api.vercel.app/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("Chat API request failed");
  const data = await res.json();
  return data.reply;
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] md:max-w-[75%] font-mono text-sm px-4 py-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-[#B1FC0A] text-black rounded-br-sm"
            : "bg-white/5 border border-[#484BB1]/40 text-slate-200 rounded-bl-sm"
        }`}
      >
        {!isUser && (
          <span className="block text-[#B1FC0A] text-[10px] tracking-wider mb-1">
            bot@nasgor
          </span>
        )}
        {content}
      </div>
    </motion.div>
  );
}

export default function Chatbot({ setIsChatbot }) {
  const [messages, setMessages] = useState([]); // { role: "user" | "assistant", content }
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const newMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await askChatbot(newMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Waduh, gagal connect ke server. Coba lagi bentar ya awokwokowk." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const inputBar = (
    <motion.form
      layout
      layoutId="chatbot-input-bar"
      onSubmit={handleSend}
      className="w-full max-w-2xl mx-auto flex items-center gap-2 rounded-2xl border-2 border-[#484BB1] bg-white/[0.02] px-4 py-3"
    >
      <span className="font-mono text-[#B1FC0A] text-sm shrink-0">{">"}</span>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        placeholder="Ask me anything..."
        className="flex-1 bg-transparent font-mono text-sm text-white placeholder:text-slate-600 focus:outline-none disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        aria-label="Send"
        className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#B1FC0A] text-black active:scale-95 transition-transform disabled:opacity-40 shrink-0"
      >
        {isLoading ? <FiLoader className="animate-spin" size={16} /> : <FiSend size={15} />}
      </button>
    </motion.form>
  );

  return (
    <main className="w-screen min-h-screen flex flex-col bg-black text-slate-200">

      <header className="w-full flex items-center justify-between px-6 py-4 shrink-0">
        <span className="font-mono text-xs text-slate-400">
          <span className="text-[#B1FC0A]">putra@nasgor</span>:~/chatbot
        </span>
        <button
          onClick={() => setIsChatbot(false)}
          aria-label="Close chatbot"
          className="text-slate-400 hover:text-[#B1FC0A] transition-colors"
        >
          <FiX size={20} />
        </button>
      </header>

      {!hasMessages ? (
  
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="font-mono text-2xl md:text-3xl text-white font-bold">
             Ask me anything... <span className="text-[#B1FC0A]">apa ae lah</span>
            </p>
            <p className="font-mono text-xs text-slate-500 mt-2">
              project, sertifikat, serah lau
            </p>
          </motion.div>
          <div className="w-full px-4">{inputBar}</div>
        </div>
      ) : (
     
        <>
          <div className="flex-1 overflow-y-auto px-4 py-8">
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <Message key={i} role={m.role} content={m.content} />
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex justify-start">
                  <div className="font-mono text-xs text-slate-500 px-4 py-2">
                    <span className="text-[#B1FC0A]">bot@nasgor</span> bentar mumet...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>
          <div className="shrink-0 px-4 pb-6 pt-2">{inputBar}</div>
        </>
      )}
    </main>
  );
}