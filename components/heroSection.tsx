"use client";

import Link from "next/link";
// import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{ 
          background: 'var(--hero-bg-start)',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Enhanced background decorative blobs with modern positioning */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" 
           style={{ background: 'var(--hero-blob-primary)' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" 
           style={{ background: 'var(--hero-blob-secondary)', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" 
           style={{ background: 'var(--hero-blob-accent)', animationDelay: '4s' }}></div>

      {/* Main content with enhanced typography */}
      <div className="max-w-5xl w-full text-center z-10 relative">
        {/* Status badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass mt-2 mb-8 animate-fade-up animate-once"
             style={{ 
               background: 'var(--hero-badge-bg)', 
               border: '1px solid var(--hero-badge-border)',
               color: 'var(--hero-badge-text)',
               animationDelay: '0.2s'
             }}>
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Available for new opportunities
        </div>

        {/* Profile Picture */}
        <div className="mb-8 animate-fade-up animate-once" style={{ animationDelay: '0.4s' }}>
          <div className="relative inline-block">
            {/* Glow effect behind profile picture */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-orange-500/30 rounded-full blur-2xl scale-110 animate-pulse-glow"></div>
            
          </div>
        </div>

        {/* Enhanced main heading with clean animation */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight animate-fade-up animate-once"
            style={{ color: 'var(--hero-text-primary)', animationDelay: '0.6s' }}>
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Abubakar Sohail
          </span>
        </h1>

        {/* Enhanced subtitle with clean animation */}
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto font-light animate-fade-up animate-once"
           style={{ color: 'var(--hero-text-secondary)', animationDelay: '0.8s' }}>
          Full Stack Software Engineer crafting{" "}
          <span className="font-semibold" style={{ color: 'var(--hero-text-accent)' }}>
            seamless digital experiences
          </span>{" "}
          for the modern world
        </p>

        {/* Enhanced quote section with better visual hierarchy */}
        <div className="relative mb-12 max-w-2xl mx-auto animate-fade-up animate-once" style={{ animationDelay: '1.0s' }}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="text-base font-light italic mb-6" 
             style={{ color: 'var(--hero-text-secondary)' }}>
            &quot;Transforming ideas into elegant solutions, one line of code at a time&quot;
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Enhanced CTA buttons with modern styling */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-up animate-once" style={{ animationDelay: '1.2s' }}>
          <Link
            href="#projects"
            className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-modern hover:shadow-modern-lg font-semibold text-base btn-modern animate-pulse-glow"
          >
            <span className="flex items-center">
              View My Work
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          
          <Link
            href="#contact"
            className="group px-6 py-3 glass text-white border-2 rounded-2xl hover:bg-white/20 transition-all font-semibold text-base btn-modern"
            style={{ 
              borderColor: 'var(--hero-badge-border)',
              color: 'var(--hero-text-primary)'
            }}
          >
            <span className="flex items-center">
              Get in Touch
              <svg className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Tech stack preview with modern cards */}
        <div className="mt-16 animate-fade-up animate-once" style={{ animationDelay: '1.4s' }}>
          <p className="text-sm uppercase tracking-wider mb-6 opacity-80" 
             style={{ color: 'var(--hero-text-secondary)' }}>
            Powered by
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {['React.js', 'Next.js',  'Vercel', 'TypeScript', 'Tailwind'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 glass rounded-xl text-sm font-medium animate-float"
                style={{ 
                  color: 'var(--hero-badge-text)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
