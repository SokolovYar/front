import React, { useState } from "react";
import { useAuth } from "../../app/providers/AuthProvider";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const { signup } = useAuth();
  const [form, setForm] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    userRole: "customer"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Паролі не збігаються");
      return;
    }

    const payload = {
      userName: form.userName,
      fullName: form.fullName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      password: form.password,
      rememberMe: true,
      userRole: form.userRole
    };

    try {
      console.log("начинается регистрация с данными:", payload);
      await signup(payload);
      console.log("Пользователь успешно зарегистрирован");
    } catch (err) {
      console.error("Ошибка при регистрации:", err);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="userName"
          placeholder="Ім'я"
          value={form.userName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="fullName"
          placeholder="Прізвище"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Пошта"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="confirmPassword"
          placeholder="Підтвердіть пароль"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="city"
          placeholder="Місто"
          value={form.city}
          onChange={handleChange}
        />
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="terms"
            name="terms"
          />
          <label htmlFor="terms" className={styles.checkboxLabel}>
            З <a href="/terms" className={styles.termsLink}>правилами сервісу</a> погоджуюсь
          </label>
        </div>
        <button className={`button ${styles.submitButton}`} type="submit">
          Зареєструватися
        </button>
      </form>
    </>
  );
}


