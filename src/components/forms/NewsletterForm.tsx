import React from "react";
import styles from "./NewsletterForm.module.scss";

export const NewsletterForm: React.FC = () => {
  return (
    <form className={styles.subscriptionForm}>
      <div className={styles.inputWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a83c7004e7476e75720ef5890bd02f4da1519765480c3129f3e26666e96afa6?placeholderIfAbsent=true&apiKey=2b6ea40afe1141af987773ce3af91aae"
          alt=""
          className={styles.emailIcon}
        />
        <label htmlFor="emailInput" className={styles["visually-hidden"]}>
          Enter your email
        </label>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Send Now!
      </button>
    </form>
  );
};
