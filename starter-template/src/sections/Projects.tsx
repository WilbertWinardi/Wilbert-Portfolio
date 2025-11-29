"use client";

import { useState } from "react";
import HSI_Cover from "@/assets/images/HSI_Cover.png";
import HSI_1 from "@/assets/images/HSI_5.png";
import HSI_2 from "@/assets/images/HSI_1.jpg";
import HSI_3 from "@/assets/images/HSI_2.jpg";
import HSI_4 from "@/assets/images/HSI_3.png";
import HSI_5 from "@/assets/images/HSI_4.png";
import WC_Cover from "@/assets/images/WC_Cover.png"
import WC_1 from "@/assets/images/WC_1.png"
import WC_2 from "@/assets/images/WC_2.png"
import WC_3 from "@/assets/images/WC_3.png"
import WC_4 from "@/assets/images/WC_4.png"
import WC_5 from "@/assets/images/WC_5.png"
import WC_6 from "@/assets/images/WC_6.png"
import WC_7 from "@/assets/images/WC_7.png"
import WC_8 from "@/assets/images/WC_8.png"
import WC_9 from "@/assets/images/WC_9.png"
import WC_10 from "@/assets/images/WC_10.png"
import WC_11 from "@/assets/images/WC_11.png"
import WC_12 from "@/assets/images/WC_12.png"
import CTZ_Cover from '@/assets/images/CTZ_Cover.png'
import CTZ_1 from '@/assets/images/CTZ_1.png'
import CTZ_2 from '@/assets/images/CTZ_2.png'
import CTZ_3 from '@/assets/images/CTZ_3.png'
import CTZ_4 from '@/assets/images/CTZ_4.png'
import CTZ_5 from '@/assets/images/CTZ_5.png'
import CN_Cover from '@/assets/images/CN_Cover.png'
import CN_1 from '@/assets/images/CN_1.png'
import CN_2 from '@/assets/images/CN_2.png'
import CN_3 from '@/assets/images/CN_3.png'
import CN_4 from '@/assets/images/CN_4.png'
import CN_5 from '@/assets/images/CN_5.png'
import CN_6 from '@/assets/images/CN_6.png'
import CN_7 from '@/assets/images/CN_7.png'
import CN_8 from '@/assets/images/CN_8.png'
import CN_9 from '@/assets/images/CN_9.png'
import BNMC_Cover from '@/assets/images/BNMC_Cover.png'
import BNMC_1 from '@/assets/images/BNMC_1.jpg'
import BNMC_2 from '@/assets/images/BNMC_2.jpg'
import BNMC_3 from '@/assets/images/BNMC_3.jpg'
import BNMC_4 from '@/assets/images/BNMC_4.jpg'
import BNMC_5 from '@/assets/images/BNMC_5.jpg'
import BNMC_6 from '@/assets/images/BNMC_6.jpg'
import BNMC_7 from '@/assets/images/BNMC_7.jpg'
import BNMC_8 from '@/assets/images/BNMC_8.jpg'
import BNMC_9 from '@/assets/images/BNMC_9.jpg'
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ProjectModal } from "@/components/ProjectModal";
import { AnimatePresence } from "framer-motion";
import { B612 } from "next/font/google";

