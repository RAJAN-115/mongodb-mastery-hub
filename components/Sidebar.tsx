
import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkInfo } from '../types';
import { DashboardIcon, QuizIcon, FlashcardIcon, MindMapIcon, AssistantIcon } from './icons';

const navLinks: NavLinkInfo[] = [
  { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/quiz', label: 'Quiz', icon: <QuizIcon /> },
  { path: '/flashcards', label: 'Flashcards', icon: <FlashcardIcon /> },
  { path: '/mind-map', label: 'Mind Map', icon: <MindMapIcon /> },
  { path: '/assistant', label: 'AI Assistant', icon: <AssistantIcon /> },
];

const Sidebar: React.FC = () => {
  const activeLinkClass = "bg-brand-green/20 text-brand-green border-r-4 border-brand-green";
  const inactiveLinkClass = "text-slate-400 hover:bg-slate-700/50 hover:text-slate-100";

  return (
    <aside className="w-64 bg-slate-800/50 border-r border-slate-700 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-brand-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3333 2C5.4 2 2 5.4 2 12.3333C2 19.2667 5.4 22.6667 12.3333 22.6667C18.1 22.6667 22.6667 20.4 22.6667 12.3333C22.6667 4.26667 18.1 2 12.3333 2Z" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.3333 7.53333V12.3333" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-xl font-bold text-white">MongoDB<br/>Mastery Hub</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            {icon}
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700 text-center text-xs text-slate-500">
        <p>&copy; 2024 Mastery Hub</p>
        <p>Learn. Practice. Master.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
