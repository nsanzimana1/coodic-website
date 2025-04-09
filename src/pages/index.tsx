import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { Icon } from "@iconify/react";

const companyLogos = [
  "/img/c1.png",
  "/img/c2.png",
  "/img/coodic.png",
  "/img/c1.png",
  "/img/c3.png",
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="heroSubtitle">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://coodic.com/contact"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/coodic"
            style={{ marginLeft: "1rem" }}
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
function WhatWeDoSection() {
  return (
    <section className={styles.whatWeDo}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What We Do
        </Heading>
        <div className="row">
          {/* 1. Custom Software Development */}
          <div className={clsx("col col--4")}>
            <div className={styles.card}>
              <Icon icon="mdi:code-tags-check" className={styles.cardIcon} />
              <Heading as="h3">Custom Software Development</Heading>
              <p>
                We design and build tailored software solutions that solve
                complex business problems and drive growth.
              </p>
            </div>
          </div>

          {/* 2. Mobile App Development */}
          <div className={clsx("col col--4")}>
            <div className={styles.card}>
              <Icon icon="mdi:cellphone-link" className={styles.cardIcon} />
              <Heading as="h3">Mobile App Development</Heading>
              <p>
                We build performant and scalable iOS and Android apps using
                React Native, Flutter, or native technologies.
              </p>
            </div>
          </div>

          {/* 3. AI & Automation */}
          <div className={clsx("col col--4")}>
            <div className={styles.card}>
              <Icon icon="mdi:robot-outline" className={styles.cardIcon} />
              <Heading as="h3">AI & Automation</Heading>
              <p>
                Unlock efficiency with smart automation, AI-powered solutions,
                and machine learning models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedCompaniesSection() {
  return (
    <section className={styles.trustedCompanies}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Trusted by
        </Heading>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className={styles.companyLogo}
              />
            ))}
            {/* Duplicate logos for seamless scrolling */}
            {companyLogos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt={`Company ${index + 1}`}
                className={styles.companyLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="From startups to enterprise — if you can imagine it, we can build it"
    >
      <HomepageHeader />
      <main>
        <WhatWeDoSection />
        <TrustedCompaniesSection />
      </main>
    </Layout>
  );
}
