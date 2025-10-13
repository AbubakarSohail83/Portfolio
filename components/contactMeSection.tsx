"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, Download, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/utils/constants";
import { ReCaptcha } from "@/widgets/recaptcha";

export const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

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
    
    if (!isVerified) {
      setRecaptchaError(true);
      return;
    }

    setIsLoading(true);
    setRecaptchaError(false);

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (response.ok) {
                setSuccess(true);
                setError(false);
                setFormData({ name: "", email: "", message: "" });
                setIsVerified(false);
            } else {
                throw new Error("Failed to send the message");
            }
        })
        .catch(() => {
            setSuccess(false);
            setError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--contact-bg)' }}
      />
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-float"
           style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full filter blur-3xl opacity-30 animate-float"
           style={{ background: 'linear-gradient(45deg, #f093fb, #f5576c)', animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #ffecd2, #fcb69f)', animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl w-full z-10 relative">
        {/* Enhanced header */}
        <div className="text-center mb-16 animate-fade-up animate-once">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full mb-8 glass"
            style={{ 
              background: 'var(--hero-badge-bg)',
              border: '1px solid var(--hero-badge-border)',
              color: 'var(--hero-badge-text)'
            }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            Get In Touch
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--contact-heading-text)' }}>
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
             style={{ color: 'var(--contact-text)' }}>
            Whether you have a question, want to discuss a project, or just want to say hi, 
            I&apos;d love to hear from you!
          </p>
        </div>

        {/* Main content grid - mobile responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start w-full max-w-7xl">
          {/* Enhanced contact form */}
          <div className="animate-fade-up animate-delay-100">
            <div 
              className="glass rounded-3xl p-8 md:p-10 shadow-modern-lg"
              style={{ 
                background: 'var(--contact-form-bg)',
                border: '1px solid var(--contact-form-border)'
              }}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3"
                    style={{ color: 'var(--contact-text)' }}>
                  Send me a message
                </h3>
                <p className="opacity-90"
                   style={{ color: 'var(--contact-text)' }}>
                  I typically respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-90"
                           style={{ color: 'var(--contact-text)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full p-3 sm:p-4 rounded-2xl glass border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder-gray-400 text-sm sm:text-base"
                      style={{ 
                        background: 'var(--contact-input-bg)',
                        color: 'var(--contact-input-text)',
                        border: '1px solid var(--contact-input-border)'
                      }}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-90"
                           style={{ color: 'var(--contact-text)' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full p-3 sm:p-4 rounded-2xl glass border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder-gray-400 text-sm sm:text-base"
                      style={{ 
                        background: 'var(--contact-input-bg)',
                        color: 'var(--contact-input-text)',
                        border: '1px solid var(--contact-input-border)'
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-90"
                         style={{ color: 'var(--contact-text)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="w-full p-3 sm:p-4 rounded-2xl glass border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder-gray-400 resize-none text-sm sm:text-base"
                    style={{ 
                      background: 'var(--contact-input-bg)',
                      color: 'var(--contact-input-text)',
                      border: '1px solid var(--contact-input-border)'
                    }}
                    required
                  />
                </div>

                <ReCaptcha 
                  setIsVerified={setIsVerified} 
                  error={recaptchaError}
                  setError={setRecaptchaError}
                />

                <button
                  type="submit"
                  disabled={!isVerified || isLoading}
                  className="group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all shadow-modern hover:shadow-modern-lg disabled:opacity-50 disabled:cursor-not-allowed btn-modern flex items-center justify-center text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                {success && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                    <p className="text-green-400 text-center font-medium">
                      ✅ Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
                    <p className="text-red-400 text-center font-medium">
                      ❌ Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Enhanced contact info and links */}
          <div className="space-y-8 animate-fade-up animate-delay-200">
            {/* Contact information */}
            <div 
              className="glass rounded-3xl p-8 shadow-modern-lg"
              style={{ 
                background: 'var(--contact-card-bg)',
                border: '1px solid var(--contact-card-border)'
              }}
            >
              <h3 className="text-xl font-bold mb-6"
                  style={{ color: 'var(--contact-text)' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mr-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70" style={{ color: 'var(--contact-text)' }}>
                      Email
                    </p>
                    <p className="font-semibold" style={{ color: 'var(--contact-text-accent)' }}>
                      abubakarsohail83@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl mr-4">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70" style={{ color: 'var(--contact-text)' }}>
                      Phone
                    </p>
                    <p className="font-semibold" style={{ color: 'var(--contact-text-accent)' }}>
                      +92 321 8825349
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl mr-4">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70" style={{ color: 'var(--contact-text)' }}>
                      Location
                    </p>
                    <p className="font-semibold" style={{ color: 'var(--contact-text-accent)' }}>
                      Pakistan | United Kingdom | Available Globally (Remote)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div 
              className="glass rounded-3xl p-8 shadow-modern-lg"
              style={{ 
                background: 'var(--contact-card-bg)',
                border: '1px solid var(--contact-card-border)'
              }}
            >
              <h3 className="text-xl font-bold mb-6"
                  style={{ color: 'var(--contact-text)' }}>
                Connect with me
              </h3>
              
              <div className="flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow flex-1 text-center"
                  style={{ color: 'var(--contact-social-icon)' }}
                >
                  <Github size={32} className="mx-auto mb-2 group-hover:text-yellow-400 transition-colors" />
                  <p className="text-sm font-medium">GitHub</p>
                </a>
                
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow flex-1 text-center"
                  style={{ color: 'var(--contact-social-icon)' }}
                >
                  <Linkedin size={32} className="mx-auto mb-2 group-hover:text-yellow-400 transition-colors" />
                  <p className="text-sm font-medium">LinkedIn</p>
                </a>
                
                <a
                  href={`mailto:${socialLinks.gmail}`}
                  className="group p-4 glass rounded-2xl transition-all hover:scale-110 hover:shadow-glow flex-1 text-center"
                  style={{ color: 'var(--contact-social-icon)' }}
                >
                  <Mail size={32} className="mx-auto mb-2 group-hover:text-yellow-400 transition-colors" />
                  <p className="text-sm font-medium">Email</p>
                </a>
              </div>
            </div>

            {/* CV Download */}
            <div 
              className="glass rounded-3xl p-8 shadow-modern-lg text-center"
              style={{ 
                background: 'var(--contact-card-bg)',
                border: '1px solid var(--contact-card-border)'
              }}
            >
              <h3 className="text-xl font-bold mb-4"
                  style={{ color: 'var(--contact-text)' }}>
                Download my resume
              </h3>
              
              <a 
                href="/as.pdf" 
                download 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-modern hover:shadow-modern-lg btn-modern"
              >
                <Download className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 animate-fade-up animate-delay-300">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-sm opacity-60" style={{ color: 'var(--contact-text)' }}>
            © 2025 Abubakar Sohail. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
