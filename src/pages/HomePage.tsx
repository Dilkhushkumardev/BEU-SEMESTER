import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Beaker, 
  Sigma, 
  Zap, 
  Calculator, 
  Atom, 
  Binary, 
  ShieldCheck, 
  HeartHandshake,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { allSubjects, allLabCourses, findTopicGlobal } from '../data';
import { useProgress } from '../context/ProgressContext';
import { useSearch } from '../context/SearchContext';

interface HomePageProps {
  onNavigate: (url: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { completedTopicIds, recentTopicIds, stats } = useProgress();
  const { setIsSearchOpen } = useSearch();

  const getSubjectIcon = (code: string) => {
    switch (code) {
      case '100102':
        return <Calculator className="w-5 h-5 text-cyan-400" />;
      case '100104':
        return <Atom className="w-5 h-5 text-blue-400" />;
      case '100111':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case '100105':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case '100108':
        return <Binary className="w-5 h-5 text-purple-400" />;
      case '100110':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case '100109':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  const totalSyllabusTopics = 56;
  const overallPercentage = Math.min(100, Math.round((stats.completedTopicsCount / totalSyllabusTopics) * 100));

  const continueTopicInfo = recentTopicIds.length > 0 ? findTopicGlobal(recentTopicIds[0]) : null;

  return (
    <div className="space-y-16 py-6 animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-6 sm:p-10 lg:p-14 shadow-2xl">
        {/* Background ambient lighting */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Bihar Engineering University (BEU) • B.Tech 1st Semester (2026–2030)</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Master Every Topic in Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              1st Semester Syllabus
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            The definitive engineering learning companion for <strong>CSE &amp; Group-A</strong> branches. Complete with 10-section structured theory, KaTeX formulas, 45 practical labs, and interactive AI visual diagrams.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate(continueTopicInfo ? `/subject/${continueTopicInfo.subject.id}/topic/${continueTopicInfo.topic.id}` : '/subjects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-slate-950 font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{continueTopicInfo ? 'Resume Learning' : 'Start Learning Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Explore Ctrl+K Search</span>
            </button>

            <button
              onClick={() => onNavigate('/formulas')}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800 text-slate-300 font-medium text-sm transition-all"
            >
              <Sigma className="w-4 h-4 text-amber-400" />
              <span>Formula Bank</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-white">7</div>
              <div className="text-xs text-slate-400">Theory Courses</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">35</div>
              <div className="text-xs text-slate-400">Total Units (1–5)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">45</div>
              <div className="text-xs text-slate-400">Practical Labs &amp; Viva</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400">{overallPercentage}%</div>
              <div className="text-xs text-slate-400">Your Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Learning Banner (if in progress) */}
      {continueTopicInfo && (
        <section className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-500/30 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Jump Back In</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400">{continueTopicInfo.subject.name}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">{continueTopicInfo.topic.title}</h3>
            </div>
          </div>
          <button
            onClick={() => onNavigate(`/subject/${continueTopicInfo.subject.id}/topic/${continueTopicInfo.topic.id}`)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0"
          >
            <span>Continue Topic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}

      {/* Theory Courses Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <span>Theory Courses (7 Subjects)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete semester syllabus strictly following the official Bihar Engineering University credit framework.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/subjects')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allSubjects.map((subject) => {
            const totalTopics = subject.units.reduce((acc, u) => acc + u.topics.length, 0);
            const completedTopics = subject.units.reduce(
              (acc, u) => acc + u.topics.filter((t) => completedTopicIds.has(t.id)).length,
              0
            );
            const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

            return (
              <div
                key={subject.id}
                onClick={() => onNavigate(`/subject/${subject.id}`)}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-5 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {getSubjectIcon(subject.code)}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Code: {subject.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {subject.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{subject.units.length} Units • {subject.credits} Credits</span>
                    <span className="font-mono text-cyan-400 font-medium">{progress}% Complete</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Labs Showcase */}
      <section className="rounded-3xl bg-gradient-to-br from-purple-950/20 via-slate-900 to-slate-950 border border-purple-800/30 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/50 text-purple-300 text-xs font-medium mb-2">
              <Beaker className="w-3.5 h-3.5" />
              <span>45 Practical Lab Experiments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hands-On Engineering Laboratories
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Complete observation tables, step-by-step circuit procedures, full C/C++ source code, and comprehensive viva voce drills for all 3 lab courses.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/labs')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition-colors self-start sm:self-auto"
          >
            <span>Explore All 45 Labs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allLabCourses.map((lab) => (
            <div
              key={lab.id}
              onClick={() => onNavigate(`/labs`)}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  {lab.code}
                </span>
                <span className="text-xs text-purple-400 font-semibold">{lab.experiments.length} Experiments</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                {lab.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">{lab.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10-Section Structured Topic Engine Feature Banner */}
      <section className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARNING FRAMEWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            10-Section Structured Topic Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Every single syllabus topic is organized into 10 structured sections engineered to maximize retention and exam scores.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { num: '01', title: 'Quick Definition', desc: 'Precise 2-line standard definition' },
            { num: '02', title: 'Why It Matters', desc: 'Practical engineering importance' },
            { num: '03', title: 'Core Theory', desc: 'Detailed concepts & derivations' },
            { num: '04', title: 'KaTeX Formulas', desc: 'Mathematical formulations' },
            { num: '05', title: 'Solved Examples', desc: 'Step-by-step numericals' },
            { num: '06', title: 'Engg Applications', desc: 'Real-world industrial use' },
            { num: '07', title: 'Common Mistakes', desc: 'Pitfalls to avoid in exams' },
            { num: '08', title: 'Quick Revision', desc: 'Summary & memory hooks' },
            { num: '09', title: 'BEU Exam Focus', desc: 'Expected questions & weightage' },
            { num: '10', title: 'AI Visual Diagram', desc: 'Interactive dark SVG schematic' },
          ].map((item) => (
            <div key={item.num} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400">{item.num}</span>
              <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
              <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
