/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import localPosts from "../data/posts";


const CATEGORY_COLORS = {
  customlab: { border: "border-sky-400/50",  text: "text-sky-400",   bg: "hover:bg-sky-400/5 hover:border-sky-400" },
  default:   { border: "border-slate-700",   text: "text-slate-400", bg: "hover:bg-slate-800 hover:border-slate-500" },
};

function getCategory(tags = [], title = "") {
  const combined = [...tags, title].join(" ").toLowerCase();
  if (combined.includes("customlab") || combined.includes("dev")) return "customlab";
  return "default";
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric", month: "short", year: "numeric",
  });
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
};


function PasswordGate({ post, onUnlock, onClose }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
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
          <button onClick={onClose} className="text-slate-500 hover:text-white text-xs font-mono transition-colors">
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
    </motion.div>
  );
}


function MarkdownModal({ post, onClose }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(post.file)
      .then((r) => r.text())
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setContent("# Error\nGagal load file."); setLoading(false); });

    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [post, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 overflow-y-auto"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="w-full max-w-3xl bg-[#0d0d0d] border border-slate-700 rounded-2xl overflow-hidden mb-10"
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 sticky top-0 bg-[#0d0d0d] z-10">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
          <span className="text-slate-500 font-mono text-xs">{post.id}.md</span>
          <button onClick={onClose} className="text-slate-500 hover:text-white text-xs font-mono transition-colors">
            [ESC] close
          </button>
        </div>
        <div className="p-6 md:p-10">
          {loading ? (
            <p className="text-purple-400 font-mono text-sm animate-pulse">{`> loading...`}</p>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none
              prose-headings:font-mono prose-headings:text-white
              prose-h1:text-2xl prose-h2:text-xl prose-h2:text-purple-400
              prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-lime-400 prose-code:bg-slate-900 prose-code:px-1
              prose-code:rounded prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-xl
              prose-blockquote:border-l-lime-400 prose-blockquote:text-slate-400
              prose-strong:text-white prose-li:text-slate-300">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}


function PostCard({ post, index, onClick }) {
  const cat = getCategory(post.tags, post.title);
  const style = CATEGORY_COLORS[cat];
  const isLocked = !!post.password;

  return (
    <motion.div
      custom={index} variants={cardVariant} initial="hidden" animate="visible"
      whileHover={{ y: -5 }} onClick={onClick}
      className={`group flex flex-col rounded-xl border bg-[#0d0d0d] transition-all duration-200 overflow-hidden cursor-pointer ${style.border} ${style.bg}`}
    >
      <div className="h-10 bg-slate-900 flex items-center px-4 gap-2 border-b border-slate-800">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500/60" />
        </div>
        <span className="text-slate-500 font-mono text-xs ml-2 truncate">{post.id}.md</span>

        {isLocked && (
          <span className="ml-auto text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded-full shrink-0">
            🔒 locked
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className={`text-xs font-mono ${style.text}`}>{`> ${cat}`}</span>
        <h2 className="text-white font-semibold text-sm leading-snug line-clamp-2">{post.title}</h2>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
          {isLocked ? "🔒 " + (post.alasan || "Writeup dikunci — mesin belum retired.") : post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800">
          <span className="text-slate-600 text-xs font-mono">{formatDate(post.date)}</span>
          <span className={`text-xs font-mono ${isLocked ? "text-yellow-400" : style.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {isLocked ? "unlock →" : "open →"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}


export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [activePost, setActivePost] = useState(null);     
  const [unlockedPost, setUnlockedPost] = useState(null);   

  const categories = ["all", "customlab"];

  const filtered = localPosts.filter((p) =>
    filter === "all" ? true : getCategory(p.tags, p.title) === filter
  );

  const handleCardClick = (post) => {
    if (post.password) {
      setActivePost(post);      
      setUnlockedPost(null);
    } else {
      setUnlockedPost(post);   
      setActivePost(null);
    }
  };

  const handleUnlock = () => {
    setUnlockedPost(activePost);
    setActivePost(null);
  };

  const handleClose = () => {
    setActivePost(null);
    setUnlockedPost(null);
  };

  return (
    <>
      <main className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20">
        <motion.div className="mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="text-slate-500 font-mono text-xs hover:text-purple-400 transition-colors mb-6 inline-block">
            ← cd ../home
          </Link>
          <p className="text-yellow-400 font-mono text-xs mb-2">
            {`[user@portfolio ~]$ ls -la ./blog`}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-slate-400 text-sm mt-3 font-mono">
            Boot2root Dev · Writeups · Programming · etc
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap gap-2 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full border font-mono text-xs transition-all duration-200 ${
                filter === cat
                  ? "border-purple-400 text-purple-400 bg-purple-400/10"
                  : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
              }`}>
              {`> ${cat}`}
            </button>
          ))}
          <span className="ml-auto text-slate-600 text-xs font-mono self-center">
            {filtered.length} post{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 font-mono text-slate-500">
            <p>{`> no posts found for: "${filter}"`}</p>
            <p className="mt-2 text-xs">tambah post di <span className="text-purple-400">src/data/posts.js</span></p>
            <button onClick={() => setFilter("all")} className="mt-4 text-xs text-purple-400 hover:underline">
              reset filter
            </button>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} onClick={() => handleCardClick(post)} />
            ))}
          </div>
        )}
      </main>

      <AnimatePresence>
     
        {activePost && !unlockedPost && (
          <PasswordGate key="gate" post={activePost} onUnlock={handleUnlock} onClose={handleClose} />
        )}
  
        {unlockedPost && (
          <MarkdownModal key="modal" post={unlockedPost} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}