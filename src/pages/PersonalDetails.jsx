// src/pages/PersonalDetails.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PersonalDetails.module.css';

const PersonalDetails = () => {
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        navigate('/financial-details');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Lets Get to Know You</h1>
                <p className={styles.subtitle}>Details to Personalize your Experience</p>

                <form className={styles.form} onSubmit={handleNext}>
                    <div className={styles.inputGroup}>
                        <label>First Name</label>
                        <input type="text" placeholder="e.g. Alex" className={styles.input} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label>Last Name</label>
                            <input type="text" placeholder="e.g. Doe" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Age</label>
                            <input type="text" placeholder="e.g. 25" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>What best describes your current work situation?</label>
                        <input type="text" placeholder="e.g. Student" className={styles.input} />
                    </div>

                    <div className={styles.footer}>
                        <button type="submit" className={styles.nextBtn}>
                            Next <span className={styles.arrow}>→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;
