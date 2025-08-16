import React, { useState } from "react";
import { useAuth } from "../../app/providers/AuthProvider";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("начинается вход с данными:", form);
      await login(form);
      console.log("Пользователь успешно вошёл в систему");
    } catch (err) {
      console.error("Ошибка при логине:", err);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Пошта"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            onChange={handleChange}
          />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>
            Запам'ятати мене
          </label>
        </div>
        <button className={`button ${styles.submitButton}`} type="submit">
          Увійти
        </button>
      </form>
    </>
  );
}


