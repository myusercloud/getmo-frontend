import React from "react";

export default function ServiceItem({ icon, title, items }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
          {React.cloneElement(icon, { size: 24 })}
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
      </div>

      <ul className="space-y-3 pl-14">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
