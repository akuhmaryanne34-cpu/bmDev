import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navWrapper}>
      <header className={styles.navbar}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Link to="/">BMDev</Link>
        </div>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Link to="/contact">
            <button>Let’s Talk</button>
          </Link>
        </div>

        {/* HAMBURGER */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </div>
  );
}
