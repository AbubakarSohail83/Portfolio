"use client";

import { MoveToNewSection } from "@/widgets/moveToNewSection";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[var(--hero-bg-start)] to-[var(--hero-bg-end)] flex bg-[var(--about-card-bg)] items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--hero-blob-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[var(--hero-blob-indigo)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-40 w-64 h-64 bg-[var(--hero-blob-purple)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl w-full text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--hero-text-primary)] leading-tight animate-fade-up animate-once">
          Hi, I&apos;m{" "}
          <span className="text-[var(--hero-text-accent)]">
            Abubakar Sohail
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Full Stack Developer specializing in seamless software solutions for
          the modern world
        </p>

        <div className="relative mb-12 max-w-lg mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <p className="text-lg text-gray-500 dark:text-gray-400 italic my-6 animate-fade-up animate-delay-200">
          &quot;Simplifying complexity, one line of code at a time&quot;
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-up animate-delay-300">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900 font-medium"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 text-white bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <MoveToNewSection />
    </section>
  );
};
