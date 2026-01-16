import React from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart, BiUser, BiLockAlt, BiChevronDown, BiTargetLock } from "react-icons/bi";
import { BsBank, BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineWbSunny, MdLocationOn } from "react-icons/md";
import { IoSettingsSharp, IoWalletOutline } from "react-icons/io5";
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Preferences.module.css';

const Preferences = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Sidebar (Reused) */}
            <aside className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <img src="/assets/dashboard/header_logo_dots.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoLabel}>Fore<b>Cash</b></span>
                </div>

                <div className={styles.sidebarMenu}>
                    <div className={styles.menuItem} onClick={() => navigate('/dashboard')}>
                        <div className={styles.iconCircle}>
                            <BiGridAlt size={24} />
                        </div>
                        <span className={styles.menuLabel}>Dashboard</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => navigate('/expense-logs')}>
                        <div className={styles.iconCircle}>
                            <BiTransfer size={24} />
                        </div>
                        <span className={styles.menuLabel}>Expense Logs</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => navigate('/forecaster')}>
                        <div className={styles.iconCircle}>
                            <BiLineChart size={24} />
                        </div>
                        <span className={styles.menuLabel}>Forecaster</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => navigate('/tax-details')}>
                        <div className={styles.iconCircle}>
                            <BsBank size={22} />
                        </div>
                        <span className={styles.menuLabel}>Tax Assistant</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => navigate('/fin-pilot')}>
                        <div className={styles.iconCircle}>
                            <BiMessageSquareDots size={24} />
                        </div>
                        <span className={styles.menuLabel}>FinPilot</span>
                    </div>
                </div>

                <div className={styles.sidebarBottom}>
                    <div className={`${styles.iconCircle} ${styles.activeIcon}`}>
                        <MdOutlineWbSunny size={24} />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.brandTitle}>
                        <span>Fore</span><b>Cash</b>
                    </div>
                    <div className={styles.headerControls}>
                        <button className={styles.controlBtn}><BiExport size={20} /></button>
                        <button className={styles.controlBtn}>ENG | <FaGlobe /></button>
                        {/* Settings Icon - Active or just clickable */}
                        <div className={styles.iconCircle} style={{ background: '#000', color: '#fff' }} onClick={() => navigate('/preferences')}>
                            <IoSettingsSharp />
                        </div>
                        <div className={styles.userPill}>
                            <span>Emma</span>
                            <div className={styles.avatar}>
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Emma" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className={styles.preferencesCard}>
                    {/* Sticky Header */}
                    <h1 className={styles.pageTitle}>Preferences</h1>

                    {/* Profile Settings */}
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIconCircle}>
                            <BiUser />
                        </div>
                        <span className={styles.sectionTitle}>Profile Settings</span>
                    </div>
                    <p className={styles.sectionSubtitle}>Update your personal information</p>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>First Name</label>
                            <input type="text" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Last Name</label>
                            <input type="text" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Username</label>
                            <input type="text" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Profile Picture</label>
                            <input type="text" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>New Password</label>
                            <div className={styles.inputWithIconWrapper}>
                                <BiLockAlt className={styles.inputIcon} size={20} />
                                <input type="password" className={`${styles.input} ${styles.inputIndented}`} style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Currency and Location */}
                    <div className={styles.settingsGrid}>
                        {/* Currency */}
                        <div className={styles.settingCol}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIconCircle}>
                                    <BsCurrencyDollar />
                                </div>
                                <span className={styles.sectionTitle}>Currency</span>
                            </div>
                            <p className={styles.sectionSubtitle} style={{ marginBottom: '1rem' }}>Select your preferred display currency</p>

                            <div className={styles.dropdownContainer}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={styles.flagIcon}>🇺🇸</span>
                                    <span className={styles.dropdownText}>USD ($)</span>
                                </div>
                                <BiChevronDown size={24} />
                            </div>
                        </div>

                        {/* Location */}
                        <div className={styles.settingCol}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIconCircle}>
                                    <MdLocationOn />
                                </div>
                                <span className={styles.sectionTitle}>Location</span>
                            </div>
                            <p className={styles.sectionSubtitle} style={{ margin: '1rem 0 1rem 65px' }}> &nbsp; </p> {/* Spacer to align */}

                            <div className={styles.dropdownContainer}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={styles.flagIcon}>🇮🇳</span>
                                    <span className={styles.dropdownText}>India</span>
                                </div>
                                <BiChevronDown size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Regular Monthly Expenses */}
                    <div style={{ marginTop: '40px' }}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIconCircle}>
                                <IoWalletOutline />
                            </div>
                            <span className={styles.sectionTitle}>Regular Monthly Expenses</span>
                        </div>
                        <p className={styles.sectionSubtitle}>Update your personal monthly expenses</p>

                        <div className={styles.dropdownSelect}>
                            <span>Select all that apply</span>
                            <BiChevronDown size={24} />
                        </div>
                        <div className={styles.tagRow}>
                            <div className={styles.tagPill}>Rent / housing</div>
                            <div className={styles.tagPill}>Subscriptions</div>
                        </div>
                    </div>

                    {/* Your Goals */}
                    <div style={{ marginTop: '40px' }}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIconCircle}>
                                <BiTargetLock />
                            </div>
                            <span className={styles.sectionTitle}>Your Goals</span>
                        </div>
                        <p className={styles.sectionSubtitle}>Update your personal short term goals</p>

                        <div className={styles.dropdownSelect}>
                            <span>Select all that apply</span>
                            <BiChevronDown size={24} />
                        </div>
                        <div className={styles.tagRow}>
                            <div className={styles.tagPill}>Building an emergency fund</div>
                            <div className={styles.tagPill}>Paying Down Debt</div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <button className={styles.saveBtn}>Save Changes</button>

                </div>
            </main>
        </div>
    );
};

export default Preferences;
