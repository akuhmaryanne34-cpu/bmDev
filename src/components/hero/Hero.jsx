import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  // 🔥 counter animation
  useEffect(() => {
    let start = 0;
    const end = 256;

    const interval = setInterval(() => {
      start += 5;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
  }, []);

  return (
    <section className={styles.hero}>
      {/* LEFT SIDE */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.tag}>● Digital Agency</div>
        <h1>
          Digital Agency <br />
          <span>For Growth</span>
        </h1>

        <p>
          We help businesses grow by creating stunning digital experiences that
          convert visitors into loyal customers.
        </p>

        <button className={styles.btn}>Get Started →</button>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* CEO CARD */}
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.avatar}>BM</div>

            <p className={styles.quote}>
              "We design and build digital products that turn ideas into
              scalable experiences."
            </p>
          </div>
        </div>

        {/* TEAM */}
        <div className={styles.team}>
          <img src="/team1.jpeg" alt="team" />
          <img src="/team2.jpeg" alt="team" />
          <span>Team Members</span>
        </div>

        {/* COUNTER */}
        <motion.div
          className={styles.stats}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>{count}+</h2>
          <p>Projects Done</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
