// src/components/WhyForeCash.jsx
import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import styles from './WhyForeCash.module.css';

const WhyForeCash = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Why ForeCash?'; // The text to type
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            setTypedText(current => {
                if (!isDeleting) {
                    // Typing
                    if (current.length < fullText.length) {
                        return fullText.slice(0, current.length + 1);
                    } else {
                        // Finished typing, wait then delete
                        setTimeout(() => setIsDeleting(true), 2000);
                        return current;
                    }
                } else {
                    // Deleting
                    if (current.length > 0) {
                        return fullText.slice(0, current.length - 1);
                    } else {
                        // Finished deleting, start over
                        setIsDeleting(false);
                        return '';
                    }
                }
            });
        };

        const speed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting]);

    return (
        <div className={styles.container}>
            {/* Floating 3D Shapes */}
            <img src="/assets/chrome_sphere.png" alt="Sphere" className={styles.shapeSphere} />
            <img src="/assets/chrome_abstract_1.png" alt="Abstract 1" className={styles.shapeAbstract1} />
            <img src="/assets/chrome_abstract_2.png" alt="Abstract 2" className={styles.shapeAbstract2} />

            {/* Center Content */}
            <div className={styles.content}>
                <div className={styles.searchBar}>
                    <div className={styles.iconWrapper}>
                        <FaDollarSign className={styles.icon} />
                    </div>
                    <span className={styles.searchText}>
                        {typedText}
                        <span style={{ animation: 'blink 1s step-end infinite', opacity: 0.7 }}>|</span>
                    </span>
                </div>

                <p className={styles.headline}>
                    Because knowing what's coming matters more than tracking what's gone
                </p>

                <p className={styles.description}>
                    We model your future cash flow using real math so you can see risks and
                    opportunities before they happen
                </p>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <p>Not a tracker. Not a budget diary. A forecasting copilot.</p>
                <img src="/assets/logo_black.png" alt="ForeCash" className={styles.logo} />
            </div>
        </div>
    );
};

export default WhyForeCash;
