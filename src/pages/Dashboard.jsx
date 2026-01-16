// src/pages/Dashboard.jsx
import React from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            {/* Sidebar */}
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <img src="/assets/dashboard/header_logo_dots.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoLabel}>Fore<b>Cash</b></span>
                </div>

                <div className={styles.sidebarMenu}>
                    {/* Active State: Dashboard */}
                    <div className={`${styles.menuItem} ${styles.activeItem}`}>
                        <BiGridAlt size={24} />
                        <span className={styles.menuLabel}>Dashboard</span>
                    </div>

                    {/* Inactive Items */}
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
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.brandTitle}>
                        <span>Fore</span><b>Cash</b>
                    </div>

                    <div className={styles.headerControls}>
                        <button className={styles.controlBtn}>
                            <BiExport size={20} />
                        </button>
                        <button className={styles.controlBtn}>
                            ENG | <FaGlobe />
                        </button>
                        <div className={styles.iconCircle} onClick={() => navigate('/preferences')} style={{ cursor: 'pointer' }}>
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

                {/* Dashboard Grid */}
                <div className={styles.grid}>

                    {/* 1. Visual Composition Card */}
                    <div className={styles.visualContainer}>
                        <div className={styles.visualBg}>
                            <img src="/assets/dashboard/rectangular_20.png" alt="" className={styles.bgImage} />
                        </div>

                        {/* Chrome, then Sphere on top */}
                        <img src="/assets/dashboard/chrome_shape.png" alt="Abstract" className={styles.chrome} />
                        <img src="/assets/dashboard/green_sphere.png" alt="Sphere" className={styles.sphere} />

                        <div className={styles.blurOverlay}></div>
                    </div>

                    {/* 2. Spending Profile (Bubble Chart) */}
                    <div className={`${styles.card} ${styles.spendingCard}`}>
                        <h3 className={styles.cardTitle}>Your Spending Profile</h3>
                        <div className={styles.bubbleContainer}>
                            <div className={styles.bubbleGreen}>
                                70%
                            </div>
                            <div className={styles.bubbleBlack}>
                                20%
                            </div>
                            <div className={styles.bubbleGrey}>
                                10%
                            </div>
                        </div>
                        <div className={styles.legendList}>
                            <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#73A981' }}></span> Entertainment</div>
                            <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#000' }}></span> Food & Drinks</div>
                            <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#ddd' }}></span> Health</div>
                        </div>
                    </div>

                    {/* 3. Tax Breakdown */}
                    <div className={`${styles.card} ${styles.taxCard}`}>
                        <div className={styles.graphHeader}>
                            <div>
                                <h3 className={styles.cardTitle} style={{ marginBottom: 0 }}>Tax</h3>
                                <h3 className={styles.cardTitle}>Breakdown</h3>
                            </div>
                            <span style={{ color: '#999', fontSize: '0.9rem' }}>2025</span>
                        </div>
                        <div className={styles.barGraph}>
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                <div key={i} className={styles.barCol}>
                                    <div className={styles.barFill} style={{ height: `${30 + Math.random() * 60}%` }}>
                                        <div className={styles.barTop}></div>
                                    </div>
                                    <span className={styles.barLabel}>{d}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.taxDetails}>
                            <div className={styles.taxRow}>
                                <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}><span className={styles.dot} style={{ background: '#9bc5a6' }}></span> Salary</span>
                                <b>$7,213</b>
                            </div>
                            <div className={styles.taxRow}>
                                <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}><span className={styles.dot} style={{ background: '#bbb' }}></span> Invest</span>
                                <b>$5,662</b>
                            </div>
                        </div>
                    </div>

                    {/* 4. Savings Pace (Wrapped in white) */}
                    <div className={styles.rightWrapper}>
                        <div className={styles.greenFillContainer}>
                            <div className={styles.greenFillBar} style={{ height: '58%' }}></div>
                            <div className={styles.greenCardContent}>
                                <div className={styles.pillLabel}>Savings Pace</div>
                                <div className={styles.pillValue}>58%</div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Credit Score */}
                    <div className={`${styles.card} ${styles.creditCard}`}>
                        <div className={styles.gaugeWrapper}>
                            <div className={styles.gaugeArch}></div>
                            <div className={styles.scoreText}>
                                <div className={styles.scoreNumber}>821</div>
                                <div className={styles.scoreLabel}>Your credit score is<br />Updated Mar 24</div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Cash Flow */}
                    <div className={`${styles.card} ${styles.cashFlowCard}`}>
                        <div className={styles.cashHeader}>
                            <div>
                                <h3 className={styles.cardTitle}>Cash Flow 2025</h3>
                                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                    <span className={styles.bigAmount}>$12.7k</span>
                                    <span className={styles.subtitle} style={{ color: '#2e7d32' }}>▲ 1.3% VS LAST YEAR</span>
                                </div>
                            </div>
                            <div className={styles.timeFilters}>
                                <button className={styles.filter}>Daily</button>
                                <button className={styles.filter}>Weekly</button>
                                <button className={`${styles.filter} ${styles.filterActive}`}>Annually</button>
                            </div>
                        </div>
                        <div className={styles.lineGraph}>
                            {/* SVG Mockup - Fitted nicely */}
                            <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#dbece2', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f0faf4', stopOpacity: 0.5 }} />
                                    </linearGradient>
                                </defs>
                                <path d="M0,150 C150,50 300,180 500,80 C600,30 700,120 800,50 L800,200 L0,200 Z" fill="url(#gradFlow)" />
                                <path d="M0,150 C150,50 300,180 500,80 C600,30 700,120 800,50" fill="none" stroke="#2e7d32" strokeWidth="4" />
                                {/* Tooltip dot */}
                                <circle cx="500" cy="80" r="8" fill="#000" stroke="#fff" strokeWidth="2" />
                            </svg>
                            <div className={styles.tooltip} style={{ position: 'absolute', top: '30%', left: '62%', background: '#000', color: '#fff', padding: '5px 10px', borderRadius: 8, fontSize: '0.7rem' }}>
                                <div>6 Apr</div>
                                <div style={{ fontWeight: 'bold' }}>$3,348</div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Forecast Confidence (Wrapped in white) */}
                    <div className={styles.rightWrapperBottom}>
                        <div className={styles.greenFillContainer} style={{ justifyContent: 'flex-end', paddingBottom: '2rem' }}>
                            <div className={styles.greenFillBar} style={{ height: '90%' }}></div>
                            <div className={styles.greenCardContent}>
                                <div className={styles.pillLabel}>Forecast<br />Confidence</div>
                                <div className={styles.pillValue}>90%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;
