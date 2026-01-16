// src/pages/ForgotPassword.jsx
import React from 'react';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bgLogo}></div>

            <div className={styles.card}>
                <h1 className={styles.title}>Forgot your Password?</h1>
                <p className={styles.subtitle}>We've got you covered</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Username</label>
                        <input type="text" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>E-mail</label>
                        <input type="email" placeholder="johndoe@xyz.com" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>New Password</label>
                        <input type="password" placeholder="minimum 8 characters" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Reenter New Password</label>
                        <input type="password" className={styles.input} />
                    </div>

                    <button type="submit" className={styles.resetBtn}>
                        Reset Password <span className={styles.arrow}>→</span>
                    </button>
                </form>
            </div>

            <img src="/assets/logo_black.png" alt="ForeCash Logo" className={styles.logoBottomRight} />
        </div>
    );
};

export default ForgotPassword;
