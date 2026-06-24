import type { GitHubRepo } from '../../types/github';
import Badge from '../ui/Badge';
import { formatDate } from '../../utils/dateFormatter';

const LANGUAGE_COLORS: Record<string, string> = {
  Java: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  TypeScript: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  JavaScript: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Python: 'bg-green-500/20 text-green-300 border-green-500/30',
  Go: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Kotlin: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] : undefined;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-5 transition-all group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-slate-200 font-semibold group-hover:text-cyan-400 transition-colors truncate">
          {repo.name}
        </h3>
        {repo.stargazers_count > 0 && (
          <span className="text-slate-500 text-xs shrink-0">★ {repo.stargazers_count}</span>
        )}
      </div>
      <p className="text-slate-400 text-sm line-clamp-2 mb-4 min-h-[2.5rem]">
        {repo.description ?? '설명 없음'}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {repo.language && <Badge label={repo.language} color={langColor} />}
        {repo.topics.slice(0, 3).map((topic) => (
          <Badge key={topic} label={topic} />
        ))}
      </div>
      <p className="text-slate-600 text-xs">{formatDate(repo.updated_at)}</p>
    </a>
  );
}
