import { SKILLS } from '../../constants/profile';
import Badge from '../ui/Badge';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wide">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.backend.map((skill) => (
              <Badge key={skill.name} label={skill.name} color={skill.color} />
            ))}
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wide">DevOps & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.devops.map((skill) => (
              <Badge key={skill.name} label={skill.name} color={skill.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
