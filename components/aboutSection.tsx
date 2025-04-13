"use client";

import { socialLinks } from "@/utils/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveToNewSection } from "@/widgets/moveToNewSection";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--about-bg-start)] to-[var(--about-bg-end)] flex min-h-screen min-w-screen items-center justify-center">
      <div
        className="flex flex-col items-center gap-10 rounded-2xl w-full max-w-5xl p-8 border border-[var(--about-border)] bg-[var(--about-card-bg)] backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
        data-aos="fade-up"
      >
        <span
          className="inline-block px-4 py-2 rounded-full bg-[var(--about-badge-bg)] text-[var(--about-badge-text)] font-medium text-sm mb-2"
          data-aos="fade-in"
        >
          About Me
        </span>

        <h2
          className="text-5xl font-bold text-[var(--about-heading-text)]"
          data-aos="fade-in"
        >
          Who Am I?
        </h2>

        <p
          className="text-lg md:text-xl text-[var(--about-body-text)] leading-relaxed text-center max-w-3xl"
          data-aos="fade-up"
        >
          Hey there! I&apos;m a passionate and endlessly curious{" "}
          <span className="font-bold text-[var(--accent)]">
            Full Stack Developer
          </span>
          , always exploring new technologies and pushing my limits. With around 3
          years of hands-on experience, I live and breathe the{" "}
          <span className="font-bold text-[var(--accent)]">MERN stack</span>,{" "}
          <span className="font-bold text-[var(--accent)]">Ruby on Rails</span>,
          and <span className="font-bold text-[var(--accent)]">Next.js</span>
          —all while constantly seeking out innovative solutions to make the web
          faster and more engaging.
          <br />
          <br />I specialize in building scalable, high-performance web apps,
          creating{" "}
          <span className="font-bold text-[var(--accent)]">
            RESTful
          </span> and{" "}
          <span className="font-bold text-[var(--accent)]">GraphQL</span> APIs,
          and mastering cloud platforms like{" "}
          <span className="font-bold text-[var(--accent)]">AWS</span> to deploy
          seamless, cloud-native experiences.
          <br />
          <br />
          When I&apos;m not coding, you&apos;ll find me diving into the latest tech
          trends, exploring new frameworks, or building some fun UIs. I&apos;m all
          about collaboration, creativity, and keeping things fun while
          delivering quality, secure code.
        </p>

        <div
          className="flex flex-col items-center gap-4 mt-4"
          data-aos="fade-up"
        >
          <p className="font-bold text-lg text-[var(--accent)]">
            Let&apos;s build something amazing together!
          </p>
          <div className="flex justify-center gap-7">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--social-icon)] hover:text-[var(--accent)] transition-colors"
            >
              <Github size={36} className="cursor-pointer" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--social-icon)] hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin size={36} className="cursor-pointer" />
            </a>
            <a
              href={socialLinks.gmail}
              className="text-[var(--social-icon)] hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={36} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <MoveToNewSection />
    </section>
  );
};
