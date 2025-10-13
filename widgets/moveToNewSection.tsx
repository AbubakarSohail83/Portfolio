import { ChevronDown } from "lucide-react";

export const MoveToNewSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group animate-fade-up animate-delay-500 z-20"
      onClick={scrollToNextSection}
    >
      {/* Enhanced scroll indicator */}
      <div className="flex flex-col items-center">
        {/* Text label */}
        <p className="text-sm font-medium mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
           style={{ color: 'var(--hero-text-secondary)' }}>
          Scroll Down
        </p>
        
        {/* Modern scroll arrow container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Arrow container */}
          <div className="relative p-3 glass rounded-full shadow-modern group-hover:shadow-modern-lg transition-all duration-300 group-hover:scale-110"
               style={{
                 background: 'var(--hero-badge-bg)',
                 border: '1px solid var(--hero-badge-border)'
               }}>
            <ChevronDown 
              size={20} 
              className="animate-bounce text-blue-400 group-hover:text-purple-400 transition-colors duration-300" 
            />
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="flex flex-col items-center mt-2 space-y-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-1 h-1 rounded-full bg-gradient-to-b from-blue-400 to-purple-500 opacity-60 animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
