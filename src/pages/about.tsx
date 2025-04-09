import React from "react";
import Layout from "@theme/Layout";
import { Icon } from "@iconify/react";
import styles from "./about.module.css";

const AboutPage: React.FC = () => {
  return (
    <Layout
      title="About COODIC"
      description="Discover COODIC’s mission, vision, and future roadmap"
    >
      <main className={styles.mainContent}>
        {/* Introduction */}
        <section className={styles.section}>
          <h1 className={styles.title}>About COODIC</h1>
          <p className={styles.text}>
            COODIC, the visionary software firm, is on the leading edge of
            Rwanda's technology boom. Founded on June 26, 2024, our organization
            is dedicated to utilizing technology to stimulate economic
            development and address key community challenges. This page provides
            a complete picture of Coodic's mission, strategic vision, and
            broader context of our operations.
          </p>
        </section>

        {/* Vision and Mission */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Vision and Mission</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <Icon icon="mdi:earth" className={styles.icon} /> Vision
              </h3>
              <p className={styles.text}>
                COODIC dreams of a future where technology is an enabler of
                positive transformation worldwide. We hope to go beyond
                boundaries, creating a significant difference not just in our
                immediate community but also assisting in the development of the
                economy worldwide. Our vision is in empowering the youth, and
                developing innovative solutions that address global problems.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <Icon icon="mdi:rocket" className={styles.icon} /> Mission
              </h3>
              <p className={styles.text}>
                At COODIC, it is our vision to spur Rwanda's economic growth
                through technology. We are dedicated to giving meaningfully to
                our local community while making a significant and positive
                impact globally. We empower youth, foster education, and
                discover solutions that go beyond geographical boundaries,
                striving to create a better, more equitable world.
              </p>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Future Roadmap</h2>
          <p className={styles.text}>
            Our way ahead is fraught with complexity and dangers. COODIC's
            dedication is based on relentless innovation, active community
            participation, and forging international collaborations. These
            activities aim to place us at the forefront of the global technology
            arena helping towards societal progress and economic growth.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
