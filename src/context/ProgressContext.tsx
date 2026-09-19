import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface ProgressContextType {
  completedTopicIds: Set<string>;
  inProgressTopicIds: Set<string>;
  completedLabIds: Set<string>;
  recentTopicIds: string[];
  markTopicCompleted: (topicId: string) => void;
  markTopicInProgress: (topicId: string) => void;
  toggleTopicCompleted: (topicId: string) => void;
  getTopicStatus: (topicId: string) => 'completed' | 'in_progress' | 'not_started';
  toggleLabCompleted: (labId: string) => void;
  isLabCompleted: (labId: string) => boolean;
  addRecentlyViewed: (topicId: string) => void;
  getSubjectProgress: (topicIds: string[]) => number;
  resetAllProgress: () => void;
  stats: {
    completedTopicsCount: number;
    inProgressTopicsCount: number;
    completedLabsCount: number;
  };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'semester_point_progress_v1';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedTopicIds, setCompletedTopicIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_completed_topics`);
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [inProgressTopicIds, setInProgressTopicIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_inprogress_topics`);
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [completedLabIds, setCompletedLabIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_completed_labs`);
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [recentTopicIds, setRecentTopicIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_recent_topics`);
      return saved ? JSON.parse(saved) : ['math-u1-t1', 'ai-u2-t3', 'phy-u2-t3', 'cf-u1-t6'];
    } catch {
      return ['math-u1-t1', 'ai-u2-t3'];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_completed_topics`, JSON.stringify(Array.from(completedTopicIds)));
    } catch (e) {
      console.error(e);
    }
  }, [completedTopicIds]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_inprogress_topics`, JSON.stringify(Array.from(inProgressTopicIds)));
    } catch (e) {
      console.error(e);
    }
  }, [inProgressTopicIds]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_completed_labs`, JSON.stringify(Array.from(completedLabIds)));
    } catch (e) {
      console.error(e);
    }
  }, [completedLabIds]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_recent_topics`, JSON.stringify(recentTopicIds));
    } catch (e) {
      console.error(e);
    }
  }, [recentTopicIds]);

  const markTopicCompleted = useCallback((topicId: string) => {
    setCompletedTopicIds(prev => {
      if (prev.has(topicId)) return prev;
      const next = new Set(prev);
      next.add(topicId);
      return next;
    });
    setInProgressTopicIds(prev => {
      if (!prev.has(topicId)) return prev;
      const next = new Set(prev);
      next.delete(topicId);
      return next;
    });
  }, []);

  const markTopicInProgress = useCallback((topicId: string) => {
    setCompletedTopicIds(completed => {
      if (!completed.has(topicId)) {
        setInProgressTopicIds(prev => {
          if (prev.has(topicId)) return prev;
          const next = new Set(prev);
          next.add(topicId);
          return next;
        });
      }
      return completed;
    });
  }, []);

  const toggleTopicCompleted = useCallback((topicId: string) => {
    setCompletedTopicIds(prev => {
      if (prev.has(topicId)) {
        const next = new Set(prev);
        next.delete(topicId);
        setInProgressTopicIds(inProg => {
          if (inProg.has(topicId)) return inProg;
          const inProgNext = new Set(inProg);
          inProgNext.add(topicId);
          return inProgNext;
        });
        return next;
      } else {
        const next = new Set(prev);
        next.add(topicId);
        setInProgressTopicIds(inProg => {
          if (!inProg.has(topicId)) return inProg;
          const inProgNext = new Set(inProg);
          inProgNext.delete(topicId);
          return inProgNext;
        });
        return next;
      }
    });
  }, []);

  const getTopicStatus = useCallback((topicId: string): 'completed' | 'in_progress' | 'not_started' => {
    if (completedTopicIds.has(topicId)) return 'completed';
    if (inProgressTopicIds.has(topicId)) return 'in_progress';
    return 'not_started';
  }, [completedTopicIds, inProgressTopicIds]);

  const toggleLabCompleted = useCallback((labId: string) => {
    setCompletedLabIds(prev => {
      const next = new Set(prev);
      if (next.has(labId)) {
        next.delete(labId);
      } else {
        next.add(labId);
      }
      return next;
    });
  }, []);

  const isLabCompleted = useCallback((labId: string): boolean => {
    return completedLabIds.has(labId);
  }, [completedLabIds]);

  const addRecentlyViewed = useCallback((topicId: string) => {
    setRecentTopicIds(prev => {
      if (prev[0] === topicId) return prev;
      const filtered = prev.filter(id => id !== topicId);
      return [topicId, ...filtered].slice(0, 10);
    });
    markTopicInProgress(topicId);
  }, [markTopicInProgress]);

  const getSubjectProgress = useCallback((topicIds: string[]): number => {
    if (!topicIds.length) return 0;
    const completed = topicIds.filter(id => completedTopicIds.has(id)).length;
    return Math.round((completed / topicIds.length) * 100);
  }, [completedTopicIds]);

  const resetAllProgress = useCallback(() => {
    setCompletedTopicIds(new Set<string>());
    setInProgressTopicIds(new Set<string>());
    setCompletedLabIds(new Set<string>());
    setRecentTopicIds([]);
    try {
      localStorage.removeItem(`${STORAGE_KEY}_completed_topics`);
      localStorage.removeItem(`${STORAGE_KEY}_inprogress_topics`);
      localStorage.removeItem(`${STORAGE_KEY}_completed_labs`);
      localStorage.removeItem(`${STORAGE_KEY}_recent_topics`);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const stats = useMemo(() => ({
    completedTopicsCount: completedTopicIds.size,
    inProgressTopicsCount: inProgressTopicIds.size,
    completedLabsCount: completedLabIds.size,
  }), [completedTopicIds.size, inProgressTopicIds.size, completedLabIds.size]);

  const contextValue = useMemo(() => ({
    completedTopicIds,
    inProgressTopicIds,
    completedLabIds,
    recentTopicIds,
    markTopicCompleted,
    markTopicInProgress,
    toggleTopicCompleted,
    getTopicStatus,
    toggleLabCompleted,
    isLabCompleted,
    addRecentlyViewed,
    getSubjectProgress,
    resetAllProgress,
    stats,
  }), [
    completedTopicIds,
    inProgressTopicIds,
    completedLabIds,
    recentTopicIds,
    markTopicCompleted,
    markTopicInProgress,
    toggleTopicCompleted,
    getTopicStatus,
    toggleLabCompleted,
    isLabCompleted,
    addRecentlyViewed,
    getSubjectProgress,
    resetAllProgress,
    stats,
  ]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
};
