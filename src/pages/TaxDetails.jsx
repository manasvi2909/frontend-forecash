import React from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart, BiPlus } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './TaxDetails.module.css';

const TaxDetails = () => {
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

                    <div className={styles.menuItem} onClick={() => navigate('/forecaster')}>
                        <div className={styles.iconCircle}>
                            <BiLineChart size={24} />
                        </div>
                        <span className={styles.menuLabel}>Forecaster</span>
                    </div>

                    {/* Active */}
                    <div className={`${styles.menuItem} ${styles.activeItem}`}>
                        <BsBank size={22} />
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
                    {/* CARD 1: Tax Optimization Impact */}
                    <div className={`${styles.card} ${styles.cardOptimization}`}>
                        <div className={styles.cardTitle}>
                            <span>Tax Optimization Impact</span>
                            <div className={styles.legendRow}>
                                <div style={{ display: 'flex', alignItems: 'center' }}><div className={`${styles.legendDot} ${styles.bgDark}`}></div> Before Optimization</div>
                                <div style={{ display: 'flex', alignItems: 'center' }}><div className={`${styles.legendDot} ${styles.bgGreen}`}></div> After Optimization</div>
                            </div>
                        </div>

                        <div className={styles.barChartContainer}>
                            <div className={styles.yAxis}>
                                <span>4k</span><span>3k</span><span>2k</span><span>1k</span><span>0</span>
                            </div>

                            {/* Floating Tooltip Mock */}
                            <div className={styles.tooltipFloating} style={{ left: '28%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div className={`${styles.legendDot} ${styles.bgDark}`} style={{ width: 8, height: 8 }}></div> 3.1k</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div className={`${styles.legendDot} ${styles.bgGreen}`} style={{ width: 8, height: 8 }}></div> 2.3k</div>
                            </div>

                            <div className={styles.barsArea}>
                                {/* 2022 */}
                                <div className={styles.barGroup}>
                                    <div className={`${styles.barCol} ${styles.bgDark}`} style={{ height: '60%' }} />
                                    <div className={`${styles.barCol} ${styles.bgGreen}`} style={{ height: '45%' }} />
                                    <span className={styles.yearLabel}>2022</span>
                                </div>
                                {/* 2023 */}
                                <div className={styles.barGroup}>
                                    <div className={`${styles.barCol} ${styles.bgDark}`} style={{ height: '65%' }} />
                                    <div className={`${styles.barCol} ${styles.bgGreen}`} style={{ height: '48%' }} />
                                    <span className={styles.yearLabel}>2023</span>
                                </div>
                                {/* 2024 */}
                                <div className={styles.barGroup}>
                                    <div className={`${styles.barCol} ${styles.bgDark}`} style={{ height: '90%' }} />
                                    <div className={`${styles.barCol} ${styles.bgGreen}`} style={{ height: '75%' }} />
                                    <span className={styles.yearLabel}>2024</span>
                                </div>
                                {/* 2025 */}
                                <div className={styles.barGroup}>
                                    <div className={`${styles.barCol} ${styles.bgDark}`} style={{ height: '40%', background: '#555555aa' }} />
                                    <div className={`${styles.barCol} ${styles.bgGreen}`} style={{ height: '15%' }} />
                                    {/* Grey box overlay for 2025 like in image? */}
                                    <div style={{ position: 'absolute', top: 0, left: -5, right: -5, bottom: 0, background: '#cccccc30', borderRadius: 10 }}></div>
                                    <span className={styles.yearLabel}>2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Tax Breakdown */}
                    <div className={`${styles.card} ${styles.cardBreakdown}`}>
                        <div className={styles.cardTitle}>
                            <div>Tax <br /> Breakdown</div>
                            <span style={{ color: '#aaa', fontWeight: 400 }}>2025</span>
                        </div>

                        <div className={styles.stackedChartContainer}>
                            <div className={styles.yAxis}>
                                <span>3k</span><span>2k</span><span>1k</span><span>0</span>
                            </div>
                            {/* Days */}
                            {[
                                { day: 'MON', h1: 40, h2: 60, h3: 100 }, // heights in pixels approx
                                { day: 'TUE', h1: 60, h2: 40, h3: 80 },
                                { day: 'WED', h1: 30, h2: 50, h3: 70 },
                                { day: 'THU', h1: 80, h2: 40, h3: 90 },
                                { day: 'FRI', h1: 110, h2: 50, h3: 40 },
                                { day: 'SAT', h1: 40, h2: 20, h3: 120 },
                                { day: 'SUN', h1: 35, h2: 35, h3: 90 }
                            ].map((d, i) => (
                                <div key={i} className={styles.stackedBar} style={{ height: (d.h1 + d.h2 + d.h3) / 1.5 + 'px' }}>
                                    <div className={styles.stackSegment} style={{ flex: d.h3, background: '#8bc34a' }}></div>
                                    <div className={styles.stackSegment} style={{ flex: d.h2, background: '#777' }}></div>
                                    <div className={styles.stackSegment} style={{ flex: d.h1, background: '#aaa' }}></div>
                                    <span className={styles.dayLabel}>{d.day}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.breakdownLegend}>
                            <div className={styles.legendRowItem}>
                                <span className={styles.legendLabel}><div className={`${styles.legendDot} ${styles.bgGreen}`}></div> Salary</span>
                                <span>$7,213</span>
                            </div>
                            <div className={styles.legendRowItem}>
                                <span className={styles.legendLabel}><div className={`${styles.legendDot} ${styles.bgDark}`} style={{ background: '#aaa' }}></div> Investments</span>
                                <span>$5,662</span>
                            </div>
                            <div className={styles.legendRowItem}>
                                <span className={styles.legendLabel}><div className={`${styles.legendDot} ${styles.bgDark}`}></div> Expenses</span>
                                <span>$4,662</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Add Documents */}
                    <div className={styles.card}>
                        <div className={styles.addDocContainer}>
                            <BiPlus className={styles.plusIconBig} />
                        </div>
                        <div className={styles.addDocText}>
                            Add Documents to get <br /> optimization suggestions
                        </div>
                    </div>

                    {/* CARD 4: Credit Score */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>Credit Score</div>
                        <div className={styles.scoreGaugeContainer}>
                            <svg className={styles.gaugeSvg} viewBox="0 0 200 120">
                                {/* Background Arc */}
                                <path d="M20,100 A80,80 0 1,1 180,100" fill="none" stroke="#eee" strokeWidth="15" strokeLinecap="round" />
                                {/* Fill Arc (approx 75%) */}
                                <path d="M20,100 A80,80 0 1,1 160,40" fill="none" stroke="#fff" strokeWidth="0" /> {/* Just ref */}
                                <path d="M20,100 A80,80 0 1,1 150,35" fill="none" stroke="#222" strokeDasharray="10,5" strokeWidth="15" strokeLinecap="round" />

                                {/* Green Tip? Image shows a green dot/indicator at the end */}
                                <circle cx="150" cy="35" r="8" fill="#fff" stroke="#8bc34a" strokeWidth="4" />
                            </svg>
                            <div className={styles.scoreValue}>821</div>
                            <div className={styles.scoreLabel}>
                                Your credit score is <br />
                                <span style={{ fontSize: '0.7rem', color: '#888' }}>Updated Mar 24, 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 5: Tax Liability Timeline */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>Tax Liability Timeline</div>
                        <div className={styles.timelineContainer}>
                            <svg width="100%" height="100%" viewBox="0 0 300 150" style={{ overflow: 'visible' }}>
                                <line x1="10" y1="10" x2="10" y2="130" stroke="#eee" />
                                <line x1="10" y1="130" x2="290" y2="130" stroke="#eee" />
                                {/* Y Axis labels */}
                                <text x="0" y="20" fontSize="8" fill="#aaa">10k</text>
                                <text x="0" y="70" fontSize="8" fill="#aaa">5k</text>
                                <text x="0" y="120" fontSize="8" fill="#aaa">1k</text>
                                <text x="0" y="145" fontSize="8" fill="#aaa">0</text>

                                {/* Solid Black Line (Current Accumulated) */}
                                <path d="M10,130 Q50,110 80,90 Q120,70 150,60" fill="none" stroke="#333" strokeWidth="2" />
                                {/* Dashed Green Line (Future Predicted) */}
                                <path d="M150,60 Q200,40 250,20 Q280,15 290,10" fill="none" stroke="#8bc34a" strokeWidth="2" strokeDasharray="4,4" />

                                {/* Point & Label */}
                                <circle cx="150" cy="60" r="4" fill="#000" />
                                <g transform="translate(140, 40)">
                                    <rect x="-30" y="-20" width="50" height="25" rx="5" fill="#000" />
                                    <text x="-5" y="-5" fill="#fff" fontSize="8" textAnchor="middle">Today</text>
                                    <text x="-5" y="2" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">$5000</text>
                                </g>
                                <line x1="150" y1="60" x2="150" y2="130" stroke="#333" strokeWidth="1" />
                            </svg>
                        </div>
                        <div className={styles.timelineLegend}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div className={`${styles.legendDot} ${styles.bgGreen}`}></div> Future Predicted Accumulated Tax</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div className={`${styles.legendDot} ${styles.bgDark}`}></div> Current Accumulated Tax</div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default TaxDetails;
