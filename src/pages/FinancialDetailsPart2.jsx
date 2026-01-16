// src/pages/FinancialDetailsPart2.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css'; // Reusing styles

const FinancialDetailsPart2 = () => {
    const navigate = useNavigate();
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Financial Details Part 2 Submitted", { selectedTags });
        navigate('/goals');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.inputGroup}>
                    <label style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                        Which of these regular monthly expenses apply to you?
                    </label>

                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Select all that apply</option>
                            <option value="housing">Housing</option>
                            <option value="subscriptions">Subscriptions</option>
                        </select>
                        <FaChevronDown className={styles.selectArrow} />
                    </div>

                    <div className={styles.tags}>
                        <button
                            type="button"
                            className={`${styles.tag} ${selectedTags.includes('Rent / housing') ? styles.tagSelected : ''}`}
                            onClick={() => toggleTag('Rent / housing')}
                        >
                            Rent / housing
                        </button>
                        <button
                            type="button"
                            className={`${styles.tag} ${selectedTags.includes('Subscriptions') ? styles.tagSelected : ''}`}
                            onClick={() => toggleTag('Subscriptions')}
                        >
                            Subscriptions
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1rem' }}>
                        You can change all of this later.
                    </p>
                    <button type="submit" className={styles.nextBtn} onClick={handleSubmit}>
                        Next <span className={styles.arrow}>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinancialDetailsPart2;
