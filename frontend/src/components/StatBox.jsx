export default function StatBox({ number, label }) {
  return (
    <div className="text-center md:text-left border-l-2 border-slate-100 pl-6">
      <div className="text-3xl font-black text-blue-600 mb-1">{number}</div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}
