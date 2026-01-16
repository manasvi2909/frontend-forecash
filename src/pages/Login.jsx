// src/pages/Login.jsx
import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        console.log("Logged in");
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.bgLogo}></div>

            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>Ready to continue?</p>

                <div className={styles.socialButtons}>
                    <button className={styles.socialBtn}><FaGoogle /></button>
                    <button className={styles.socialBtn}><FaApple /></button>
                    <button className={styles.socialBtn}><FaFacebook /></button>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Username</label>
                        <input type="text" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className={styles.input}
                        />
                        <button
                            type="button"
                            className={styles.eyeIcon}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <Link to="/forgot-password" className={styles.forgotPassword}>Forgot Password?</Link>

                    <button type="submit" className={styles.signInBtn}>
                        Sign In <span className={styles.arrow}>→</span>
                    </button>
                </form>

                <div className={styles.footer}>
                    New to ForeCash? <Link to="/signup" className={styles.link}>Sign Up</Link>
                </div>
            </div>

            <img src="/assets/logo_black.png" alt="ForeCash Logo" className={styles.logoBottomRight} />
        </div>
    );
};

export default Login;
