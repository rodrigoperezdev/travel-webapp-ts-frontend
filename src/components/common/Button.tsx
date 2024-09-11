import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  disabled,
}) => {
  const classNames = `${styles.btn} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return <button className={classNames}>{label}</button>;
};
