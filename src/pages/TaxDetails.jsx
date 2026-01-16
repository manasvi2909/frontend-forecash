// src/pages/TaxDetails.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinancialDetails.module.css'; // Reusing styles

const TaxDetails = () => {
    const navigate = useNavigate();

    const [country, setCountry] = useState('India');
    const [region, setRegion] = useState('');
    const [currency, setCurrency] = useState('Rupees');

    const [availableRegions, setAvailableRegions] = useState([]);

    // Update regions when country changes
    useEffect(() => {
        if (country === 'India') {
            setAvailableRegions(['Delhi', 'Mumbai']);
            setRegion(''); // Reset region selection
        } else if (country === 'America') {
            setAvailableRegions(['Texas', 'California']);
            setRegion(''); // Reset region selection
        } else {
            setAvailableRegions([]);
        }
    }, [country]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tax Details Submitted", { country, region, currency });
        navigate('/dashboard'); // Placeholder
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Location & Rules</h1>
                <p className={styles.subtitle}>
                    Enable hyper-localized tax, loan, and regulation logic.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>

                    {/* Country Input */}
                    <div className={styles.inputGroup}>
                        <label>Which country do you currently live in?</label>
                        <div className={styles.selectWrapper}>
                            <select
                                className={styles.select}
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="India">India</option>
                                <option value="America">America</option>
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.7rem', color: '#999', margin: '0.3rem 0', textAlign: 'right' }}>
                            Used to apply the correct tax and financial rules.
                        </p>
                    </div>

                    {/* Region Input */}
                    <div className={styles.inputGroup}>
                        <label>Which state or region applies to you?</label>
                        <div className={styles.selectWrapper}>
                            <select
                                className={styles.select}
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="" disabled>Select state</option>
                                {availableRegions.map(r => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                            <FaChevronDown className={styles.selectArrow} />
                        </div>
                        <p style={{ fontSize: '0.7rem', color: '#999', margin: '0.3rem 0', textAlign: 'right' }}>
                            Some financial rules vary by region.
                        </p>
                    </div>

                    {/* Currency Input */}
                    <div className={styles.inputGroup}>
                        <label>Which currency do you use for your taxes?</label>
                        <div className={styles.selectWrapper}>
                            <select
                                className={styles.select}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="Rupees">Rupees</option>
                                <option value="Dollar">Dollar</option>
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

export default TaxDetails;
