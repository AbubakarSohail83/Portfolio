import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com";
import { socialLinks } from "@/utils/constants";

export const ContactMeSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, message } = formData;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // EmailJS Service ID
        "YOUR_TEMPLATE_ID", // EmailJS Template ID
        e.target as HTMLFormElement,
        "YOUR_USER_ID" // EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="p-20 bg-gradient-to-r from-[#f5f5f0] via-[#e6dfc5] to-[#d4c8a1] flex flex-col min-h-screen items-center">
      {/* Personal Info Section */}
      <div className="text-center mb-16">
        <h2 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ab8e6f] to-[#8e5e32]">
          Let's Connect
        </h2>
        <p className="text-2xl text-[#5f4b3a] mt-4">I'm always happy to chat about tech, collaborations, or opportunities!</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-xl">
        <h3 className="text-[30px] font-extrabold text-[#ab8e6f] mb-4 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="p-3 border-2 border-[#c2b79b] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ab8e6f]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="p-3 border-2 border-[#c2b79b] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ab8e6f]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={6}
            className="p-3 border-2 border-[#c2b79b] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ab8e6f]"
            required
          />
          <button
            type="submit"
            className="bg-[#ab8e6f] text-white p-3 rounded-xl font-bold hover:bg-[#8e5e32] transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <p className="text-green-500 mt-4 text-center">Your message has been sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4 text-center">There was an error, please try again later.</p>
          )}
        </form>
      </div>

      {/* Personal Info Section (Name, Email, etc.) */}
      <div className="mt-16 flex justify-center gap-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-[#5f4b3a]">Name</p>
          <p className="text-[#ab8e6f] text-lg">Abubakar Sohail</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-[#5f4b3a]">Email</p>
          <p className="text-[#ab8e6f] text-lg">abubakar.sohail@example.com</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-[#5f4b3a]">Phone</p>
          <p className="text-[#ab8e6f] text-lg">+1 (234) 567-890</p>
        </div>
      </div>
      <button className="px-2 py-1 bg-[#f5f5f0] text-[#5f4b3a] rounded-xl text-2xl cursor-pointer hover:animate-pulse mt-3">See My CV</button>


      {/* Social Media Links */}
      <div className="flex gap-6 mt-10 justify-center">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <Github size={50} className="cursor-pointer hover:text-[#ab8e6f] transition-all duration-300" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={50} className="cursor-pointer hover:text-[#ab8e6f] transition-all duration-300" />
        </a>
        <a href={`mailto:${socialLinks.email}`} target="_blank" rel="noopener noreferrer">
          <Mail size={50} className="cursor-pointer hover:text-[#ab8e6f] transition-all duration-300" />
        </a>
      </div>
      <p className="pt-10">© 2025 Abubakar Sohail. All rights reserved.</p>

    </section>
  );
};
