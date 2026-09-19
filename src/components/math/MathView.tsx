import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
    } catch (e) {
      console.error('KaTeX rendering error:', e);
      return `<span class="text-rose-400 font-mono">${math}</span>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div 
        className={`katex-display my-3 p-3.5 bg-slate-900/80 border border-cyan-500/20 rounded-xl overflow-x-auto text-cyan-300 shadow-inner ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span 
      className={`inline-math px-1 py-0.5 rounded text-cyan-300 font-medium ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MathView;