const portfolioProjects = [
  {
    company: "BINUS University",
    year: "2025",
    title: "Hand Sign Interpreter",
    results: [
      { title: "MediaPipe for landmark detection" },
      { title: "LSTM for deep learning model" },
      { title: "SIBI static gestures" },
    ],
    link: "https://github.com/WilbertWinardi/Hand-Sign-Interpreter",
    image: [HSI_Cover, HSI_1, HSI_2, HSI_3, HSI_4, HSI_5],
    description:
      "My team designed an AI-powered Hand Sign Interpreter to bridge the communication gap between the deaf-mute community and the general public. We began by understanding the real-world challenge of limited accessibility to sign language and conducted interviews to capture user needs. Using MediaPipe for landmark detection and an LSTM deep learning model, we built a system capable of recognizing static gestures from the Indonesian Sign Language (SIBI) in real time with 97% accuracy. The project involved comprehensive steps including data collection, preprocessing, model training, and usability testing, This project is an assignment for the Software Engineering course in the fourth semester.",
    techStack: ["Python", "TensorFlow", "MediaPipe", "CV2", "OpenCV"],
  },
  {
    company: "BINUS University",
    year: "2025",
    title: "Real Time Weather Classification",
    results: [
      { title: "Real time weather prediciton" },
      { title: "Highly customizable" },
      { title: "Easy to use" },
    ],
    link: "https://github.com/claytonkoh/weather_app",
    image: [WC_Cover, WC_1, WC_2, WC_3, WC_4, WC_5, WC_6, WC_7, WC_8, WC_9, WC_10, WC_11, WC_12],
    description:
      "My team, consisting of Wilbert, Clayton, and Evan, created a real-time weather prediction website using machine learning classification. First, we collected data from the OpenWeatherMap API. Second, we were able to select which features to use for training. Third, we trained using random forest or logistic regression. Finally, we can make predictions using manual prediction (manual data input) or real-time prediction using data from the OpenWeatherMap API. This project is an assignment for the Machine Learning course in the fourth semester. We developed the logic using Python and the interface using Streamlit.",
    techStack: ["Python", "Streamlit", "Scikit-learn"],
  },
  {
    company: "BINUS University",
    year: "2024",
    title: "CAteriNgz",
    results: [
      { title: "Smooth UI and UX" },
      { title: "Responsive for all devices" },
      { title: "Nice :)" },
    ],
    link: "https://github.com/WilbertWinardi/CAteriNgz",
    image: [CTZ_Cover, CTZ_1, CTZ_2, CTZ_3, CTZ_4, CTZ_5],
    description:
      "Developed a responsive static website for a catering business, featuring an interactive food menu, customer testimonials, and a detailed company profile. Integrated a basic user registration system to enhance customer engagement. This project was completed as part of the Human-Computer Interaction course in the second semester, utilizing HTML5, CSS, and JavaScript to create a visually appealing and user-friendly interface. I also created the design for this website in Figma with different details.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    company: "BINUS University",
    year: "2024",
    title: "Binus Syahdan Network",
    results: [
      { title: "Multi-floor network infrastructure" },
      { title: "Router and switch configurations" },
      { title: "Network design principles" },
    ],
    link: "https://github.com/WilbertWinardi/Multi-Floor-Cisco-Network",
    image: [CN_Cover, CN_1, CN_2, CN_3, CN_4, CN_5, CN_6, CN_7, CN_8, CN_9],
    description:
      "My team designed and implemented a structured network for BINUS Syahdan Campus using Cisco Packet Tracer to simulate real-world communication between multiple devices. We began by analyzing the problem of ensuring efficient data delivery across different subnets, then researched routing protocols and addressing schemes to create a scalable topology. The project involved configuring routers, switches, and IP addressing to establish reliable connectivity, followed by testing scenarios such as static routing and dynamic routing (RIP, OSPF). This project is an assignment for the Software Engineering course in the fourth semester.",
    techStack: ["Cisco Packet Tracer"],
  },
  {
    company: "BINUS University",
    year: "2025",
    title: "BINUS Mandarin Club",
    results: [
      { title: "Leadership & Project Coordination" },
      { title: "Network & Cross-Domain Exposure" },
      { title: "Organizational Impact" },
    ],
    link: "https://www.linkedin.com/in/wilbertwinardi/",
    image: [BNMC_Cover, BNMC_1, BNMC_2, BNMC_3, BNMC_4, BNMC_5, BNMC_6, BNMC_7, BNMC_8, BNMC_9],
    description:
      "The BINUS Mandarin Club (BNMC) is a student activity unit that focuses on Chinese culture. I am a staff member in the education & learning department. Additionally, I am actively involved as an activist in various programs such as Staff FEST at the Anniversary event, Seminars, Expos, and Staff RS at the NMC event, and Coordinator CRF at the WP event. Through my experiences at BNMC, I have gained many new connections and enhanced my soft skills in communication, responsibility, and problem-solving.",
    techStack: [
      "Responsibility",
      "Adaptiability",
      "Problem Solving",
      "Leadership",
      "Connections",
      "Time Management",
      "Collaboration",
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See How I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-gray-950 w-full h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer hover:bg-gray-200 transition shadow-lg hover:shadow-xl translate-y-0 hover:scale-[.97] duration-200"
                  >
                    <span>View Project Details</span>
                    <ArrowRightUpIcon className="size-4" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.title}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
