import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Icon } from "@iconify/react";
import styles from "./contact.module.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - replace with real backend logic later
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Coodic for inquiries or collaboration"
    >
      <main className={styles.mainContent}>
        {/* Header */}
        <section className={styles.section}>
          <h1 className={styles.title}>
           Contact Us
          </h1>
          <p className={styles.text}>
            We’d love to hear from you! Reach out for questions, partnerships,
            or just to say hi.
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className={styles.section}>
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.subtitle}>Send a Message</h2>
              {submitted ? (
                <p className={styles.success}>
                  Thank you! We’ll get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={styles.textarea}
                    />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className={styles.infoContainer}>
              <h2 className={styles.subtitle}>Get in Touch</h2>
              <ul className={styles.contactList}>
                <li>
                  <Icon icon="mdi:email-outline" className={styles.infoIcon} />
                  info@coodic.com
                </li>
                <li>
                  <Icon icon="mdi:phone" className={styles.infoIcon} />
                  <span>+250 783 897 863</span>
                </li>
                <li>
                  <Icon icon="mdi:github" className={styles.infoIcon} />
                  <a
                    href="https://github.com/coodic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Icon icon="mdi:slack" className={styles.infoIcon} />
                  <a
                    href="https://join.slack.com/t/coodic/shared_invite/zt-33ew026hv-tAUobFrtTwh3DAZ2Cu25Gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    Slack
                  </a>
                </li>
                <li>
                  <Icon icon="mdi:linkedin" className={styles.infoIcon} />
                  <a
                    href="https://www.linkedin.com/company/coodic/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* add your Google Maps API key if desired */}
        {/* 
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.528395214255!2d30.05848731475451!3d-1.944072698599999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMzguNyJTIDMwwrAwMyczMC42IkU!5e0!3m2!1sen!2sus!4v1631234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className={styles.map}
          ></iframe>
        </section>
        */}
      </main>
    </Layout>
  );
};

export default ContactPage;
