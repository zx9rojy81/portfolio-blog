import { useGithubRepos } from '../hooks/useGithubRepos';
import { PROFILE } from '../constants/profile';
import RepoGrid from '../components/github/RepoGrid';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function ProjectsPage() {
  const { repos, profile, isLoading, error } = useGithubRepos(PROFILE.githubUsername);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        {profile && (
          <p className="text-slate-400 text-sm">
            총 {profile.public_repos}개의 공개 저장소 중 fork를 제외한 프로젝트
          </p>
        )}
      </div>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && <RepoGrid repos={repos} />}
    </div>
  );
}
