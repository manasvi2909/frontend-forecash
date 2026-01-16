import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css'; // Reusing styles

const TaxDetails2 = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Location & Rules</h1>

                <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                    Enable hyper-localized tax, loan, and regulation logic.
                    <br />
                    Which country do you currently live in?
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Country */}
                    <div className={styles.inputGroup}>
                        <div className={styles.selectWrapper}>
                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                {/* Placeholder for flag icon */}
                                <img src="https://flagcdn.com/w20/in.png" alt="India" style={{ width: 20, marginRight: 8 }} />
                            </div>
                            <select className={styles.select} style={{ paddingLeft: '40px' }} defaultValue="India">
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', margin: '0.2rem 0 0.5rem 0', textAlign: 'right' }}>
                            Used to apply the correct tax and financial rules.
                        </p>
                    </div>

                    {/* State/Region */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Which state or region applies to you?</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled>e.g. Delhi</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Karnataka">Karnataka</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', margin: '0.2rem 0 0.5rem 0', textAlign: 'right' }}>
                            Some financial rules vary by region.
                        </p>
                    </div>

                    {/* Currency */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Which currency do you use for your taxes?</label>
                        <div className={styles.selectWrapper}>
                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                <img src="https://flagcdn.com/w20/us.png" alt="USD" style={{ width: 20, marginRight: 8 }} />
                            </div>
                            <select className={styles.select} style={{ paddingLeft: '40px' }} defaultValue="USD">
                                <option value="USD">USD ($)</option>
                                <option value="INR">INR (₹)</option>
                                <option value="EUR">EUR (€)</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
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

export default TaxDetails2;
