import { Button } from '../Button/Button';
import styles from './EmailForm.module.css';
import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('Email');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regexEmail.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email) {
      // handle form submission
      alert('Welcome to the team!');
    } else {
      alert('Email is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder={email}
            value={email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <Button filled content="Join" type="submit" />
      </div>
    </form>
  );
};

export default EmailForm;
