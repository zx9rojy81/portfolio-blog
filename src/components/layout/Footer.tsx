import { PROFILE } from '../../constants/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 {PROFILE.name}. All rights reserved.
        </p>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
