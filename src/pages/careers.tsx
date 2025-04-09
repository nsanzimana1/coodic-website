import React from "react";
import Layout from "@theme/Layout";
import { Icon } from "@iconify/react";
import styles from "./careers.module.css";

const volunteerOpportunities = [
  {
    id: 1,
    title: "Frontend Developer (Volunteer)",
    description:
      "Contribute to our open-source projects by building responsive, user-friendly interfaces using different frameworks.",
    skills: [
      "Familiarity with React",
      "Interest in TypeScript",
      "Enthusiasm for open-source UI/UX",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer (Volunteer)",
    description:
      "Help design scalable APIs and database solutions for our open-source platforms.",
    skills: [
      "Experience with Node.js and Flask",
      "Basic SQL/NoSQL knowledge",
      "Passion for secure APIs",
    ],
  },
];

const CareersPage: React.FC = () => {
  return (
    <Layout
      title="Volunteer with Coodic"
      description="Contribute to our open-source projects and drive innovation in Rwanda"
    >
      <main className={styles.mainContent}>
        {/* Header */}
        <section className={styles.section}>
          <h1 className={styles.title}>Volunteer with Coodic</h1>
          <p className={styles.text}>
            We’re open to volunteers! Join us to work on exciting open-source
            projects that make an impact in Rwanda and beyond.
          </p>
        </section>

        {/* Volunteer Opportunities */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Volunteer Opportunities</h2>
          <p className={styles.text}>
            We’re not hiring right now, but we welcome contributors to our
            open-source efforts. Check out our{" "}
            <a
              href="https://github.com/coodic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>{" "}
            to get started!
          </p>
          <div className={styles.jobGrid}>
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className={styles.jobCard}>
                <h3 className={styles.jobTitle}>{opportunity.title}</h3>
                <p className={styles.text}>{opportunity.description}</p>
                <ul className={styles.requirements}>
                  {opportunity.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <a href="www.coodic.com/contact" className={styles.applyButton}>
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Have a Skill to Share?</h2>
          <p className={styles.text}>
            We’d love your help on our open-source projects. Tell us how you’d
            like to contribute!
          </p>
          <a href="www.coodic.com/contact" className={styles.applyButton}>
            Get Involved
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default CareersPage;
