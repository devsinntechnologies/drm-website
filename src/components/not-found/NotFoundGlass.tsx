import Link from "next/link";
import styles from "./NotFoundGlass.module.css";

/** Frosted-glass 404. Server-rendered and CSS-only, so it works without JavaScript. */
export default function NotFoundGlass() {
  return (
    <section className={styles.stage} aria-labelledby="not-found-title">
      <div className={styles.lights} aria-hidden="true">
        <span className={`${styles.light} ${styles.lightBlue}`} />
        <span className={`${styles.light} ${styles.lightCyan}`} />
        <span className={`${styles.light} ${styles.lightSoft}`} />
      </div>

      <div className={styles.panel} data-no-tilt>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title" className={styles.title}>
          Page not found
        </h1>
        <p className={styles.description}>
          We couldn’t find the page you’re looking for. The link may be incorrect, or the page may have moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={`${styles.action} ${styles.primary}`}>
            Back to Home
          </Link>
          <Link href="/industries" className={`${styles.action} ${styles.secondary}`}>
            Explore Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
