import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  bookmarkedTopicIds: Set<string>;
  bookmarkedFormulaIds: Set<string>;
  bookmarkedLabIds: Set<string>;
  toggleBookmarkTopic: (topicId: string) => void;
  isTopicBookmarked: (topicId: string) => boolean;
  toggleBookmarkFormula: (formulaId: string) => void;
  isFormulaBookmarked: (formulaId: string) => boolean;
  toggleBookmarkLab: (labId: string) => void;
  isLabBookmarked: (labId: string) => boolean;
  totalBookmarksCount: number;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const STORAGE_KEY = 'semester_point_bookmarks_v1';

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedTopicIds, setBookmarkedTopicIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_topics`);
      return saved ? new Set(JSON.parse(saved)) : new Set(['math-u1-t3', 'ai-u2-t3', 'phy-u2-t3', 'cf-u1-t6']);
    } catch {
      return new Set(['math-u1-t3', 'ai-u2-t3']);
    }
  });

  const [bookmarkedFormulaIds, setBookmarkedFormulaIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_formulas`);
      return saved ? new Set(JSON.parse(saved)) : new Set(['math-ch-1', 'phy-tir-1', 'ee-poynting-1']);
    } catch {
      return new Set<string>();
    }
  });

  const [bookmarkedLabIds, setBookmarkedLabIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_labs`);
      return saved ? new Set(JSON.parse(saved)) : new Set(['phy-lab-le2', 'pps-lab-le3']);
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_topics`, JSON.stringify(Array.from(bookmarkedTopicIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedTopicIds]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_formulas`, JSON.stringify(Array.from(bookmarkedFormulaIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedFormulaIds]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_labs`, JSON.stringify(Array.from(bookmarkedLabIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedLabIds]);

  const toggleBookmarkTopic = (topicId: string) => {
    setBookmarkedTopicIds(prev => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const isTopicBookmarked = (topicId: string): boolean => {
    return bookmarkedTopicIds.has(topicId);
  };

  const toggleBookmarkFormula = (formulaId: string) => {
    setBookmarkedFormulaIds(prev => {
      const next = new Set(prev);
      if (next.has(formulaId)) {
        next.delete(formulaId);
      } else {
        next.add(formulaId);
      }
      return next;
    });
  };

  const isFormulaBookmarked = (formulaId: string): boolean => {
    return bookmarkedFormulaIds.has(formulaId);
  };

  const toggleBookmarkLab = (labId: string) => {
    setBookmarkedLabIds(prev => {
      const next = new Set(prev);
      if (next.has(labId)) {
        next.delete(labId);
      } else {
        next.add(labId);
      }
      return next;
    });
  };

  const isLabBookmarked = (labId: string): boolean => {
    return bookmarkedLabIds.has(labId);
  };

  const totalBookmarksCount = bookmarkedTopicIds.size + bookmarkedFormulaIds.size + bookmarkedLabIds.size;

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedTopicIds,
        bookmarkedFormulaIds,
        bookmarkedLabIds,
        toggleBookmarkTopic,
        isTopicBookmarked,
        toggleBookmarkFormula,
        isFormulaBookmarked,
        toggleBookmarkLab,
        isLabBookmarked,
        totalBookmarksCount,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error('useBookmarks must be used within a BookmarkProvider');
  return context;
};
