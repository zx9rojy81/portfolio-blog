import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useBlogPost } from '../hooks/useBlogPosts';
import Badge from '../components/ui/Badge';
import { formatDate } from '../utils/dateFormatter';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = useBlogPost(slug ?? '');

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-slate-400 mb-6">글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm">
          ← 블로그 목록으로
        </Link>
      </div>
    );
  }

  const htmlContent = DOMPurify.sanitize(marked.parse(post.content) as string);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/blog" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors mb-8 inline-block">
        ← 블로그 목록으로
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 leading-tight">
        {post.title}
      </h1>

      <p className="text-slate-500 text-sm mb-12">{formatDate(post.date)}</p>

      <div
        className="prose prose-invert prose-cyan max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
