import { Octokit } from '@octokit/rest';
import type { GitHubRepo, GitHubProfile } from '../types/github';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const { data } = await octokit.repos.listForUser({
    username,
    sort: 'updated',
    per_page: 30,
    type: 'owner',
  });

  return data
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      topics: repo.topics ?? [],
      language: repo.language ?? null,
      stargazers_count: repo.stargazers_count ?? 0,
      updated_at: repo.updated_at ?? '',
      fork: repo.fork,
    }));
}

export async function fetchProfile(username: string): Promise<GitHubProfile> {
  const { data } = await octokit.users.getByUsername({ username });
  return {
    login: data.login,
    name: data.name,
    bio: data.bio,
    public_repos: data.public_repos,
    followers: data.followers,
    avatar_url: data.avatar_url,
  };
}
