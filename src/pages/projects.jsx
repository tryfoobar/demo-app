import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";

const projects = [
  {
    title: "Vaulter Acquisition",
    color: "#E9088A",
    progress: "85%",
    date: "21 July 2025",
    type: "Work",
  },
  {
    title: "40th Birthday Party",
    color: "#63AEFF",
    progress: "48%",
    date: "12 Dec 2025",
    type: "Family",
  },
  {
    title: "Project 3",
    color: "#FBF2A6",
    progress: "92%",
    date: "10 Dec 2025",
    type: "Home",
  },
  {
    title: "Project 4",
    color: "#FB5E60",
    progress: "73%",
    date: "17 Nov 2025",
    type: "Work",
  },
  {
    title: "Project 5",
    color: "#F6AFFF",
    progress: "83%",
    date: "08 July 2025",
    type: "Home",
  },
  {
    title: "Project 6",
    color: "#FEB56C",
    progress: "20%",
    type: "Kids",
    date: "29 Nov 2025",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            color={project.color}
            title={project.title}
            type={project.type}
            date={project.date}
            progress={project?.progress}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
