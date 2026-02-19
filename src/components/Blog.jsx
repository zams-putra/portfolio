/* eslint-disable react/prop-types */
import {  useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

import localPosts from "../data/posts";
import PasswordGate from "../helper/blog/PasswordGate";
import { MarkdownContent } from "../helper/blog/MarkdownContent";


const CATEGORY_COLORS = {
  customlab: { border: "border-sky-400/50",  text: "text-sky-400",   bg: "hover:bg-sky-400/5 hover:border-sky-400" },
  writeup: { border: "border-red-400/50",  text: "text-red-400",   bg: "hover:bg-red-400/5 hover:border-red-400" },
  default:   { border: "border-slate-700",   text: "text-slate-400", bg: "hover:bg-slate-800 hover:border-slate-500" },
};

function getCategory(tags = [], title = "") {
  const combined = [...tags, title].join(" ").toLowerCase();
  if (combined.includes("customlab") || combined.includes("dev")) return "customlab";
  if (combined.includes("writeup") || combined.includes("ctf")) return "writeup";
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




function PostCard({ post, index, onClick }) {
  const cat = getCategory(post.tags, post.title);
  const style = CATEGORY_COLORS[cat];
  const isLocked = !!post.password;

  return (
      <Link to={`/blog/${post.id}`}>
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
      </Link>
  );
}


export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [activePost, setActivePost] = useState(null);     
  const [unlockedPost, setUnlockedPost] = useState(null);   

  const categories = ["all", "customlab", "writeup"];

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
          <MarkdownContent key="modal" post={unlockedPost} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}