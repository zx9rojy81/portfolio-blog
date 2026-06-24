import { PROFILE } from '../../constants/profile';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact</span>
      </h2>
      <p className="text-slate-400 mb-10">프로젝트, 채용, 기술 이야기 무엇이든 환영합니다.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`mailto:${PROFILE.email}`}
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors"
        >
          이메일 보내기
        </a>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors"
        >
          GitHub 방문
        </a>
      </div>
    </section>
  );
}
