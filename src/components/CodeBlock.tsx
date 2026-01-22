import { useEffect, useState } from 'react';

const codeLines = [
  { text: 'const saralStack = {', color: 'text-highlight' },
  { text: '  mission: "Simplify Tech",', color: 'text-accent' },
  { text: '  approach: "Client-First",', color: 'text-accent' },
  { text: '  pricing: "Honest & Fair",', color: 'text-accent' },
  { text: '  delivery: "Agile & Fast"', color: 'text-accent' },
  { text: '};', color: 'text-highlight' },
  { text: '', color: '' },
  { text: 'buildYourDream(saralStack);', color: 'text-foreground' },
];

const CodeBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(lineInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-highlight/20 to-accent/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Code window */}
      <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-highlight/80" />
            <div className="w-3 h-3 rounded-full bg-accent/80" />
          </div>
          <span className="ml-4 text-xs text-muted-foreground font-mono">saralstack.config.ts</span>
        </div>
        
        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index < visibleLines
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-muted-foreground mr-4 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={line.color}>{line.text}</span>
              {index === visibleLines - 1 && (
                <span
                  className={`inline-block w-2 h-5 bg-accent ml-1 ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
