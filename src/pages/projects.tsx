import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Icon } from "@iconify/react";
import styles from "./projects.module.css";

const projects = [
  {
    id: 1,
    title: "Dufatanye",
    description:
      "An NGO website empowering communities in Rwanda through accessible resources and support.",
    tags: ["NGO", "Web", "Community"],
    demo: "https://www.dufatanye.org",
  },
  {
    id: 2,
    title: "Zigamacash",
    description:
      "An ongoing project to streamline saving and maintenance solutions for users in Rwanda.",
    tags: ["Finance", "Web", "In-Progress"],
    link: "https://github.com/coodic/zigamacash",
    demo: null,
  },
];

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <Layout
      title="Our Projects"
      description="Explore the innovative projects built by Coodic"
    >
      <main className={styles.mainContent}>
        {/* Header */}
        <section className={styles.section}>
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.text}>
            Discover the impactful solutions we’ve built to drive Rwanda’s tech
            ecosystem forward.
          </p>
        </section>

        {/* Filter */}
        <section className={styles.section}>
          <div className={styles.filterBar}>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterButton} ${
                  filter === tag ? styles.active : ""
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Project Listings */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.text}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Collaborate with Us</h2>
          <p className={styles.text}>
            Interested in our work? Let’s build something extraordinary
            together!
          </p>
          <a href="www.coodic.com/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
