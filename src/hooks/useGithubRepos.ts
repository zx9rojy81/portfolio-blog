import { useState, useEffect } from 'react';
import { fetchRepos, fetchProfile } from '../services/githubService';
import type { GitHubRepo, GitHubProfile } from '../types/github';

const CACHE_KEY = 'github_data';

interface GithubData {
  repos: GitHubRepo[];
  profile: GitHubProfile | null;
  isLoading: boolean;
  error: string | null;
}

export function useGithubRepos(username: string): GithubData {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      setRepos(parsed.repos);
      setProfile(parsed.profile);
      setIsLoading(false);
      return;
    }

    Promise.all([fetchRepos(username), fetchProfile(username)])
      .then(([repoData, profileData]) => {
        setRepos(repoData);
        setProfile(profileData);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ repos: repoData, profile: profileData }));
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'GitHub API 오류가 발생했습니다.');
      })
      .finally(() => setIsLoading(false));
  }, [username]);

  return { repos, profile, isLoading, error };
}
