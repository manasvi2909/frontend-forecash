// src/pages/GoalsPart2.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css'; // Reusing styles

const GoalsPart2 = () => {
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
        console.log("Goals Part 2 Submitted", { selectedTags });
        // Navigate to Tax Details
        navigate('/tax-details-2');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <form className={styles.form} onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                    {/* Question 1 */}
                    <div className={styles.inputGroup}>
                        <label style={{ lineHeight: '1.4' }}>
                            What kind of decision is it?
                        </label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>Select all that apply</option>
                                <option value="vehicle">Vehicle</option>
                                <option value="home">Home</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', margin: '0.2rem 0 0.5rem 0' }}>
                            We'll help you understand when and whether it's feasible.
                        </p>

                        <div className={styles.tags}>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Vehicle') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Vehicle')}
                            >
                                Vehicle
                            </button>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Home or rental move') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Home or rental move')}
                            >
                                Home or rental move
                            </button>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className={styles.inputGroup}>
                        <label style={{ lineHeight: '1.4', marginTop: '1.5rem' }}>
                            Which best describes how you think about your finances long-term?
                        </label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>e.g. Planning for stability</option>
                                <option value="stability">Planning for stability</option>
                                <option value="growth">Aggressive Growth</option>
                                <option value="balanced">Balanced Approach</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', margin: '0.2rem 0 0.5rem 0' }}>
                            There's no wrong answer, this shapes how we frame insights
                        </p>
                    </div>

                    <div className={styles.footer} style={{ marginTop: '2rem' }}>
                        <button type="submit" className={styles.nextBtn}>
                            Next <span className={styles.arrow}>→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GoalsPart2;
