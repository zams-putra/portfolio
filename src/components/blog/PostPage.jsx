import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import localPosts from "../../data/posts";
import PasswordGate from "../../helper/blog/PasswordGate";
import { MarkdownContent } from "../../helper/blog/MarkdownContent";

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = localPosts.find((p) => p.id === slug);

  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(`unlocked_${slug}`) === "true"
  );

  if (!post) return (
    <main className="min-h-screen bg-black flex items-center justify-center font-mono text-slate-500">
      <div className="text-center">
        <p className="text-red-400 text-sm">{`> ERROR 404`}</p>
        <p className="text-xs mt-2">post <span className="text-white">{slug}</span> tidak ditemukan</p>
        <button onClick={() => navigate("/blog")} className="mt-4 text-xs text-purple-400 hover:underline">
          ← balik ke blog
        </button>
      </div>
    </main>
  );

  if (post.password && !unlocked) {
    return (
      <PasswordGate
        post={post}
        onUnlock={() => {
          sessionStorage.setItem(`unlocked_${slug}`, "true");
          setUnlocked(true);
        }}
      />
    );
  }

  return <MarkdownContent post={post} />;
}