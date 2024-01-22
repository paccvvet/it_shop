import React from "react";
import styles from "../../styles/Footer.module.css"
import Logo from "../../images/logo.svg"
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <section className={styles.footer}>

      <div className={styles.logo}>
        <Link to={"ROUTES.HOME"}>
          <img src={Logo} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a href="https://www.instagram.com/paccvvet/"
          target="_blank" rel="noreferrer">
          Rassvet
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://www.instagram.com/"
          target="_blank" rel="noreferrer">
          <svg className={styles["icon-cart"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://www.facebook.com/"
          target="_blank" rel="noreferrer">
          <svg className={styles["icon-cart"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://www.youtube.com/"
          target="_blank" rel="noreferrer">
          <svg className={styles["icon-cart"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  )
};

export default Footer;