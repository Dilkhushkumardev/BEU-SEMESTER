import React, { useEffect, useRef, useState } from 'react';
import { Search, X, BookOpen, Layers, FileText, Beaker, Sigma, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { performGlobalSearch } from '../../data';
import type { SearchResult } from '../../types';

interface SearchModalProps {
  onNavigate: (url: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onNavigate }) => {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isSearchOpen, setSearchQuery]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    const res = performGlobalSearch(searchQuery);
    setResults(res);
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard navigation inside search results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSearchOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < results.length ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          handleSelect(selected);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, results, selectedIndex]);

  const handleSelect = (result: SearchResult) => {
    setIsSearchOpen(false);
    onNavigate(result.url);
  };

  if (!isSearchOpen) return null;

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'subject':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'unit':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'topic':
        return <FileText className="w-4 h-4 text-emerald-400" />;
      case 'lab':
        return <Beaker className="w-4 h-4 text-purple-400" />;
      case 'formula':
        return <Sigma className="w-4 h-4 text-amber-400" />;
    }
  };

  const getTypeBadge = (type: SearchResult['type']) => {
    const styles = {
      subject: 'bg-blue-950/80 text-blue-400 border-blue-800/60',
      unit: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60',
      topic: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60',
      lab: 'bg-purple-950/80 text-purple-400 border-purple-800/60',
      formula: 'bg-amber-950/80 text-amber-400 border-amber-800/60',
    };
    return (
      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${styles[type]}`}>
        {type}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subjects, units, topics, formulas, or lab experiments..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {searchQuery.trim() === '' ? (
            <div className="py-12 text-center text-slate-400 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 mx-auto flex items-center justify-center text-cyan-400">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-300">Search BEU 1st Semester Syllabus</p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto pt-2">
                <span className="text-xs text-slate-500">Try searching:</span>
                {['Rank of Matrix', 'Lasers', 'Thevenin Theorem', 'A* Search', 'Pointers in C', 'Newton Rings'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <p className="text-sm font-medium text-slate-300">No results found for "{searchQuery}"</p>
              <p className="text-xs text-slate-500">Check spelling or try a broader engineering keyword.</p>
            </div>
          ) : (
            results.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3.5 group ${
                  selectedIndex === index
                    ? 'bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-transparent border border-cyan-500/40 text-slate-100 shadow-md'
                    : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/80 shrink-0 mt-0.5">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold truncate group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    {getTypeBadge(item.type)}
                  </div>
                  <p className="text-xs text-cyan-400/80 font-medium mb-1 truncate">{item.subtitle}</p>
                  {item.highlightText && (
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.highlightText}
                    </p>
                  )}
                </div>
                <div className="self-center hidden sm:flex opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/70 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">
                <CornerDownLeft className="w-2.5 h-2.5 inline" />
              </kbd> Open
            </span>
          </div>
          <span>Bihar Engineering University • 1st Sem Syllabus Search</span>
        </div>
      </div>
    </div>
  );
};
