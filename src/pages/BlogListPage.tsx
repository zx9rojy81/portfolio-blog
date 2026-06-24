import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import Badge from '../components/ui/Badge';
import { formatDate } from '../utils/dateFormatter';

export default function BlogListPage() {
  const posts = useBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  const allTags = useMemo(() => {
    const tags = posts.flatMap((p) => p.tags);
    return ['전체', ...Array.from(new Set(tags))];
  }, [posts]);

  const filtered = useMemo(() => {
    if (selectedTag === '전체') return posts;
    return posts.filter((p) => p.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
      </h1>
      <p className="text-slate-400 mb-10">기술 경험과 학습 내용을 기록합니다.</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              selectedTag === tag
                ? 'bg-cyan-500 text-slate-900 font-medium'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500 text-center py-20">글이 없습니다.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{post.summary}</p>
                <p className="text-slate-600 text-xs">{formatDate(post.date)}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
