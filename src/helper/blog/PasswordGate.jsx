/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordGate({ post, onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => navigate("/blog");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === post.password) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md bg-[#0d0d0d] border border-slate-700 rounded-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={shake ? { x: [-8, 8, -6, 6, 0], scale: 1, opacity: 1 } : { x: 0, scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
      
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
          <span className="text-slate-500 font-mono text-xs">locked.md</span>
          <button onClick={handleClose} className="text-slate-500 hover:text-white text-xs font-mono transition-colors">
            [ESC] close
          </button>
        </div>

        <div className="p-8 flex flex-col gap-5">
      
          <div className="flex flex-col gap-2">
            <p className="text-yellow-400 font-mono text-xs">{`> cat ${post.id}.md`}</p>
            <p className="text-red-400 font-mono text-xs">{`Permission denied: document locked like my heart 🔒`}</p>
            <p className="text-slate-400 font-mono text-xs mt-1">
              {post.alasan || "Mesin belum retired. Masukkan password buat buka."}
            </p>
          </div>

         
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus-within:border-purple-400 transition-colors">
              <span className="text-purple-400 font-mono text-xs shrink-0">{`>`}</span>
              <input
                type="password"
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false); }}
                placeholder="enter password..."
                autoFocus
                className="bg-transparent text-white text-xs font-mono outline-none w-full placeholder:text-slate-600"
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-red-400 font-mono text-xs"
              >
                {`> ERROR: jangan kepo`}
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg border border-purple-400 text-purple-400 font-mono text-xs hover:bg-purple-400 hover:text-black transition-all duration-200"
            >
              {`> unlock`}
            </button>
          </form>

          <p className="text-slate-600 font-mono text-xs text-center">
            gabole, sorry yee😜
          </p>
        </div>
      </motion.div>
    </main>
  );
}