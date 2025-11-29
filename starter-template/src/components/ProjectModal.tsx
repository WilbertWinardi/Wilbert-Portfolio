"use client";

import Image from "next/image";
import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronRightIcon from "@/assets/icons/chevronright.svg";
import ChevronLeftIcon from "@/assets/icons/chevronleft.svg";

const PauseIcon = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [[currentImageIndex, direction], setPage] = useState([0, 0]);

  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const images = Array.isArray(project?.image) ? project.image.slice(1) : [];

  useEffect(() => {
    setPage([0, 0]);
  }, [project?.image, project?.title]);

  const paginate = (newDirection: number) => {
    if (images.length === 0) return;
    let newIndex = currentImageIndex + newDirection;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isHovered && !isManualPaused && images.length > 1) {
      intervalRef.current = setInterval(() => {
        paginate(1);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, isManualPaused, images.length, currentImageIndex]);

  if (!project) return null;

  const shouldShowPauseOverlay =
    (isHovered || isManualPaused) && images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm px-4 md:px-0"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.1, opacity: 0, y: 20 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="w-full max-w-[23rem] md:max-w-3xl lg:max-w-5xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="w-full h-auto max-h-[90vh] !rounded-3xl relative flex flex-col overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white/50 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] h-full gap-4 min-h-0">
            <div className="flex flex-col gap-8 lg:gap-11 p-6 md:p-8">
              <div className="flex flex-col gap-3 shrink-0">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-xs md:text-sm gap-2 text-transparent bg-clip-text w-fit">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white">
                  {project.title}
                </h2>
              </div>
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-gray-900 touch-pan-y cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                onClick={() => setIsManualPaused(!isManualPaused)}
              >
                <AnimatePresence initial={false} custom={direction}>
                  {images.length > 0 && (
                    <motion.div
                      key={currentImageIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragStart={() => setIsHovered(true)}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }

                        setTimeout(() => setIsHovered(false), 100);
                      }}
                      transition={{
                        x: { type: "tween", duration: 0.4 },
                        opacity: { duration: 0.4 },
                      }}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <Image
                        src={images[currentImageIndex]}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-fill pointer-events-none"
                        draggable={false}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {shouldShowPauseOverlay && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gray-950/20 flex items-center justify-center pointer-events-none z-10"
                    >
                      <div className="flex items-center gap-1.5 text-white/90 bg-black/60 px-2.5 py-2 rounded-full text-sm shadow-sm">
                        <PauseIcon className="size-4 md:size-6" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        paginate(-1);
                      }}
                      className="hidden lg:block absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    >
                      <ChevronLeftIcon class="w-6 h-6" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        paginate(1);
                      }}
                      className="hidden lg:block absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPage([index, index > currentImageIndex ? 1 : -1]);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                          index === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 p-6 md:p-8 md:pt-0 lg:p-8 lg:pl-6 overflow-y-auto h-full scrollbar-thin-elegant">
              <div>
                <h3 className="font-bold text-white mb-3 text-lg md:text-xl">
                  About Project
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-3 text-lg md:text-xl">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white/90 border border-white/10 px-3 py-1.5 rounded-lg text-xs md:text-base font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto"
              >
                <button className="bg-white text-gray-950 w-full h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-200 transition shadow-lg hover:shadow-xl translate-y-0 hover:scale-[.97] duration-200">
                  <span>Visit Github</span>
                  <ArrowRightUpIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
