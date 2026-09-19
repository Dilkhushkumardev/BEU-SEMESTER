import React from 'react';
import { Search, Bookmark, GraduationCap, Menu, CheckCircle2 } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { useProgress } from '../../context/ProgressContext';
import { useBookmarks } from '../../context/BookmarkContext';

interface NavbarProps {
  onToggleSidebar: () => void;
  onNavigate: (url: string) => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onNavigate, currentPath }) => {
  const { setIsSearchOpen } = useSearch();
  const { stats } = useProgress();
  const { totalBookmarksCount } = useBookmarks();

  const totalSyllabusTopics = 56; // 7 subjects * 8 avg topics
  const percent = Math.min(100, Math.round((stats.completedTopicsCount / totalSyllabusTopics) * 100));

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 lg:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-sky-400 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Semester<span className="text-cyan-400">Point</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  BEU
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">B.Tech 1st Sem • CSE / Group-A</p>
            </div>
          </button>
        </div>

        {/* Center: Search Button (Ctrl+K) */}
        <div className="flex-1 max-w-md hidden md:block">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/70 hover:border-cyan-500/50 text-slate-400 text-xs sm:text-sm shadow-inner transition-all group"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Search topics, formulas, labs...</span>
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] text-slate-400 bg-slate-800 border border-slate-700 rounded font-mono">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right: Quick Stats, Bookmarks, Search Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 md:hidden"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-cyan-400" />
          </button>

          {/* Bookmarks link */}
          <button
            onClick={() => onNavigate('/bookmarks')}
            className={`p-2 rounded-lg relative transition-all ${
              currentPath === '/bookmarks'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
            }`}
            title="Saved Bookmarks"
          >
            <Bookmark className="w-5 h-5" />
            {totalBookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-[9px] flex items-center justify-center">
                {totalBookmarksCount}
              </span>
            )}
          </button>

          {/* Live Semester Progress Pill */}
          <button
            onClick={() => onNavigate('/dashboard')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-xs transition-all"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">
              <strong className="text-white font-bold">{percent}%</strong> Completed
            </span>
            <div className="w-12 h-1.5 rounded-full bg-slate-800 overflow-hidden ml-1">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};
