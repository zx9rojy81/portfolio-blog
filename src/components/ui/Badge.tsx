interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({ label, color = 'bg-slate-700/50 text-slate-300 border-slate-600/50' }: BadgeProps) {
  return (
    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${color}`}>
      {label}
    </span>
  );
}
