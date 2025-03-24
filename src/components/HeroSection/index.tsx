"use client";

import { socialLinks } from "@/constants/links";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className="h-110 flex flex-col gap-10 items-center justify-end">
      <div className="text-center">
        <p className="text-xxl">This is</p>
        <h1 className="text-xxl text-nowrap">Abubakar Sohail</h1>
        <h2 className="text-2xl mt-4 text-details">
          <Typewriter
            words={["FullStack Software Engineer", "ROR | MERN | Next Developer", "AWS | DevOps Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
      </div>
      <div className="flex gap-6">
        {
          socialLinks.map(({ name, url }, index) => {
            return <a href={url} target="_blank" key={index} className="hover:text-highlight hover:animate-pulse">
              {name === "Github" && <FaGithub size={50} />}
              {name === "Linkedin" && <FaLinkedin size={50} />}
              {name === "Instagram" && <FaInstagram size={50} />}
            </a>
          })
        }
      </div>
    </div>
  )
}