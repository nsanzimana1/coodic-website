import React from "react";
import Layout from "@theme/Layout";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./appstore.module.css";

const apps = [
  {
    id: 1,
    name: "Coodic Learn",
    description:
      "Empower your skills with interactive learning tools tailored for Rwanda’s youth.",
    screenshots: [
      "https://via.placeholder.com/300x600.png?text=Learn+Home",
      "https://via.placeholder.com/300x600.png?text=Lesson+View",
      "https://via.placeholder.com/300x600.png?text=Progress",
    ],
    iosLink: "https://apps.apple.com/app/example",
    androidLink: "https://play.google.com/store/apps/details?id=example",
  },
  {
    id: 2,
    name: "Coodic Connect",
    description:
      "Stay connected with your community through real-time updates and local events.",
    screenshots: [
      "https://via.placeholder.com/300x600.png?text=Connect+Feed",
      "https://via.placeholder.com/300x600.png?text=Event+Details",
    ],
    iosLink: "https://apps.apple.com/app/example",
    androidLink: "https://play.google.com/store/apps/details?id=example",
  },
];

const AppStorePage: React.FC = () => {
  return (
    <Layout
      title="Our Apps"
      description="Discover the apps built by Coodic to transform Rwanda"
    >
      <main className={styles.mainContent}>
        {/* Header */}
        <section className={styles.section}>
          <h1 className={styles.title}>Our Apps</h1>
          <p className={styles.text}>
            Explore the innovative apps we’ve crafted to empower Rwanda and
            beyond.
          </p>
        </section>

        {/* App Listings 
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Featured Apps</h2>
          <div className={styles.appGrid}>
            {apps.map((app) => (
              <div key={app.id} className={styles.appCard}>
                <h3 className={styles.appName}>{app.name}</h3>
                <p className={styles.text}>{app.description}</p>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  className={styles.screenshotSwiper}
                >
                  {app.screenshots.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`${app.name} screenshot ${index + 1}`}
                        className={styles.screenshot}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className={styles.downloadButtons}>
                  <a
                    href={app.iosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <Icon icon="mdi:apple" /> App Store
                  </a>
                  <a
                    href={app.androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <Icon icon="mdi:android" /> Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
*/}
        {/* CTA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Have an App Idea?</h2>
          <p className={styles.text}>
            Let’s build it together! Share your ideas or join our community of
            innovators.
          </p>
          <a href="www.coodic.com/contact" className={styles.ctaButton}>
            Contact Us
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default AppStorePage;
