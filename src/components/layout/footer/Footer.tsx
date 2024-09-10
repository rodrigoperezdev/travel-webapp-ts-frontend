import React from "react";
import styles from "./Footer.module.scss";
import { NewsletterForm } from "../../forms/NewsletterForm";
import globeIcon from "../../../assets/images/icons/globe.svg";
import paymentLogos from "../../../assets/images/icons/payment-logos.png";
import { LinkList } from "./LinkList";

export const Footer: React.FC = () => {
  const services: string[] = [
    "Budget Tours",
    "Expert Insight",
    "Independent",
    "Luxury Tours",
    "Safety Tips",
    "Tips n Tricks",
  ];
  const adventures: string[] = [
    "Beach Activity",
    "Bungee Jump",
    "City Tour",
    "Hiking Trips",
    "Jungle Safari",
    "Night City Walk",
  ];
  const countries: string[] = [
    "USA",
    "Australia",
    "South Africa",
    "West Indies",
    "New Zealand",
    "México",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__quickLinks}>
        <div className={styles.footer__quickLinksContainer}>
          <h5>QUICK LINKS</h5>
          <h5 className={styles.footer__moreCategories}>
            Explore more categories
          </h5>
        </div>

        <div className={styles.footer__contactInfo}>
          <h5>0123-456-324-54 | hello@entrada.com</h5>
        </div>
      </div>
      <div className={styles.footer__divider}></div>
      <div className={styles.footer__headerContainer}>
        <div className={styles.footer__titleWrapper}>
          <h4>Get in touch</h4>
          <h2>
            Adventures Calling <br /> You Guys!
          </h2>
        </div>
        <div className={styles.footer__officeInfo}>
          <img src={globeIcon} />
          <div>
            <h5>Our Offices</h5>
            <h5>Zapopan, México.</h5>
          </div>
        </div>
      </div>
      <div className={styles.footer__divider} />
      <div className={styles.footer__content}>
        <div className={styles.footer__links}>
          <LinkList title={"Services"} items={services} />
          <LinkList title={"Adventures"} items={adventures} />
          <LinkList title={"Country"} items={countries} />
        </div>
        <div className={styles.footer__contactSection}>
          <h4>Get In Touch</h4>
          <h2>Let's Talk</h2>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className={styles.footer__bottomLinks}>
        <h5>Privacy Policy</h5>
        <h5>Linkedin / Facebook / Instagram</h5>
      </div>
      <div className={styles.footer__divider} />
      <div className={styles.footer__copyright}>
        <p>2016-2024 © Emprise</p>
        <img
          src={paymentLogos}
          loading="lazy"
          alt="Payment logos: Visa, Mastercard, Paypal, Maestro, Bank Transfer"
        />
      </div>
    </footer>
  );
};
