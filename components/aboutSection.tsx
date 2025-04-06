import { socialLinks } from "@/utils/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { MoveToNewSection } from "@/widgets/moveToNewSection";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="p-20 bg-gradient-to-r from-[#f5f5f0] via-[#e6dfc5] to-[#d4c8a1] flex min-h-screen min-w-screen">
      <div
        className="flex flex-col items-center gap-10 rounded-xl w-full p-8 border-4 border-[#c2b79b] shadow-lg hover:shadow-2xl transition-all duration-300"
        data-aos="fade-up"
      >
        <h2
          className="text-[60px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ab8e6f] to-[#8e5e32]"
          data-aos="fade-in"
        >
          WHO?
        </h2>
        <p
          className="text-2xl font-extralight text-[#5f4b3a] leading-relaxed"
          data-aos="fade-up" // Trigger fade-up animation
        >
          Hey there! I'm a passionate and endlessly curious{" "}
          <span className="font-extrabold text-[#ab8e6f]">Full Stack Developer</span>, always exploring new technologies and pushing my limits. With 3 years of hands-on experience, I live and breathe the{" "}
          <span className="font-extrabold text-[#ab8e6f]">MERN stack</span>,{" "}
          <span className="font-extrabold text-[#ab8e6f]">Ruby on Rails</span>, and <span className="font-extrabold text-[#ab8e6f]">Next.js</span>—all while constantly seeking out innovative solutions to make the web faster and more engaging.
          <br />
          I specialize in building scalable, high-performance web apps, creating{" "}
          <span className="font-extrabold text-[#ab8e6f]">RESTful</span> and{" "}
          <span className="font-extrabold text-[#ab8e6f]">GraphQL</span> APIs, and mastering cloud platforms like{" "}
          <span className="font-extrabold text-[#ab8e6f]">AWS</span> to deploy seamless, cloud-native experiences. <br />
          When I’m not coding, you’ll find me diving into the latest tech trends, exploring new frameworks, or building some fun UIs. I’m all about collaboration, creativity, and keeping things fun while delivering quality, secure code.
        </p>
        <div className="flex flex-col items-center gap-4 mt-15" data-aos="fade-up">
          <p className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ab8e6f] to-[#8e5e32]">
            Let’s build something amazing together!
          </p>
          <div className="flex justify-center gap-7">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github size={50} className="cursor-pointer" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={50} className="cursor-pointer" />
            </a>
            <a href={socialLinks.gmail}>
              <Mail size={50} className="cursor-pointer" />
            </a>
            {/* <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={50} className="cursor-pointer" />
              </a> */}
          </div>
        </div>
      </div>
    <MoveToNewSection />
    </section>
  );
};
