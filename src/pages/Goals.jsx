// src/pages/Goals.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css'; // Reusing styles

const Goals = () => {
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
        console.log("Goals Submitted", { selectedTags });
        // Navigate to Goals Part 2
        navigate('/goals-2');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Goals</h1>
                <p className={styles.subtitle}>
                    Everything you hope to achieve with your finances
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Question 1 */}
                    <div className={styles.inputGroup}>
                        <label style={{ lineHeight: '1.4' }}>
                            Are you currently working toward any short-term financial goals? (Next 3-12 months)
                        </label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>Select all that apply</option>
                                <option value="emergency_fund">Emergency Fund</option>
                                <option value="debt">Debt</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', margin: '0.2rem 0 0.5rem 0' }}>
                            This helps us prioritize what advice to give you.
                        </p>
                        <div className={styles.tags}>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Building an emergency fund') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Building an emergency fund')}
                            >
                                Building an emergency fund
                            </button>
                            <button
                                type="button"
                                className={`${styles.tag} ${selectedTags.includes('Paying Down Debt') ? styles.tagSelected : ''}`}
                                onClick={() => toggleTag('Paying Down Debt')}
                            >
                                Paying Down Debt
                            </button>
                        </div>
                    </div>

                    {/* Question 2 - Radio Buttons */}
                    <div className={styles.inputGroup}>
                        <label style={{ lineHeight: '1.4' }}>
                            Are you planning any major purchases or financial decisions soon?
                        </label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="major_purchases" value="yes" />
                                Yes
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="major_purchases" value="no" defaultChecked />
                                No
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="major_purchases" value="notsure" />
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

export default Goals;
