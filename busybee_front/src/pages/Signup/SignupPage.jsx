import React from "react";
import RegistrationForm from "../../shared/ui/RegistrationForm";
import InfoPlate from "./InfoPlate";
import styles from "./ui/SignupPage.module.css";
import { testAuth } from "../../entities/user/api/authApi";

export default function SignupPage() {

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} ${styles['wrapper-left']}`}>
          <InfoPlate />
        </div>
        <div className={styles.divider}></div>
        <div className={`${styles.wrapper} ${styles['wrapper-right']}`}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}
