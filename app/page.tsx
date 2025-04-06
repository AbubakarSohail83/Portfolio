"use client"

import { AboutSection } from "@/components/aboutSection"
import { ContactMeSection } from "@/components/contactMeSection"
import { HeroSection } from "@/components/heroSection"
import ProjectsSection from "@/components/projectsSection"
import SkillsSection from "@/components/skillsSections"
import { SquareMenu } from "lucide-react"

// import { useRef } from "react"
// import Navbar from "@/components/navbar"
// import Hero from "@/components/hero"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Experience from "@/components/experience"
// import Services from "@/components/services"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

export default function Home() {
  // const heroRef = useRef<HTMLDivElement>(null)
  // const skillsRef = useRef<HTMLDivElement>(null)
  // const projectsRef = useRef<HTMLDivElement>(null)
  // const experienceRef = useRef<HTMLDivElement>(null)
  // const servicesRef = useRef<HTMLDivElement>(null)
  // const contactRef = useRef<HTMLDivElement>(null)

  // const sections = {
  //   home: heroRef,
  //   skills: skillsRef,
  //   projects: projectsRef,
  //   experience: experienceRef,
  //   services: servicesRef,
  //   contact: contactRef,
  // }

  return (
    <>
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />

      {/* <Navbar sections={sections} />
      <div ref={heroRef} id="home">
        <Hero />
      </div>
      <div ref={skillsRef} id="skills">
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Footer /> */}
    </main>
          <div title="Click me to see different sections of this portfolio">
          <SquareMenu className="absolute top-5 right-5 size-[40] cursor-pointer hover:animate-pulse" />
        </div>
        </>
  )
}

