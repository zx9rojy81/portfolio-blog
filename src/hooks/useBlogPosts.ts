import { useMemo } from 'react';
import { getAllPosts, getPostBySlug } from '../utils/markdownLoader';
import type { BlogMeta, BlogPost } from '../types/blog';

export function useBlogPosts(): BlogMeta[] {
  return useMemo(() => getAllPosts(), []);
}

export function useBlogPost(slug: string): BlogPost | null {
  return useMemo(() => getPostBySlug(slug), [slug]);
}
