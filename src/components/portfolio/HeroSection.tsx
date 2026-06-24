import { Link } from 'react-router-dom';
import { PROFILE } from '../../constants/profile';

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20">
      <div className="animate-fade-in">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
          Backend Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          {PROFILE.name}
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          {PROFILE.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            프로젝트 보기
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            className="px-8 py-3 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
