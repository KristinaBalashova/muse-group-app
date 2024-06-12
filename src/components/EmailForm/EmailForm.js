import { Button } from '../Button/Button';
import styles from './EmailForm.module.css';
import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };
  const validateEmail = (email) => {
    const regex = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;
    if (regex.test(email)) {
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
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <Button filled content="Submit" type="submit" />
      </div>
    </form>
  );
};

export default EmailForm;
