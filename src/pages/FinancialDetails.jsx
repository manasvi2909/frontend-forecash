// src/pages/FinancialDetails.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css';

const FinancialDetails = () => {
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
        console.log("Financial Details Submitted", { selectedTags });
        navigate('/financial-details-2');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Financial Life</h1>
                <p className={styles.subtitle}>
                    Describing your sources of income and expenses models future cash flow more accurately.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Question 1 */}
                    <div className={styles.inputGroup}>
                        <label>Which of these best describe how you earn money right now?</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>Select all that apply</option>
                                <option value="job">Job</option>
                                <option value="business">Business</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <div className={styles.tags}>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Scholarship') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Scholarship')}
                            >
                                Scholarship
                            </button>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Freelance') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Freelance')}
                            >
                                Freelance
                            </button>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className={styles.inputGroup}>
                        <label>How often do you usually receive income?</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>e.g. Monthly</option>
                                <option value="weekly">Weekly</option>
                                <option value="biweekly">Bi-weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                    </div>

                    {/* Question 3 - Radio Buttons */}
                    <div className={styles.inputGroup}>
                        <label>How often do you usually receive income?</label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="income_stability" value="yes" defaultChecked />
                                Yes
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="income_stability" value="no" />
                                No
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="income_stability" value="notsure" />
                                Not Sure
                            </label>
                        </div>
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

export default FinancialDetails;
