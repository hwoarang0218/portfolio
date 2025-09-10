"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const professionalProjects = [
  {
    id: 1,
    name: "Admin configuration web portal",
    desc: "This web portal is created for back office admin to manage the company's data",
    img: "/images/projects/admin-portal.png",
    tech: ["React", "Material UI", "Node.js", "AntDesign", "Rest API"],
  },
  {
    id: 2,
    name: "Loyalty program back office web portal",
    desc: "This web portal is created for back office admin to manage the company's data.",
    img: "/images/projects/loyalty-portal.png",
    tech: ["PHP", "CodeIgniter", "HTML", "CSS", "Oracle", "MySQL"],
  },
  {
    id: 3,
    name: "Tracking and monitoring mobile responsive web portal",
    desc: "This web portal is created for back office admin to manage the company's data.",
    img: "/images/projects/tracking-portal.png",
    tech: ["JavaScript", "PHP", "CodeIgniter", "HTML", "CSS", "bootstrap"],
  },
  {
    id: 4,
    name: "Healthcare web portal and mobile app",
    desc: "Web portal and mobile app handshake for healthcare company.",
    img: "/images/projects/ecase.jpg",
    tech: ["JavaScript", "PHP", "Native PHP", "HTML", "CSS"],
  },
];

const personalProjects = [
  {
    id: 3,
    name: "3D third person shooter game",
    desc: "3D third person shooter game created using three.js and react-three-fiber",
    img: "/images/projects/shooter-game.png",
    tech: ["React", "Three.Js", "React-Three-Fiber"],
  },
  {
    id: 4,
    name: "Face recognition with AI features",
    desc: "Face recognition with AI features created using Tensorflow.js and React",
    img: "/images/projects/face-recognition.png",
    tech: ["React", "Tensorflow.js", "Vite", "node.js"],
  },
];

const getSkillLogo = (tech: string) => {
  let name = tech.toLowerCase().replace(/\s+/g, "");

  //add condition if name has period remove it
  if (name.includes(".")) {
    const nameWithoutPeriod = name.replace(/\./g, "");
    name = nameWithoutPeriod;
  }

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading delay

    return () => clearTimeout(timeout);
  }, [pathname]);

  const ProjectGrid = ({ projects }: { projects: typeof personalProjects }) => {
    const router = useRouter();

    const handleImageClick = (
      e: React.MouseEvent,
      item: (typeof personalProjects)[0]
    ) => {
      e.preventDefault();
      if (e.detail === 1) {
        // Single click - show modal
        setSelectedImage(item.img);
        setIsModalOpen(true);
      } else if (e.detail === 2) {
        // Double click - navigate
        router.push(`/projects/${item.id}`);
      }
    };

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {projects.map((item, index) => (
          <section
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-sm p-4"
          >
            <article className="flex flex-col h-full">
              <figure className="w-full h-48 relative">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="rounded-md cursor-pointer object-cover"
                  onClick={(e) => handleImageClick(e, item)}
                />
              </figure>
              <h2 className="text-base md:text-lg font-semibold mt-4">
                {item.name}
              </h2>
              <p className="text-sm md:text-base my-2 md:my-3 text-gray-600">
                {item.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2">
                {item.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`group relative px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2`}
                  >
                    <img
                      src={getSkillLogo(tech)}
                      alt={`${tech} logo`}
                      className="w-4 h-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </section>
        ))}
      </div>
    );
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col my-5 p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold my-3 md:my-5">
          Projects
        </h1>
        <p className="text-base md:text-lg">
          A range of projects i had worked on mobile, animation, 3D, game and
          web development.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Professional Projects
            </h2>
            <div className="pb-2 mb-6 border-b border-gray-200"></div>
            <ProjectGrid projects={professionalProjects} />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Personal Projects
            </h2>
            <div className="pb-2 mb-6 border-b border-gray-200"></div>
            <ProjectGrid projects={personalProjects} />
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Preview"
                width={800}
                height={600}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
