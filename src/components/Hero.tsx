import React from "react";
import styles from "./Hero.module.css";

// Primary color: #35A000 (green)
// Secondary color: #4C4C4C (dark gray)
// Background: white with light gray sections

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title} >Empower Your Business with Cutting‑Edge Solutions</h1>
        <p className={styles.subtitle}>
          We build intelligent, scalable, and secure digital products that drive growth and innovation.
        </p>
        <div className={styles.actions}>
          <a href="/industries" className={styles.primaryBtn}>Explore Products</a>
          <a href="/contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
