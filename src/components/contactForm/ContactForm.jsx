"use client";
import React, { useState } from "react";
import styles from "./contactForm.module.css";
import { handleSubmit } from "../../utils/sendForm";

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
  };

  const onSubmit = async (event) => {
    await handleSubmit(event, setShowMessage);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name and Surname"
          required
        />
        <input type="email" name="email" placeholder="Email address" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
          minLength={6}
        ></textarea>
        <button>Send</button>
        {showMessage && (
          <div
            style={{
              backgroundColor: "#dff0d8",
              border: "1px solid #d6e9c6",
              color: "#3c763d",
              padding: "15px",
              borderRadius: "4px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Message sent successfully!</p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#3c763d",
                cursor: "pointer",
                fontSize: "16px",
                padding: "0",
              }}
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
