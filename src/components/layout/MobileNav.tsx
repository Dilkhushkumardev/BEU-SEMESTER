import React from 'react';
import { Home, BookOpen, Sigma, Zap, Beaker } from 'lucide-react';

interface MobileNavProps {
  onNavigate: (url: string) => void;
  currentPath: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onNavigate, currentPath }) => {
  const navItems = [
    { label: 'Home', url: '/', icon: Home },
    { label: 'Subjects', url: '/subjects', icon: BookOpen },
    { label: 'Formulas', url: '/formulas', icon: Sigma },
    { label: 'Revision', url: '/revision', icon: Zap },
    { label: 'Labs', url: '/labs', icon: Beaker },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/80 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.url === '/'
              ? currentPath === '/'
              : currentPath.startsWith(item.url);

          return (
            <button
              key={item.url}
              onClick={() => onNavigate(item.url)}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 text-[10px] font-medium transition-all ${
                isActive
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400 scale-110' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
