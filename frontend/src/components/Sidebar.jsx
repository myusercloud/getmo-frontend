import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Sidebar component for the Admin Dashboard.
 * Note: This component MUST be rendered within a <BrowserRouter> or <Router> 
 * context for useNavigate and Link to function correctly.
 */
const Sidebar = () => {
  const navigate = useNavigate();
  
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col fixed h-full shadow-2xl z-40">
      <div className="p-8">
        <h2 className="text-xl font-black text-blue-400">ADMIN CONSOLE</h2>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Management Portal</p>
      </div>
      
      <nav className="flex-grow px-4 space-y-1">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-4 p-4 hover:bg-slate-800 rounded-xl transition-all group"
        >
          <span className="text-lg group-hover:scale-110">📊</span> 
          <span className="font-medium">Dashboard</span>
        </Link>
        
        <Link 
          to="/equipment" 
          className="flex items-center gap-4 p-4 hover:bg-slate-800 rounded-xl transition-all group"
        >
          <span className="text-lg group-hover:scale-110">🦽</span> 
          <span className="font-medium">Equipment</span>
        </Link>
        
        <Link 
          to="/users" 
          className="flex items-center gap-4 p-4 hover:bg-slate-800 rounded-xl transition-all group"
        >
          <span className="text-lg group-hover:scale-110">👥</span> 
          <span className="font-medium">Staff Directory</span>
        </Link>
      </nav>

      <div className="p-8 border-t border-slate-800">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors w-full text-left"
        >
          <span>←</span> 
          <span className="font-medium">Exit to Website</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;