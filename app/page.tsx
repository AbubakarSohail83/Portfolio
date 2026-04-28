import { HeroSection } from "@/components/heroSection";
import { AboutSection } from "@/components/aboutSection";
import ExperienceSection from "@/components/experienceSection";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSections";
import { BlogSection } from "@/components/blogSection";
import { ContactMeSection } from "@/components/contactMeSection";

/* SEO: Main page component with semantic HTML structure
 * - Uses <main> element for primary content
 * - Sections are logically ordered for crawlers
 * - Internal linking flows: Hero → About → Experience → Projects → Skills → Contact
 */
export default function Home() {
  return (
    <main>
      {/* SEO: Hero contains H1 (only one per page) */}
      <HeroSection />
      
      {/* SEO: About section with personal branding keywords */}
      <AboutSection />
      
      {/* SEO: Experience section targeting recruiter searches */}
      <ExperienceSection />
      
      {/* SEO: Projects showcase technical ability */}
      <ProjectsSection />
      
      {/* SEO: Skills section with technology keywords */}
      <SkillsSection />

      {/* SEO: Blog section for technical writing and engineering notes */}
      <BlogSection />
      
      {/* SEO: Contact section with conversion focus */}
      <ContactMeSection />
    </main>
  );
}
