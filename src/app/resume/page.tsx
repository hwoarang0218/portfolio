"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFilePdf,
  FaPhone,
  FaPlus,
  FaSave,
  FaUpload,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import QRCode from "react-qr-code";

const Resume = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Lead Front-End Developer",
      company: "ATOS (Syntel InfoTech Inc.)",
      period: "April 22 2022 – Sept 23 2023",
      achievements: [
        "Individual contributor as senior front-end developer develops according to functional and technical design specifications.",
        "Delegates tasks to peer developers based on complexity and priority as part of my lead role.",
        "Multiple commendations received from both client and company side.",
        "MVP awardee",
      ],
      technologies: [
        "React",
        "Node.js",
        "REST API",
        "Material UI",
        "ANT Design",
        "Figma",
        "TypeScript",
        "JIRA",
        "Git",
        "SCRUM",
        "Agile",
      ],
    },
    {
      title: "PHP Developer (Mid – Senior level)",
      company: "BCS Technology International PTY LTD - Philippines ROHQ",
      period: "April 15 2019 – October 2020",
      achievements: [
        "Debug and optimization of codes. Make sure all features are working and bug free at all times.",
        "Develop software according to functional and technical design specifications.",
        "Developed APIs to work compatibly on mobile platforms as well as Web version of the app.",
        "Assist in the continual improvement of software configuration management process.",
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "API",
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "Bootstrap",
        "Bitbucket",
        "Trello",
      ],
    },
    {
      title: "Senior Web Developer",
      company: "ACCENT MICRO TECHNOLOGIES INC. (AMTI)",
      period: "July 17 2017 – March 2019",
      achievements: [
        "Automate and coverts several day-to-day business process of the company to Web Application.",
        "Leads R&D team with Digital Transformation adaptation of the company.",
        "Developed internal learning software skill thru web to boost employee performance.",
        "Developed logistics software to track and monitor the company’s assets.",
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "API",
        "JavaScript",
        "HTML",
        "Bootstrap",
        "CSS",
        "jQuery",
        "MysQL",
        "PostgreSQL",
        "Couchbase",
        "CouchDB",
        "Bitbucket",
        "Trello",
        "Git",
        "JOOMLA",
        "WordPress",
      ],
    },
    {
      title: "Senior Web Developer",
      company: "CHANNEL SOLUTIONS INC.(CSI)",
      period: "February 2012 – June 2017",
      achievements: [
        "Involved in maintenance and enhancement on our client’s flagship software for their renown service.",
        "Conducted various types of ad hoc testing to catch any unexpected issues that may arise during normal usage.",
        "Integrate several custom ATM's and POS Transaction of template reports as required of Banks.",
        "Started my career in Web Development which progress my skills equip with up to date frameworks, tools, and technologies.",
      ],
      technologies: [
        "Visual Basic 6",
        "Crystal Reports",
        "PHP",
        "CodeIgniter",
        "API",
        "JavaScript",
        "HTML",
        "Bootstrap",
        "CSS",
        "jQuery",
        "Oracle",
        "Microsoft SQL",
        "MySQL",
      ],
    },
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    name: "Mark Lester De Guzman",
    title: "Front-End Developer",
    email: "marklester0218@gmail.com",
    phone: "09760763032",
    location: "Bacoor Cavite, Philippines",
    linkedin: "https://www.linkedin.com/in/marklester0218",
  });

  const [education, setEducation] = useState({
    degree: "Bachelor of Computer Science",
    school: "Adamson University",
    period: "2006 - 2011",
  });

  const [skills, setSkills] = useState({
    frontend: [
      {
        name: "React",
        years: 5,
        rating: 4,
        color: "bg-[rgb(20,158,202)] opacity-100 hover:text-white",
      },
      {
        name: "Redux",
        years: 5,
        rating: 4,
        color: "bg-[rgb(118,74,188)] opacity-100 hover:text-white",
      },
      {
        name: "Next.js",
        years: 2,
        rating: 4,
        color: "bg-[rgb(0,0,0)] opacity-100 hover:text-white",
      },
      {
        name: "TypeScript",
        years: 3,
        rating: 4,
        color: "bg-[rgb(49,120,198)] opacity-100 hover:text-white",
      },
      {
        name: "HTML5",
        years: 9,
        rating: 5,
        color: "bg-[rgb(227,79,38)] opacity-100 hover:text-white",
      },
      {
        name: "CSS3",
        years: 9,
        rating: 5,
        color: "bg-[rgb(21,114,182)] opacity-100 hover:text-white",
      },
      {
        name: "Tailwind CSS",
        years: 2,
        rating: 5,
        color: "bg-[rgb(6,182,212)] opacity-100 hover:text-white",
      },
      {
        name: "Bootstrap",
        years: 9,
        rating: 5,
        color: "bg-[rgb(121,82,179)] opacity-100 hover:text-white",
      },
      {
        name: "Material UI",
        years: 3,
        rating: 4,
        color: "bg-[rgb(0,127,255)] opacity-100 hover:text-white",
      },
      {
        name: "ANT Design",
        years: 3,
        rating: 4,
        color: "bg-[rgb(1,112,254)] opacity-100 hover:text-white",
      },
      {
        name: "JavaScript",
        years: 9,
        rating: 5,
        color: "bg-[rgb(247,223,30)] opacity-100 text-black",
      },
      {
        name: "Three.js",
        years: 3,
        rating: 4,
        color: "bg-[rgb(0,0,0)] opacity-100 hover:text-white",
      },
      {
        name: "Vite",
        years: 3,
        rating: 4,
        color: "bg-[rgb(97,218,251)] opacity-100 text-black",
      },
    ],
    backend: [
      {
        name: "Node.js",
        years: 4,
        rating: 4,
        color: "bg-[rgb(104,160,99)] opacity-100 hover:text-white",
      },
      {
        name: "Express.js",
        years: 3,
        rating: 3,
        color: "bg-[rgb(64,77,89)] opacity-100 hover:text-white",
      },
      {
        name: "MongoDB",
        years: 3,
        rating: 3,
        color: "bg-[rgb(64,77,89)] opacity-100 hover:text-white",
      },
      {
        name: "Firebase",
        years: 3,
        rating: 3,
        color: "bg-[rgb(64,77,89)] opacity-100 hover:text-white",
      },
      {
        name: "NoSQL",
        years: 3,
        rating: 3,
        color: "bg-[rgb(64,77,89)] opacity-100 hover:text-white",
      },
      {
        name: "PostgreSQL",
        years: 3,
        rating: 4,
        color: "bg-[rgb(65,105,225)] opacity-100 hover:text-white",
      },
      {
        name: "MySQL",
        years: 9,
        rating: 4,
        color: "bg-[rgb(68,121,161)] opacity-100 hover:text-white",
      },
      {
        name: "MSSQL",
        years: 9,
        rating: 4,
        color: "bg-[rgb(204,41,39)] opacity-100 hover:text-white",
      },
      {
        name: "Oracle",
        years: 9,
        rating: 4,
        color: "bg-[rgb(248,0,0)] opacity-100 hover:text-white",
      },
      {
        name: "PHP",
        years: 5,
        rating: 5,
        color: "bg-[rgb(119,123,180)] opacity-100 hover:text-white",
      },
      {
        name: "REST API",
        years: 5,
        rating: 5,
        color: "bg-[rgb(0,150,136)] opacity-100 hover:text-white",
      },
    ],
    devops: [
      {
        name: "Git",
        years: 3,
        rating: 4,
        color: "bg-[rgb(222,76,54)] opacity-100 hover:text-white",
      },
      {
        name: "BitBucket",
        years: 3,
        rating: 4,
        color: "bg-[rgb(38,132,255)] opacity-100 hover:text-white",
      },
      {
        name: "Agile",
        years: 3,
        rating: 4,
        color: "bg-[rgb(71,180,226)] opacity-100 hover:text-white",
      },
      {
        name: "SCRUM",
        years: 3,
        rating: 4,
        color: "bg-[rgb(71,180,226)] opacity-100 hover:text-white",
      },
      {
        name: "Figma",
        years: 3,
        rating: 4,
        color: "bg-[rgb(242,78,30)] opacity-100 hover:text-white",
      },
      {
        name: "Docker",
        years: 2,
        rating: 4,
        color: "bg-[rgb(36,150,237)] opacity-100 hover:text-white",
      },
      {
        name: "JIRA",
        years: 2,
        rating: 4,
        color: "bg-[rgb(36,150,237)] opacity-100 hover:text-white",
      },
      {
        name: "Confluence",
        years: 2,
        rating: 4,
        color: "bg-[rgb(36,150,237)] opacity-100 hover:text-white",
      },
      {
        name: "Postman",
        years: 5,
        rating: 4,
        color: "bg-[rgb(255,108,55)] opacity-100 hover:text-white",
      },
      {
        name: "NPM",
        years: 5,
        rating: 4,
        color: "bg-[rgb(255,108,55)] opacity-100 hover:text-white",
      },
      {
        name: "Webpack",
        years: 3,
        rating: 2,
        color: "bg-[rgb(255,108,55)] opacity-100 hover:text-white",
      },
      {
        name: "Vercel",
        years: 3,
        rating: 2,
        color: "bg-[rgb(255,108,55)] opacity-100 hover:text-white",
      },
      {
        name: "GitHub Copilot (AI)",
        years: 1,
        rating: 3,
        color: "bg-[rgb(255,108,55)] opacity-100 hover:text-white",
      },
    ],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    achievements: [""],
    technologies: [] as string[],
  });

  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<{
    name: string;
    years: number;
    rating: number;
    color: string;
    category: "frontend" | "backend" | "devops";
    isNew?: boolean;
  } | null>(null);

  const [summary, setSummary] = useState([
    "Experienced Developer focusing on the client-side of web applications with a strong background in Finance, Healthcare, Logistics, Retail industry.",
    "Able to adopt fast to different working environment.",
    "Experienced lead who proactively offer solutions to challenges faced by the team.",
  ]);

  const [references] = useState([
    {
      name: "John Smith",
      title: "Engineering Manager",
      company: "Tech Corp",
      email: "john.smith@techcorp.com",
      phone: "+1 234 567 8900",
    },
    {
      name: "Jane Doe",
      title: "Senior Software Architect",
      company: "Innovation Labs",
      email: "jane.d@innovation.com",
      phone: "+1 234 567 8901",
    },
  ]);

  const [socialLinks] = useState({
    linkedin: "https://linkedin.com/in/marklester0218",
    github: "https://github.com/hwoarang0218",
    portfolio: "https://portfolio-beryl-theta-76.vercel.app/",
    // portfolio: "https://resume-hwoarang0218s-projects.vercel.app/",
  });

  const [showReferences, setShowReferences] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const data = {
      personalInfo,
      experiences,
      education,
      skills,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.experiences) setExperiences(data.experiences);
          if (data.personalInfo) setPersonalInfo(data.personalInfo);
          if (data.education) setEducation(data.education);
          if (data.skills) setSkills(data.skills);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const addNewExperience = (e: React.FormEvent) => {
    e.preventDefault();
    setExperiences([...experiences, newExperience]);
    setNewExperience({
      title: "",
      company: "",
      period: "",
      achievements: [""],
      technologies: [],
    });
    setIsModalOpen(false);
  };

  const addAchievement = () => {
    setNewExperience({
      ...newExperience,
      achievements: [...newExperience.achievements, ""],
    });
  };

  const updateAchievement = (index: number, value: string) => {
    const updatedAchievements = [...newExperience.achievements];
    updatedAchievements[index] = value;
    setNewExperience({
      ...newExperience,
      achievements: updatedAchievements,
    });
  };

  const getAllTechnologies = () => {
    return [...skills.frontend, ...skills.backend].map((skill) => skill.name);
  };

  const handleAddSkill = () => {
    setEditingSkill({
      name: "",
      years: 0,
      rating: 1,
      color: "hover:bg-gray-600 hover:text-white",
      category: "frontend",
      isNew: true,
    });
    setIsSkillModalOpen(true);
  };

  const handleSkillEdit = (
    skill: any,
    category: "frontend" | "backend" | "devops"
  ) => {
    setEditingSkill({ ...skill, category });
    setIsSkillModalOpen(true);
  };

  const handleSkillSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSkill) return;

    const updatedSkills = { ...skills };

    if (!editingSkill.isNew && editingSkill.name) {
      ["frontend", "backend", "devops"].forEach((cat) => {
        const index = updatedSkills[cat as keyof typeof skills].findIndex(
          (s) => s.name === editingSkill.name
        );
        if (index >= 0) {
          updatedSkills[cat as keyof typeof skills].splice(index, 1);
        }
      });
    }

    const skillToAdd = {
      name: editingSkill.name,
      years: editingSkill.years,
      rating: editingSkill.rating,
      color: editingSkill.color,
    };
    updatedSkills[editingSkill.category].push(skillToAdd);

    setSkills(updatedSkills);
    setIsSkillModalOpen(false);
    setEditingSkill(null);
  };

  const getSkillLogo = (skillName: string) => {
    let name = skillName.toLowerCase().replace(/\s+/g, "");

    //add condition if name has period remove it
    if (name.includes(".")) {
      const nameWithoutPeriod = name.replace(/\./g, "");
      name = nameWithoutPeriod;
    }

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
  };

  const skillsSection = (
    <section>
      <div className="flex justify-between items-center mb-3 border-b-2">
        <h2 className="text-xl font-semibold">Skills</h2>

        <button
          onClick={handleAddSkill}
          className="print:hidden text-sm px-2 py-1 bg-gray-400 text-white rounded hover:bg-green-600"
          title="Add skill"
        >
          <FaPlus size={20} />
          <span className="absolute left-full ml-2 -translate-y-1/2 top-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
            Add skill"
          </span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend?.map((skill) => (
              <span
                key={skill.name}
                onClick={() => handleSkillEdit(skill, "frontend")}
                title={`Experience: ${skill.years} years, Rating: ${skill.rating}/5`}
                className={`group relative px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2`}
              >
                <img
                  src={getSkillLogo(skill.name)}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {skill.name}
                <span className="absolute left-1/2 -translate-x-1/2 -top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                  Experience: {skill.years} years, Rating: {skill.rating}/5
                </span>
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <span
                key={skill.name}
                onClick={() => handleSkillEdit(skill, "backend")}
                title={`Experience: ${skill.years} years, Rating: ${skill.rating}/5`}
                className={`group relative px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200  cursor-pointer flex items-center gap-2`}
              >
                <img
                  src={getSkillLogo(skill.name)}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {skill.name}
                <span className="absolute left-1/2 -translate-x-1/2 -top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                  Experience: {skill.years} years, Rating: {skill.rating}/5
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid mt-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Development & Operations</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.devops?.map((skill) => (
              <span
                key={skill.name}
                onClick={() => handleSkillEdit(skill, "devops")}
                title={`Experience: ${skill.years} years, Rating: ${skill.rating}/5`}
                className={`group relative px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200  cursor-pointer flex items-center gap-2`}
              >
                <img
                  src={getSkillLogo(skill.name)}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {skill.name}
                <span className="absolute left-1/2 -translate-x-1/2 -top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                  Experience: {skill.years} years, Rating: {skill.rating}/5
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {isSkillModalOpen && editingSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center print:hidden">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editingSkill.isNew
                ? "Add New Skill"
                : `Edit Skill: ${editingSkill.name}`}
            </h2>
            <form onSubmit={handleSkillSave}>
              <div className="space-y-4">
                {editingSkill.isNew && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        value={editingSkill.name}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            name: e.target.value,
                          })
                        }
                        className="w-full border rounded p-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Category
                      </label>
                      <select
                        value={editingSkill.category}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            category: e.target.value as
                              | "frontend"
                              | "backend"
                              | "devops",
                          })
                        }
                        className="w-full border rounded p-2"
                        required
                      >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="devops">DevOps</option>
                      </select>
                    </div>
                  </>
                )}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={editingSkill.years}
                    onChange={(e) =>
                      setEditingSkill({
                        ...editingSkill,
                        years: parseInt(e.target.value),
                      })
                    }
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rating (out of 5)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={editingSkill.rating}
                    onChange={(e) =>
                      setEditingSkill({
                        ...editingSkill,
                        rating: parseInt(e.target.value),
                      })
                    }
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSkillModalOpen(false);
                    setEditingSkill(null);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <div className="max-w-[850px] mx-auto bg-white shadow-md p-8 print:shadow-none print:p-6">
        <div className="action-buttons print:hidden fixed left-4 top-1/4 flex flex-col gap-4">
          <button
            onClick={handlePrint}
            className="group relative p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Download PDF"
          >
            <FaFilePdf size={20} />
            <span className="absolute left-full ml-2 -translate-y-1/2 top-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
              Download PDF
            </span>
          </button>
          <button
            onClick={handleSave}
            className="group relative p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            aria-label="Save Data"
          >
            <FaSave size={20} />
            <span className="absolute left-full ml-2 -translate-y-1/2 top-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
              Save Data
            </span>
          </button>
          <label className="group relative p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors cursor-pointer">
            <FaUpload size={20} />
            <span className="absolute left-full ml-2 -translate-y-1/2 top-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
              Load Data
            </span>
            <input
              type="file"
              accept=".json"
              onChange={handleLoad}
              className="hidden"
            />
          </label>
        </div>

        <div className="space-y-3 ">
          <header className="text-center">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <h2 className="text-2xl font-bold text-gray-600">
              {personalInfo.title}
            </h2>
            <div className="mt-2  text-gray-600">
              <p>
                <span className="inline-flex items-center pr-2 ">
                  <FaPhone className="mr-1 " />
                  {personalInfo.phone}
                </span>

                <span className="inline-flex items-center pr=2">
                  <FaEnvelope className="mr-1" /> {personalInfo.email}
                </span>
              </p>
              <p>
                <span className="inline-flex items-center">
                  <FaLocationDot className="mr-1" /> {personalInfo.location}
                </span>
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-xl font-semibold border-b-2 mb-3">Summary</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              {summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {skillsSection}

          <section>
            <div className="flex justify-between items-center ">
              <h2 className="text-xl font-semibold">Experience</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="print:hidden text-sm px-2 py-1 bg-gray-400 text-white rounded hover:bg-green-600"
                title="Add job experience"
              >
                <FaPlus size={20} />
                <span className="absolute left-full ml-2 -translate-y-1/2 top-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                  Add job experience"
                </span>
              </button>
            </div>
            <div className="border-b-2 mb-3"></div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={index === 0 ? "print:break-after-page" : ""}
                >
                  <h3 className="font-medium">{exp.title}</h3>
                  <p className="text-gray-600">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies?.map((tech, i) => {
                      const skillInfo = [
                        ...skills.frontend,
                        ...skills.backend,
                      ].find((s) => s.name === tech);
                      return (
                        <span
                          key={i}
                          className={`px-2 py-1 text-xs rounded-full bg-gray-200  "hover:bg-gray-300"
                          } flex items-center gap-1`}
                        >
                          <img
                            src={getSkillLogo(tech)}
                            alt={`${tech} logo`}
                            className="w-4 h-4"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold border-b-2 mb-3">Education</h2>
            <div>
              <h3 className="font-medium">{education.degree}</h3>
              <p className="text-gray-600">
                {education.school} • {education.period}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold border-b-2 mb-3">
              Professional Links
            </h2>
            <div className="grid grid-cols-3 gap-6 relative">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 64,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={socialLinks.linkedin}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <a href={socialLinks.linkedin} target="_blank">
                    <span
                      className={`group relative px-3 py-1 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center `}
                    >
                      <img
                        src={getSkillLogo("linkedin")}
                        className="w-4 h-4 mr-2"
                      />
                      Linkedin
                    </span>
                  </a>
                </div>
              </div>

              {/* Vertical line dividers */}
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-200"></div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 64,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={socialLinks.github}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <a href={socialLinks.github} target="_blank">
                    <span
                      className={`group relative px-3 py-1 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center `}
                    >
                      <img
                        src={getSkillLogo("github")}
                        className="w-4 h-4 mr-2"
                      />
                      Github
                    </span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 64,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={socialLinks.portfolio}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <a href={socialLinks.portfolio} target="_blank">
                    <span
                      className={`group relative px-3 py-1 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center `}
                    >
                      <img
                        src={getSkillLogo("vercel")}
                        className="w-4 h-4 mr-2"
                      />
                      Project Portfolio
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="hidden print:hidden">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">References</h2>
              <button
                onClick={() => setShowReferences(!showReferences)}
                className="print:hidden text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                {showReferences ? "Hide" : "Show"} References
              </button>
            </div>
            <div className="border-b-2 mb-3"></div>
            {showReferences ? (
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="text-gray-700">
                    <h3 className="font-medium">{ref.name}</h3>
                    <p>{ref.title}</p>
                    <p className="text-gray-600">{ref.company}</p>
                    <div className="text-sm mt-1">
                      <p className="inline-flex items-center mr-4">
                        <FaEnvelope className="mr-1" /> {ref.email}
                      </p>
                      <p className="inline-flex items-center">
                        <FaPhone className="mr-1" /> {ref.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 italic">
                References available upon request
              </p>
            )}
          </section>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center print:hidden">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add Job Experience</h2>
              <form onSubmit={addNewExperience}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newExperience.title}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          title: e.target.value,
                        })
                      }
                      className="w-full border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={newExperience.company}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          company: e.target.value,
                        })
                      }
                      className="w-full border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Period
                    </label>
                    <input
                      type="text"
                      value={newExperience.period}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          period: e.target.value,
                        })
                      }
                      className="w-full border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Achievements
                    </label>
                    {newExperience.achievements.map((achievement, index) => (
                      <input
                        key={index}
                        type="text"
                        value={achievement}
                        onChange={(e) =>
                          updateAchievement(index, e.target.value)
                        }
                        className="w-full border rounded p-2 mb-2"
                        required
                      />
                    ))}
                    <button
                      type="button"
                      onClick={addAchievement}
                      className="text-sm text-blue-500"
                    >
                      + Add Achievement
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Technologies Used
                    </label>
                    <div className="mb-2">
                      <select
                        className="w-full border rounded p-2"
                        onChange={(e) => {
                          if (
                            e.target.value &&
                            !newExperience.technologies.includes(e.target.value)
                          ) {
                            setNewExperience({
                              ...newExperience,
                              technologies: [
                                ...newExperience.technologies,
                                e.target.value,
                              ],
                            });
                          }
                        }}
                        value=""
                      >
                        <option value="">Select technologies...</option>
                        {getAllTechnologies()
                          .filter(
                            (tech) => !newExperience.technologies.includes(tech)
                          )
                          .map((tech) => (
                            <option key={tech} value={tech}>
                              {tech}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {newExperience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() =>
                              setNewExperience({
                                ...newExperience,
                                technologies: newExperience.technologies.filter(
                                  (_, i) => i !== index
                                ),
                              })
                            }
                            className="ml-1 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <style jsx global>{`
          @media print {
            .action-buttons {
              display: none !important;
            }
            @page {
              margin: 0.5cm;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        `}</style>
        {/* add break-after-page utility class */}
        <style jsx global>{`
          @media print {
            .break-after-page {
              break-after: page;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Resume;
