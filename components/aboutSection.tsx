"use client";

import { socialLinks } from "@/utils/constants";
import { Github, Linkedin, Mail, Code, Zap, Heart } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const highlights = [
    { icon: Code, text: "3+ Years Experience", color: "text-blue-500" },
    { icon: Zap, text: "Full Stack Expertise", color: "text-purple-500" },
    { icon: Heart, text: "Passion for Innovation", color: "text-red-500" }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--about-bg)' }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #f093fb, #f5576c)', animationDelay: '2s' }}></div>

      <div className="max-w-6xl w-full z-10 relative">
        <div
          className="glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-modern-lg"
          style={{ 
            background: 'var(--about-card-bg)',
            border: '1px solid var(--about-card-border)'
          }}
          data-aos="fade-up"
        >
          {/* Header section */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center px-6 py-3 rounded-full mb-6 glass"
              style={{ 
                background: 'var(--about-badge-bg)',
                border: '1px solid var(--about-badge-border)',
                color: 'var(--about-badge-text)'
              }}
              data-aos="fade-in"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              About Me
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
              style={{ color: 'var(--about-heading-text)' }}
              data-aos="fade-in"
              data-aos-delay="100"
            >
              Who Am I?
            </h2>

            {/* Highlight cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 glass rounded-2xl shadow-modern"
                  style={{ 
                    background: 'var(--about-card-bg)',
                    border: '1px solid var(--about-card-border)'
                  }}
                >
                  <item.icon className={`w-5 h-5 mr-2 ${item.color}`} />
                  <span className="text-sm font-medium" style={{ color: 'var(--about-body-text)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main content with improved layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6" data-aos="fade-right" data-aos-delay="300">
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--about-body-text)' }}
              >
                I&apos;m a passionate and endlessly curious{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Engineer
                </span>
                , always exploring new technologies and pushing my limits. With around 3
                years of hands-on experience, I have honed my skills in the{" "}
                <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">MERN stack</span>,{" "}
                <span className="font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Ruby on Rails</span>,
                and <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Next.js</span>
                —all while constantly seeking out innovative solutions to make the web
                faster and more engaging.
              </p>

              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--about-body-text)' }}
              >
                I specialize in building scalable, high-performance web apps,
                creating{" "}
                <span className="font-bold text-orange-600">RESTful</span> and{" "}
                <span className="font-bold text-pink-600">GraphQL</span> APIs,
                and mastering cloud platforms like{" "}
                <span className="font-bold text-yellow-600">AWS</span> to deploy
                seamless, cloud-native experiences.
              </p>

              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--about-body-text)' }}
              >
                When I&apos;m not coding, you&apos;ll find me diving into the latest tech
                trends, exploring new frameworks, or building some fun UIs. I&apos;m all
                about collaboration, creativity, and keeping things fun while
                delivering quality, secure code.
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="text-center" data-aos="fade-left" data-aos-delay="400">
              <div className="p-8 glass rounded-3xl shadow-modern">
                <p className="font-bold text-xl mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Let&apos;s build something amazing together!
                </p>
                
                {/* Social links with enhanced styling */}
                <div className="flex justify-center gap-6 mb-8">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow group"
                    style={{ color: 'var(--social-icon)' }}
                  >
                    <Github size={32} className="group-hover:text-orange-500 transition-colors" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow group"
                    style={{ color: 'var(--social-icon)' }}
                  >
                    <Linkedin size={32} className="group-hover:text-orange-500 transition-colors" />
                  </a>
                  <a
                    href={socialLinks.gmail}
                    className="p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow group"
                    style={{ color: 'var(--social-icon)' }}
                  >
                    <Mail size={32} className="group-hover:text-orange-500 transition-colors" />
                  </a>
                </div>

                {/* Skills preview */}
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-wider opacity-70" 
                     style={{ color: 'var(--about-body-text)' }}>
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Next.js', 'AWS', 'Ruby on Rails'].map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full glass animate-float"
                        style={{ 
                          background: 'var(--about-badge-bg)',
                          color: 'var(--about-badge-text)',
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
