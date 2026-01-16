// src/pages/SignUp.jsx
import React from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // In a real app, you would handle registration here
        navigate('/personal-details');
    };

    return (
        <div className={styles.container}>
            <div className={styles.bgLogo}></div>

            <div className={styles.card}>
                <h1 className={styles.title}>Sign Up</h1>
                <p className={styles.subtitle}>Plan tomorrow's money today</p>

                <div className={styles.socialButtons}>
                    <button className={styles.socialBtn}><FaGoogle /></button>
                    <button className={styles.socialBtn}><FaApple /></button>
                    <button className={styles.socialBtn}><FaFacebook /></button>
                </div>

                <form className={styles.form} onSubmit={handleSignUp}>
                    <div className={styles.inputGroup}>
                        <label>Username</label>
                        <input type="text" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>E-mail</label>
                        <input type="email" placeholder="johndoe@xyz.com" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" placeholder="minimum 8 characters" className={styles.input} />
                    </div>

                    <button type="submit" className={styles.signUpBtn}>
                        Sign Up <span className={styles.arrow}>→</span>
                    </button>
                </form>

                <div className={styles.footer}>
                    Already have an account? <Link to="/login" className={styles.link}>Log in</Link>
                </div>
            </div>

            <img src="/assets/logo_black.png" alt="ForeCash Logo" className={styles.logoBottomRight} />
        </div>
    );
};

export default SignUp;
