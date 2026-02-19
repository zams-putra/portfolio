/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useEffect, useState } from "react";
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

const markdownComponents = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1] || "text";

    if (inline) {
      return (
        <code className="text-lime-400 bg-slate-900 px-1 rounded text-xs" {...props}>
          {children}
        </code>
      );
    }

    return (
      <div className="relative group my-4">
        <span className="absolute top-3 right-3 text-slate-500 font-mono text-xs opacity-60 group-hover:opacity-100 transition-opacity">
          {language}
        </span>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: "0.75rem",
            border: "1px solid rgb(30 41 59)",
            background: "#0d1117",
            padding: "1.25rem",
            fontSize: "0.75rem",
            lineHeight: "1.6",
          }}
          codeTagProps={{
            style: {
              background: 'transparent'
            }
          }}
          showLineNumbers={true}
          lineNumberStyle={{ color: "#334155", fontSize: "0.65rem" }}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  },
};


export function MarkdownContent({ post }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => navigate("/blog");

  useEffect(() => {
    fetch(post.file)
      .then((r) => r.text())
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setContent("# Error\nGagal load file."); setLoading(false); });

    const handler = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [post]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
  
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d0d0d] z-10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-purple-500" />
        </div>
        <span className="text-slate-500 font-mono text-xs">{post.id}.md</span>
        <button onClick={handleClose} className="text-slate-500 hover:text-white text-xs font-mono transition-colors">
          [ESC] ← back
        </button>
      </div>

      <motion.div
        className="max-w-3xl mx-auto px-6 md:px-10 pt-20 pb-12"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
      >

        <div className="mb-10 pb-8 border-b border-slate-800 flex flex-col gap-4">

      
          <span className="text-xs font-mono text-purple-400">{`> ${post.tags?.join(" · ") || "uncategorized"}`}</span>

       
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>

      
          {post.excerpt && (
            <p className="text-slate-400 text-sm leading-relaxed">
              {post.excerpt}
            </p>
          )}

        
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-2">
         
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-slate-800 flex items-center justify-center text-xs font-bold text-white shrink-0">
                {(post.author || "Zams Putro")[0].toUpperCase()}
              </div>
              <span className="text-slate-300 text-xs font-mono">
                {post.author || "Zams Putro"}
              </span>
            </div>

            <span className="text-slate-700 text-xs font-mono">·</span>

            <span className="text-slate-500 text-xs font-mono">
              📅 {formatDate(post.date)}
            </span>

            {post.readTime && (
              <>
                <span className="text-slate-700 text-xs font-mono">·</span>
                <span className="text-slate-500 text-xs font-mono">
                  ⏱ {post.readTime}
                </span>
              </>
            )}
          </div>
        </div>

       
        {loading ? (
          <p className="text-purple-400 font-mono text-sm animate-pulse">{`> loading...`}</p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none
            prose-headings:font-mono prose-headings:text-yellow-400
            prose-h1:text-2xl prose-h2:text-xl prose-h2:text-purple-400
            prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
            prose-p:text-slate-300 prose-p:leading-relaxed prose-h3:text-slate-400
            prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-lime-400 prose-blockquote:text-slate-400
            prose-strong:text-white prose-li:text-slate-300">
            <ReactMarkdown remarkPlugins={remarkGfm} components={markdownComponents}>{content}</ReactMarkdown>
          </div>
          
        )}



      
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col gap-4">
          <p className="text-slate-600 font-mono text-xs">{`> end of file — ${post.id}.md`}</p>
          <button
            onClick={handleClose}
            className="self-start text-xs font-mono text-purple-400 border border-purple-400/40 px-4 py-2 rounded-lg hover:bg-purple-400/10 transition-colors"
          >
            ← back to blog
          </button>
        </div>
      </motion.div>
    </main>
  );
}