import React from "react";
import LoginForm from "../../shared/ui/LoginForm";
import InfoPlate from "../Signup/InfoPlate";
import styles from "./ui/LoginPage.module.css";


export default function LoginPage() {

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} ${styles['wrapper-left']}`}>
          <InfoPlate />
        </div>
        <div className={styles.divider}></div>
        <div className={`${styles.wrapper} ${styles['wrapper-right']}`}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
