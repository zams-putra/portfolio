/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const TAG_COLORS = {
  writeup: { text: "text-red-400", border: "border-red-400/40", bg: "bg-red-400/5", glow: "shadow-red-500/20" },
  boot2root: { text: "text-cyan-400", border: "border-cyan-400/40", bg: "bg-cyan-400/5", glow: "shadow-cyan-500/20" },
  customlab: { text: "text-sky-400", border: "border-sky-400/40", bg: "bg-sky-400/5", glow: "shadow-sky-500/20" },
  linux: { text: "text-green-400", border: "border-green-400/40", bg: "bg-green-400/5", glow: "shadow-green-500/20" },
  windows: { text: "text-blue-400", border: "border-blue-400/40", bg: "bg-blue-400/5", glow: "shadow-blue-500/20" },
  programming: { text: "text-purple-400", border: "border-purple-400/40", bg: "bg-purple-400/5", glow: "shadow-purple-500/20" },
  default: { text: "text-yellow-400", border: "border-yellow-400/40", bg: "bg-yellow-400/5", glow: "shadow-yellow-500/20" },
};

function getTagStyle(tag) {
  return TAG_COLORS[tag] || TAG_COLORS.default;
}

let copyTimeouts = {};

const markdownComponents = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1] || "text";
    const codeId = String(children).slice(0, 20);
    const [copied, setCopied] = useState(false);

    if (inline) {
      return (
        <code
          className="text-cyan-300 bg-slate-900/80 border border-cyan-500/20 px-1.5 py-0.5 rounded text-xs font-mono"
          style={{ textShadow: "0 0 8px rgba(103,232,249,0.4)" }}
          {...props}
        >
          {children}
        </code>
      );
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
      setCopied(true);
      clearTimeout(copyTimeouts[codeId]);
      copyTimeouts[codeId] = setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative group my-6">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border border-slate-700/60 border-b-0 rounded-t-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">{language}</span>
          <button
            onClick={handleCopy}
            className="text-slate-600 hover:text-cyan-400 font-mono text-xs transition-colors duration-200"
          >
            {copied ? "✓ copied" : "copy"}
          </button>
        </div>
        <div style={{ boxShadow: "0 0 30px rgba(6,182,212,0.06)" }}>
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: "0 0 0.75rem 0.75rem",
              border: "1px solid rgba(51,65,85,0.6)",
              borderTop: "none",
              background: "#060d14",
              padding: "1.25rem",
              fontSize: "0.72rem",
              lineHeight: "1.7",
            }}
            codeTagProps={{ style: { background: "transparent" } }}
            showLineNumbers={true}
            lineNumberStyle={{ color: "#1e3a4a", fontSize: "0.62rem", minWidth: "2.5em" }}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  },

  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-yellow-400 font-mono mt-8 mb-3"
      style={{ textShadow: "0 0 20px rgba(250,204,21,0.3)" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-lg font-bold text-cyan-400 font-mono mt-8 mb-3 pb-2 border-b border-cyan-400/20"
      style={{ textShadow: "0 0 16px rgba(34,211,238,0.3)" }}>
      <span className="text-slate-600 mr-2">##</span>{children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-purple-400 font-mono mt-6 mb-2">
      <span className="text-slate-600 mr-2">###</span>{children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-slate-300 leading-relaxed mb-4 text-sm">{children}</p>
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="text-cyan-400 underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-400 transition-all duration-200"
      style={{ textShadow: "0 0 8px rgba(34,211,238,0.3)" }}>
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-3 space-y-1.5 pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 space-y-1.5 pl-0 list-none">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-3 text-slate-300 text-sm">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
        style={{ boxShadow: "0 0 6px rgba(34,211,238,0.8)" }} />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-yellow-400/60 pl-4 my-4 bg-yellow-400/5 py-3 rounded-r-lg"
      style={{ boxShadow: "inset 0 0 20px rgba(250,204,21,0.03)" }}>
      <span className="text-slate-400 text-sm italic">{children}</span>
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  hr: () => (
    <div className="my-8 relative">
      <div className="border-t border-slate-800" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black px-3 text-slate-700 font-mono text-xs">···</span>
      </div>
    </div>
  ),
};

function ScanlineOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)",
      }}
    />
  );
}

function GlitchTitle({ text }) {
  return (
    <div className="relative inline-block">
      <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight"
        style={{ fontFamily: "monospace" }}>
        {text}
      </h1>
      <h1 className="absolute inset-0 text-3xl md:text-5xl font-black leading-tight tracking-tight text-cyan-400 opacity-0 hover:opacity-100 transition-none"
        style={{
          fontFamily: "monospace",
          clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
          transform: "translateX(-2px)",
          mixBlendMode: "screen",
        }}>
        {text}
      </h1>
    </div>
  );
}

