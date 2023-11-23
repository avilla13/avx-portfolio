import React from 'react'
import HomeWodImage from '../../assets/HomeWod.png';
import PlanItImage from '../../assets/PlanIt-add.png';
import ProjectHubImage from '../../assets/ProjectHub.png';
import MemoryDashImage from '../../assets/MemoryDash.png';

export default function Projects() {
  const projectData = [
    {
      title: "MyWod",
      description: "A fitness site that provides users AI generated CrossFit workouts (aka wods).",
      image: "",
      link: "https://my-wod-5a1017257b43.herokuapp.com/",
      github: "https://github.com/avilla13/MyWOD"
    },
    {
      title: "ProjectHub",
      description: "A productivity site designed to help teams successfully complete projects. This was a collaborative effort built in one-week sprint.",
      image: "",
      link: "https://projecthub-avah-f1fe7fefab0a.herokuapp.com/",
      github: "https://github.com/AndrewDHulse/ProjectHub"
    },
    {
      title: "Plan-It",
      description: "An event planning website designed to simplify the process of creating and managing events.",
      image: "",
      link: "https://github.com/avilla13/Plan-It",
      github: "https://plan-it-av-0a1ac1929ddc.herokuapp.com/"
    },
    {
      title: "Memory Dash",
      description: "A browser concentration game of fast-paced memory matching.",
      image: "",
      link: "https://avilla13.github.io/Concentration-Memory/",
      github: "https://github.com/avilla13/Concentration-Memory"
    }
  ];

  projectData[0].image = HomeWodImage;
  projectData[1].image = ProjectHubImage;
  projectData[2].image = PlanItImage;
  projectData[3].image = MemoryDashImage;

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
