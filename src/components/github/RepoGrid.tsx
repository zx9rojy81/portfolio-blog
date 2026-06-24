import { useState, useMemo } from 'react';
import type { GitHubRepo } from '../../types/github';
import RepoCard from './RepoCard';

interface RepoGridProps {
  repos: GitHubRepo[];
}

export default function RepoGrid({ repos }: RepoGridProps) {
  const [selectedLang, setSelectedLang] = useState<string>('전체');

  const languages = useMemo(() => {
    const langs = repos.map((r) => r.language).filter((l): l is string => l !== null);
    return ['전체', ...Array.from(new Set(langs))];
  }, [repos]);

  const filtered = useMemo(() => {
    if (selectedLang === '전체') return repos;
    return repos.filter((r) => r.language === selectedLang);
  }, [repos, selectedLang]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              selectedLang === lang
                ? 'bg-cyan-500 text-slate-900 font-medium'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-slate-500 text-center py-20">해당 언어의 프로젝트가 없습니다.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
