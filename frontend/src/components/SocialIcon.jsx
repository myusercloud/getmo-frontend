export default function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 border border-slate-800 rounded-full flex items-center justify-center text-sm font-bold hover:bg-white hover:text-black cursor-pointer transition-all">
      {icon}
    </div>
  );
}
