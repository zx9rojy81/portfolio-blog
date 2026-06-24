import { PROFILE } from '../../constants/profile';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            안녕하세요! Java/Spring Boot를 주력으로 사용하는 백엔드 개발자입니다.
          </p>
          <p className="text-slate-400 leading-relaxed">
            안정적이고 확장 가능한 서버 애플리케이션 개발을 지향하며, 클린 코드와 테스트 주도 개발에 관심이 많습니다.
            새로운 기술을 배우고 적용하는 것을 즐깁니다.
          </p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">이름</span>
              <span className="text-slate-200">{PROFILE.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">직무</span>
              <span className="text-slate-200">{PROFILE.role}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">이메일</span>
              <a href={`mailto:${PROFILE.email}`} className="text-cyan-400 hover:text-cyan-300">
                {PROFILE.email}
              </a>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">GitHub</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                @{PROFILE.githubUsername}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