export function MarkdownContent({ post, filePath }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const handleClose = () => navigate("/blog");

  useEffect(() => {
    const url = filePath || post.file;
    if (!url) {
      setContent("# Error\nFile path tidak ditemukan.");
      setLoading(false);
      return;
    }

    fetch(url)
      .then((r) => r.text())
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setContent("# Error\nGagal load file."); setLoading(false); });

    const handler = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [post, filePath]);

  return (
    <main className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at top, #050d18 0%, #000000 60%)" }}>

      <ScanlineOverlay />

   
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)", filter: "blur(80px)" }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #facc15, transparent)", filter: "blur(70px)" }} />
      </div>

    
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3.5 z-10"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(34,211,238,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.6)" }} />
            <span className="w-3 h-3 rounded-full bg-yellow-500" style={{ boxShadow: "0 0 6px rgba(234,179,8,0.6)" }} />
            <span className="w-3 h-3 rounded-full bg-green-500" style={{ boxShadow: "0 0 6px rgba(34,197,94,0.6)" }} />
          </div>
          <span className="text-slate-500 font-mono text-xs border border-slate-800 px-2 py-0.5 rounded">
            {post.id}.md
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-600">
          <span className="text-cyan-400/60">/</span>
          <span>blog</span>
          <span className="text-cyan-400/60">/</span>
          <span className="text-slate-400">{post.id}</span>
        </div>

        <button onClick={handleClose}
          className="text-slate-500 hover:text-cyan-400 text-xs font-mono transition-colors duration-200 border border-slate-800 hover:border-cyan-400/40 px-3 py-1 rounded">
          [ESC] ← back
        </button>
      </div>

  
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-12 pb-10">

        
          <motion.div className="flex flex-wrap gap-2 mb-5"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {post.tags?.map((tag) => {
              const s = getTagStyle(tag);
              return (
                <span key={tag}
                  className={`font-mono text-xs px-2.5 py-1 rounded-full border ${s.text} ${s.border} ${s.bg}`}
                  style={{ boxShadow: `0 0 10px ${s.glow || "transparent"}` }}>
                  {tag}
                </span>
              );
            })}
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <GlitchTitle text={post.title} />
          </motion.div>

      
          {post.excerpt && (
            <motion.p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-2xl font-mono"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <span className="text-cyan-400/40 mr-2">{"//"}</span>{post.excerpt}
            </motion.p>
          )}

       
          <motion.div className="flex flex-wrap items-center gap-4 mt-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full shrink-0 overflow-hidden relative"
                style={{ boxShadow: "0 0 12px rgba(6,182,212,0.4)" }}>
                <img
                  src="https://raw.githubusercontent.com/zams-putra/my-boot2root/refs/heads/main/CVE-2025-64459/lab_CVE_2025_64459/static/cat1.jpg"
                  alt="Zams Putro"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full absolute inset-0 items-center justify-center text-xs font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #a855f7)", display: "none" }}>
                  {(post.author || "Zams Putro")[0].toUpperCase()}
                </div>
              </div>
              <span className="text-slate-300 text-xs font-mono">{post.author || "Zams Putro"}</span>
            </div>
            <span className="text-slate-700 font-mono text-xs">·</span>
            <span className="text-slate-200 text-xs font-mono">
              <span className="text-sky-500 mr-1">$</span>{formatDate(post.date)}
            </span>
            {post.readTime && (
              <>
                <span className="text-slate-700 font-mono text-xs">·</span>
                <span className="text-slate-500 text-xs font-mono">{post.readTime}</span>
              </>
            )}
          </motion.div>
        </div>

    
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.4), rgba(168,85,247,0.4), transparent)" }} />
        </div>
      </div>

  
      <motion.div ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.4 }}>

        {loading ? (
          <div className="flex flex-col gap-3 py-20 items-center">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  style={{ boxShadow: "0 0 8px rgba(6,182,212,0.8)" }} />
              ))}
            </div>
            <p className="text-cyan-400/60 font-mono text-xs animate-pulse">decrypting payload...</p>
          </div>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={remarkGfm} components={markdownComponents}>
              {content}
            </ReactMarkdown>
          </div>
        )}

     
        <div className="mt-20 pt-8 relative">
          <div className="h-px mb-8"
            style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.3), transparent)" }} />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-slate-400 font-mono text-xs">
              <span className="text-slate-300">&gt;</span> end of file —{" "}
              <span className="text-slate-200">{post.id}.md</span>
            </p>
            <button onClick={handleClose}
              className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-cyan-400/10 hover:border-cyan-400/60"
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 20px rgba(6,182,212,0.15)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
              ← back to blog
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}