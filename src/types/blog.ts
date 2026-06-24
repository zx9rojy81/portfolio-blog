export interface BlogMeta {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
}

export interface BlogPost extends BlogMeta {
  content: string;
}
