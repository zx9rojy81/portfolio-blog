import matter from 'gray-matter';
import type { BlogPost, BlogMeta } from '../types/blog';

const modules = import.meta.glob('../posts/*.md', { eager: true }) as Record<string, { default: string }>;

function slugFromPath(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 1].replace('.md', '');
}

export function getAllPosts(): BlogMeta[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const { data } = matter(mod.default);
      return {
        title: data.title ?? '제목 없음',
        date: data.date ?? '',
        tags: data.tags ?? [],
        summary: data.summary ?? '',
        slug: slugFromPath(path),
      } as BlogMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === slug);
  if (!entry) return null;

  const [path, mod] = entry;
  const { data, content } = matter(mod.default);

  return {
    title: data.title ?? '제목 없음',
    date: data.date ?? '',
    tags: data.tags ?? [],
    summary: data.summary ?? '',
    slug: slugFromPath(path),
    content,
  };
}
