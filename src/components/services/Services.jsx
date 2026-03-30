import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.grid}>
        {/* FRONTEND */}
        <div className={styles.card}>
          <span className={styles.label}>01</span>

          <h3>Frontend Development</h3>
          <p>
            We build modern, responsive and visually engaging interfaces that
            deliver seamless user experiences across all devices.
          </p>

          <span className={styles.link}>About Frontend →</span>
        </div>

        {/* BACKEND */}
        <div className={styles.card}>
          <span className={styles.label}>02</span>

          <h3>Backend Development</h3>
          <p>
            We develop secure, scalable and efficient backend systems that power
            your applications and ensure smooth performance.
          </p>

          <span className={styles.link}>About Backend →</span>
        </div>

        {/* SEO */}
        <div className={styles.card}>
          <span className={styles.label}>03</span>

          <h3>SEO & Optimization</h3>
          <p>
            We optimize your website for speed, visibility and search rankings
            to attract more traffic and convert users into customers.
          </p>

          <span className={styles.link}>About SEO →</span>
        </div>
      </div>
    </section>
  );
}
