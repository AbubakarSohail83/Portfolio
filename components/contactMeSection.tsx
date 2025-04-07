"use client";

import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { socialLinks } from "@/utils/constants";

export const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state to true when the request starts

    // Send POST request to your backend API
    fetch('https://abubakar-portfolio-backend-b8dc0575d853.herokuapp.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data in the request body
    })
        .then((response) => {
            if (response.ok) {
                setSuccess(true);   // Set success to true if the response is successful
                setError(false);    // Set error to false
                setFormData({ name: "", email: "", message: "" }); // Reset the form fields
            } else {
                throw new Error("Failed to send the message"); // Throw error if response is not ok
            }
        })
        .catch(() => {
            setSuccess(false);   // Set success to false if an error occurs
            setError(true);      // Set error to true
        })
        .finally(() => {
            setIsLoading(false); // Set loading state to false once request is done
        });
};

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-br from-[var(--contact-bg-start)] to-[var(--contact-bg-end)] px-6 py-20 md:px-20 flex flex-col items-center justify-center"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Heading */}
      <div className="text-center z-10 mb-12 animate-fade-up animate-once">
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--contact-heading-text)]">
          Let&apos;s <span className="">Connect</span>
        </h2>
        <p className="text-xl mt-4 text-[var(--contact-text)] max-w-xl mx-auto">
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-[var(--contact-card-bg-dark)] rounded-2xl shadow-xl p-8 md:p-12 z-10 animate-fade-up animate-delay-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-100 text-black border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--contact-btn-bg)] dark:focus:ring-[var(--contact-btn-bg)]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="p-4 rounded-lg text-black bg-gray-100 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--contact-btn-bg)] dark:focus:ring-[var(--contact-btn-bg)]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg bg-gray-100 text-black border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--contact-btn-bg)] dark:focus:ring-[var(--contact-btn-bg)]"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] font-semibold py-3 rounded-lg hover:bg-[var(--contact-btn-hover)] transition-all shadow-lg dark:shadow-blue-900"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <p className="text-green-500 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center mt-2">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>

      {/* Personal Details & Social Links */}
      <div className="mt-30 flex flex-col gap-10 text-center z-10 animate-fade-up animate-delay-200">
        {/* Social Links */}
        <nav className="mt-4 flex justify-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              size={32}
              className="hover:text-[var(--contact-text-accent)] dark:hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              size={32}
              className="hover:text-[var(--contact-text-accent)] dark:hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail
              size={32}
              className="hover:text-[var(--contact-text-accent)] dark:hover:text-blue-400 transition-colors"
            />
          </a>
        </nav>

        {/* CV Button */}
        <a href="/AbubakarSohailResume.pdf" download className="inline-block">
          <button className="px-7 cursor-pointer bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] font-semibold py-3 rounded-lg hover:bg-[var(--contact-btn-hover)] transition-all shadow-lg dark:shadow-blue-900">
            See My CV
          </button>
        </a>

        {/* Contact Info */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-center gap-10 text-[var(--contact-text)]">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-[var(--contact-text-accent)]">
                abubakarsohail83@gmail.com
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-[var(--contact-text-accent)]">
                +92 321 8825349
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-500">
          © 2025 Abubakar Sohail. All rights reserved.
        </p>
      </div>
    </section>
  );
};
