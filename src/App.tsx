import { useState, useEffect } from 'react';
import { ProgressProvider } from './context/ProgressContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { SearchProvider } from './context/SearchContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/search/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { SubjectsPage } from './pages/SubjectsPage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { FormulaSheetPage } from './pages/FormulaSheetPage';
import { QuickRevisionPage } from './pages/QuickRevisionPage';
import { LabsPage } from './pages/LabsPage';
import { LabDetailPage } from './pages/LabDetailPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { SettingsPage } from './pages/SettingsPage';

export function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.hash ? window.location.hash.replace('#', '') : '/';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash ? window.location.hash.replace('#', '') : '/';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (url: string) => {
    window.location.hash = url;
    setCurrentPath(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  const renderCurrentPage = () => {
    // 1. Topic Detail: /subject/:subjectId/topic/:topicId
    const topicMatch = currentPath.match(/^\/subject\/([^/]+)\/topic\/([^/]+)/);
    if (topicMatch) {
      return <TopicDetailPage subjectId={topicMatch[1]} topicId={topicMatch[2]} onNavigate={navigate} />;
    }

    // 2. Subject Detail (with optional unit): /subject/:subjectId
    const subjectMatch = currentPath.match(/^\/subject\/([^/]+)/);
    if (subjectMatch) {
      return <SubjectDetailPage subjectId={subjectMatch[1]} onNavigate={navigate} />;
    }

    // 3. Lab Detail: /labs/:courseId/:experimentId
    const labExpMatch = currentPath.match(/^\/labs\/([^/]+)\/([^/]+)/);
    if (labExpMatch) {
      return <LabDetailPage courseId={labExpMatch[1]} experimentId={labExpMatch[2]} onNavigate={navigate} />;
    }

    // 4. Labs List: /labs/:courseId or /labs
    const labsMatch = currentPath.match(/^\/labs(?:\/([^/]+))?/);
    if (labsMatch) {
      return <LabsPage onNavigate={navigate} initialCourseId={labsMatch[1]} />;
    }

    // 5. Formula Sheet: /formulas
    if (currentPath.startsWith('/formulas')) {
      const searchParams = new URLSearchParams(currentPath.split('?')[1] || '');
      const subjectFilter = searchParams.get('subject') || undefined;
      return <FormulaSheetPage onNavigate={navigate} initialSubjectFilter={subjectFilter} />;
    }

    // 6. Quick Revision: /revision
    if (currentPath.startsWith('/revision')) {
      const searchParams = new URLSearchParams(currentPath.split('?')[1] || '');
      const subjectFilter = searchParams.get('subject') || undefined;
      return <QuickRevisionPage onNavigate={navigate} initialSubjectFilter={subjectFilter} />;
    }

    // 7. Dashboard: /dashboard
    if (currentPath === '/dashboard') {
      return <DashboardPage onNavigate={navigate} />;
    }

    // 8. All Subjects: /subjects
    if (currentPath === '/subjects') {
      return <SubjectsPage onNavigate={navigate} />;
    }

    // 9. Bookmarks: /bookmarks
    if (currentPath === '/bookmarks') {
      return <BookmarksPage onNavigate={navigate} />;
    }

    // 10. Settings: /settings
    if (currentPath === '/settings') {
      return <SettingsPage />;
    }

    // Default Home Page
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navbar */}
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onNavigate={navigate}
        currentPath={currentPath}
      />

      {/* Main Workspace with Fixed Sidebar & Responsive Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={navigate}
          currentPath={currentPath}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 min-w-0 lg:pl-72 px-4 sm:px-6 lg:px-8 pb-20 lg:pb-12">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav onNavigate={navigate} currentPath={currentPath} />

      {/* Footer */}
      <div className="lg:pl-72">
        <Footer onNavigate={navigate} />
      </div>

      {/* Global Search Modal */}
      <SearchModal onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <BookmarkProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </BookmarkProvider>
    </ProgressProvider>
  );
}
