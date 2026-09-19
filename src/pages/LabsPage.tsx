import React, { useState } from 'react';
import { 
  Beaker, 
  Search, 
  Code2, 
  Zap, 
  Atom, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';
import { allLabCourses } from '../data';

interface LabsPageProps {
  onNavigate: (url: string) => void;
  initialCourseId?: string;
}

export const LabsPage: React.FC<LabsPageProps> = ({ onNavigate, initialCourseId }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getLabIcon = (code: string) => {
    switch (code) {
      case '100104P':
        return <Atom className="w-5 h-5 text-blue-400" />;
      case '100111P':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case '100112P':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Beaker className="w-5 h-5 text-purple-400" />;
    }
  };

  const coursesToDisplay = selectedCourseId === 'all'
    ? allLabCourses
    : allLabCourses.filter((c) => c.id === selectedCourseId);

  const totalExperiments = allLabCourses.reduce((acc, c) => acc + c.experiments.length, 0);

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-400 text-xs font-mono mb-2">
            <Beaker className="w-3.5 h-3.5" />
            <span>PRACTICAL LAB WORK ({totalExperiments} EXPERIMENTS)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            BEU 1st Semester Laboratories
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Complete experiment procedures, circuit diagrams, C/C++ source code, observation tables, and professor viva voce drills.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 45 lab experiments..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Course Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedCourseId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            selectedCourseId === 'all'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          All 3 Labs ({totalExperiments} Experiments)
        </button>

        {allLabCourses.map((lab) => {
          const active = selectedCourseId === lab.id;
          return (
            <button
              key={lab.id}
              onClick={() => setSelectedCourseId(lab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                active
                  ? 'bg-purple-950 text-purple-300 border border-purple-700'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {getLabIcon(lab.code)}
              <span>{lab.name} ({lab.experiments.length})</span>
            </button>
          );
        })}
      </div>

      {/* Lab Courses & Experiments Grid */}
      <div className="space-y-10">
        {coursesToDisplay.map((labCourse) => {
          const filteredExperiments = labCourse.experiments.filter((exp) => {
            const q = searchQuery.toLowerCase().trim();
            if (!q) return true;
            return (
              exp.title.toLowerCase().includes(q) ||
              exp.objective?.toLowerCase().includes(q) ||
              exp.theory?.toLowerCase().includes(q) ||
              `experiment ${exp.experimentNumber}`.includes(q) ||
              exp.apparatus.some((a) => a.toLowerCase().includes(q))
            );
          });

          if (filteredExperiments.length === 0) return null;

          return (
            <div key={labCourse.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {getLabIcon(labCourse.code)}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {labCourse.name}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Course Code: {labCourse.code} • {labCourse.credits} Credit • {filteredExperiments.length} Experiments
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredExperiments.map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => onNavigate(`/labs/${labCourse.id}/${exp.id}`)}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-lg group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/80">
                          LE-{exp.experimentNumber}
                        </span>
                        {exp.vivaQuestions && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1">
                            <HelpCircle className="w-3 h-3 text-cyan-400" />
                            <span>{exp.vivaQuestions.length} Viva Qs</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                        {exp.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        <strong className="text-slate-300">Aim:</strong> {exp.objective}
                      </p>

                      {/* Apparatus Tags */}
                      {exp.apparatus && exp.apparatus.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {exp.apparatus.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80 truncate max-w-[150px]"
                            >
                              {item}
                            </span>
                          ))}
                          {exp.apparatus.length > 3 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-500">
                              +{exp.apparatus.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">
                        {exp.codeSnippet ? 'Includes C/C++ Code' : 'Procedure & Formula'}
                      </span>
                      <span className="text-xs text-purple-400 group-hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors">
                        <span>Open Lab</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
