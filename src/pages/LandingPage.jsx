// src/pages/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero';
import WhyForeCash from '../components/WhyForeCash';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <>
            <div className="studio-bg"></div>
            <div className={styles.snapContainer}>
                <div className={styles.section}>
                    <div className="bg-text">
                        <span>FORECASH</span>
                    </div>
                    <Hero />
                </div>
                <div className={styles.section}>
                    <WhyForeCash />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
