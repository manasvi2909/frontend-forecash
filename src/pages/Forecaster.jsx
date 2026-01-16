import React, { useState } from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart, BiSad, BiHappy, BiMeh } from "react-icons/bi";
import { BsBank, BsEmojiNeutral, BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Forecaster.module.css';

const Forecaster = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Sidebar */}
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

                    {/* Active */}
                    <div className={`${styles.menuItem} ${styles.activeItem}`}>
                        <BiLineChart size={24} />
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
                        <div className={styles.iconCircle} onClick={() => navigate('/preferences')} style={{ cursor: 'pointer' }}><IoSettingsSharp /></div>
                        <div className={styles.userPill}>
                            <span>Emma</span>
                            <div className={styles.avatar}>
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Emma" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className={styles.gridContainer}>
                    {/* CARD 1: Cash Flow 2025 */}
                    <div className={styles.card}>
                        <div className={styles.cashFlowHeader}>
                            <div>
                                <h3 className={styles.cardTitle}>Cash Flow 2025</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={styles.bigValue}>$12.7k</span>
                                    <span className={styles.greenBadge}>+1.3% VS LAST YEAR</span>
                                </div>
                            </div>
                            <div className={styles.toggleGroup}>
                                <button className={styles.toggleBtn}>Daily</button>
                                <button className={styles.toggleBtn}>Weekly</button>
                                <button className={`${styles.toggleBtn} ${styles.toggleActive}`}>Annually</button>
                            </div>
                        </div>
                        <div className={styles.areaChartContainer} style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                            {/* SVG Mockup for Green Wave */}
                            <svg width="100%" height="100%" viewBox="0 0 700 200" preserveAspectRatio="none" style={{ flex: 1, overflow: 'visible' }}>
                                <defs>
                                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#9cc6a5" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#9cc6a5" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,150 C50,140 80,100 120,120 C160,140 200,50 250,50 C300,50 350,80 400,70 C450,60 500,100 550,100 C600,100 650,150 700,50 L700,200 L0,200 Z"
                                    fill="url(#greenGrad)" stroke="none" />
                                <path d="M0,150 C50,140 80,100 120,120 C160,140 200,50 250,50 C300,50 350,80 400,70 C450,60 500,100 550,100 C600,100 650,150 700,50"
                                    fill="none" stroke="#2e7d32" strokeWidth="3" />
                                {/* Tooltip Point Mock */}
                                <circle cx="150" cy="115" r="5" fill="#000" />
                            </svg>
                            <div className={styles.tooltip} style={{ top: '30%', left: '20%' }}>
                                6 Apr<br /><b>$3,348</b>
                            </div>
                        </div>
                        <div className={styles.monthsRow}>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                        </div>
                    </div>

                    {/* CARD 2: Yearly Income Sources */}
                    <div className={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 className={styles.cardTitle}>Yearly Income <br /> Sources</h3>
                            <span style={{ color: '#aaa' }}>2025</span>
                        </div>
                        <div className={styles.donutContainer}>
                            <div className={styles.donutChart}>
                                <div className={styles.donutHole}>
                                    <span className={styles.incomeTotalLabel}>Total Income</span>
                                    <span className={styles.incomeTotalValue}>$24,000.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.donutLegend}>
                            <div className={styles.legendItem}><div className={styles.dotGreen}></div> Salary 65%</div>
                            <div className={styles.legendItem}><div className={styles.dotGrey}></div> Investments 35%</div>
                        </div>
                    </div>

                    {/* CARD 3: Predicted vs Actual */}
                    <div className={styles.card}>
                        <div className={styles.chartHeaderRow}>
                            <h3 className={styles.cardTitle}>Predicted Vs Actual Cash Flow</h3>
                            <div className={styles.legendCenter}>
                                <div className={styles.legendChartItem}><div className={styles.dotGreen}></div> Actual Cash</div>
                                <div className={styles.legendChartItem}><div className={styles.dotGrey} style={{ background: '#000' }}></div> Predicted Cash</div>
                            </div>
                            <div className={styles.toggleGroup}>
                                <button className={styles.toggleBtn}>Day</button>
                                <button className={styles.toggleBtn}>Week</button>
                                <button className={`${styles.toggleBtn} ${styles.toggleActive}`}>Month</button>
                                <button className={styles.toggleBtn}>Year</button>
                            </div>
                        </div>
                        {/* SVG Mockup for Lines */}
                        <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
                            <svg width="100%" height="100%" viewBox="0 0 710 160" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                                {/* Y Axis Mock */}
                                <text x="0" y="20" fontSize="10" fill="#999">4k</text>
                                <text x="0" y="50" fontSize="10" fill="#999">3k</text>
                                <text x="0" y="80" fontSize="10" fill="#999">2k</text>
                                <text x="0" y="110" fontSize="10" fill="#999">1k</text>
                                <text x="0" y="140" fontSize="10" fill="#999">0</text>
                                {/* Grid Lines */}
                                <line x1="20" y1="20" x2="100%" y2="20" stroke="#eee" />
                                <line x1="20" y1="50" x2="100%" y2="50" stroke="#eee" />
                                <line x1="20" y1="80" x2="100%" y2="80" stroke="#eee" />
                                <line x1="20" y1="110" x2="100%" y2="110" stroke="#eee" />
                                <line x1="20" y1="140" x2="100%" y2="140" stroke="#eee" />

                                {/* Predicted (Black) - just random polyline */}
                                <polyline points="30,80 100,50 180,80 300,20 400,80 500,110 600,80 700,20"
                                    fill="none" stroke="#000" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <circle cx="30" cy="80" r="3" fill="#fff" stroke="#000" strokeWidth="2" />
                                <circle cx="100" cy="50" r="3" fill="#fff" stroke="#000" strokeWidth="2" />
                                <circle cx="180" cy="80" r="3" fill="#fff" stroke="#000" strokeWidth="2" />
                                <circle cx="300" cy="20" r="3" fill="#fff" stroke="#000" strokeWidth="2" />
                                <circle cx="400" cy="80" r="3" fill="#fff" stroke="#000" strokeWidth="2" />
                                <circle cx="500" cy="110" r="3" fill="#fff" stroke="#000" strokeWidth="2" />

                                {/* Actual (Green) */}
                                <polyline points="30,130 100,100 180,90 250,115 330,60 410,40 480,50 550,30 650,50"
                                    fill="none" stroke="#2e7d32" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <circle cx="30" cy="130" r="3" fill="#fff" stroke="#2e7d32" strokeWidth="2" />
                                <circle cx="330" cy="60" r="3" fill="#fff" stroke="#2e7d32" strokeWidth="2" />
                                <circle cx="410" cy="40" r="3" fill="#fff" stroke="#2e7d32" strokeWidth="2" />

                                {/* Label */}
                                <rect x="360" y="20" width="50" height="25" rx="5" fill="#222" />
                                <text x="385" y="36" fill="#fff" textAnchor="middle" fontSize="12">$2,714</text>
                            </svg>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5, paddingLeft: 20, color: '#999', fontSize: '0.7rem' }}>
                                <span>1 Apr</span><span>3 Apr</span><span>7 Apr</span><span>10 Apr</span><span>14 Apr</span><span>20 Apr</span><span>23 Apr</span><span>27 Apr</span><span>30 Apr</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: Forecast Status */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Forecast Status</h3>
                        <div className={styles.statusContainer}>
                            <div className={styles.riskText}>
                                <span>Cash Flow Risk</span>

                            </div>
                            <div className={styles.riskMeter}>
                                <div className={`${styles.riskCircle} ${styles.riskCircleFilled}`}></div>
                                <div className={`${styles.riskCircle} ${styles.riskCircleFilled}`}></div>
                                <div className={`${styles.riskCircle} ${styles.riskCircleFilled}`}></div>
                                <div className={styles.riskCircle}></div>
                                <div className={styles.riskCircle}></div>
                            </div>
                            <div className={styles.moderateLabel}>Moderate</div>

                            <div className={styles.facesRow}>
                                <div className={styles.faceItem}>
                                    High Risk
                                    <BsEmojiFrown className={styles.faceIcon} />
                                </div>
                                <div className={styles.faceItem}>
                                    Moderate
                                    <BsEmojiNeutral className={styles.faceIcon} />
                                </div>
                                <div className={styles.faceItem}>
                                    Low Risk
                                    <BsEmojiSmile className={styles.faceIcon} style={{ color: '#2e7d32' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Forecaster;
