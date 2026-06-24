export const PROFILE = {
  name: 'zx9rojy81',
  role: 'Backend Developer',
  bio: 'Java/Spring Boot 백엔드 개발자입니다. 안정적이고 확장 가능한 서버 애플리케이션 개발을 지향합니다.',
  email: 'zx9rojy81@gmail.com',
  github: 'https://github.com/zx9rojy81',
  githubUsername: 'zx9rojy81',
} as const;

export const SKILLS = {
  backend: [
    { name: 'Java', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
    { name: 'Spring Boot', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { name: 'JPA / Hibernate', color: 'bg-green-600/20 text-green-300 border-green-600/30' },
    { name: 'MySQL', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'PostgreSQL', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
    { name: 'Redis', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
    { name: 'REST API', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  ],
  devops: [
    { name: 'Docker', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { name: 'GitHub Actions', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30' },
    { name: 'Linux', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
    { name: 'Git', color: 'bg-orange-600/20 text-orange-300 border-orange-600/30' },
  ],
} as const;
