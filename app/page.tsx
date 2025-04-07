import { AboutSection } from "@/components/aboutSection";
import { ContactMeSection } from "@/components/contactMeSection";
import { HeroSection } from "@/components/heroSection";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
  );
}
