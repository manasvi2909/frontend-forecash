// src/pages/ExpenseLogs.jsx
import React, { useState } from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart, BiPlus, BiMoviePlay, BiX, BiChevronDown, BiChevronUp, BiCalendar } from "react-icons/bi";
import { BsBank, BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineWbSunny, MdFastfood } from "react-icons/md";
import { IoSettingsSharp, IoWalletOutline } from "react-icons/io5";
import { FaGlobe, FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './ExpenseLogs.module.css';

const ExpenseLogs = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    // Modal Form State
    const [showCategory, setShowCategory] = useState(false);
    const [category, setCategory] = useState('Education');
    const [type, setType] = useState('Expense');
    const [date, setDate] = useState({ d: 30, m: 4, y: 2025 });
    const [amount, setAmount] = useState('');

    // Calendar View State
    const [viewDate, setViewDate] = useState({ m: 4, y: 2025 });

    const categories = ['Education', 'Entertainment', 'Food & Drinks', 'Health', 'Transport', 'Salary'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const changeMonth = (increment) => {
        let newM = viewDate.m + increment;
        let newY = viewDate.y;
        if (newM > 12) { newM = 1; newY++; }
        if (newM < 1) { newM = 12; newY--; }
        setViewDate({ m: newM, y: newY });
    };

    const daysInMonth = (m, y) => {
        return new Date(y, m, 0).getDate();
    };

    // Mock Data for Forecast
    const forecastData = [
        { day: 'MON', green: 40, black: 30, grey: 30 },
        { day: 'TUE', green: 50, black: 20, grey: 30 },
        { day: 'WED', green: 20, black: 40, grey: 40 },
        { day: 'THU', green: 60, black: 20, grey: 20 },
        { day: 'FRI', green: 70, black: 25, grey: 5 },
        { day: 'SAT', green: 30, black: 20, grey: 50 },
        { day: 'SUN', green: 25, black: 25, grey: 50 },
    ];

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <img src="/assets/dashboard/header_logo_dots.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoLabel}>Fore<b>Cash</b></span>
                </div>

                <div className={styles.sidebarMenu}>
                    {/* Dashboard (Inactive) */}
                    <div className={styles.menuItem} onClick={() => navigate('/dashboard')}>
                        <div className={styles.iconCircle}>
                            <BiGridAlt size={24} />
                        </div>
                        <span className={styles.menuLabel}>Dashboard</span>
                    </div>

                    {/* Active State: Expense Logs */}
                    <div className={`${styles.menuItem} ${styles.activeItem}`}>
                        <BiTransfer size={24} />
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

                {/* Expense Grid */}
                <div className={styles.gridContainer}>

                    {/* Row 1 */}
                    <div className={styles.topRow}>
                        {/* 1. Spending Profile (Reused) */}
                        <div className={`${styles.card} ${styles.spendingCard}`}>
                            <h3 className={styles.cardTitle}>Your Spending Profile</h3>
                            <div className={styles.bubbleContainer}>
                                <div className={styles.bubbleGreen}>70%</div>
                                <div className={styles.bubbleBlack}>20%</div>
                                <div className={styles.bubbleGrey}>10%</div>
                            </div>
                            <div className={styles.legendList}>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#73A981' }}></span> Entertainment</div>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#000' }}></span> Food & Drinks</div>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#ddd' }}></span> Health & Fitness</div>
                            </div>
                        </div>

                        {/* 2. Forecast (New) */}
                        <div className={`${styles.card} ${styles.forecastCard}`}>
                            <div className={styles.forecastHeader}>
                                <h3 className={styles.cardTitle}>Next Week’s Forecast</h3>
                            </div>

                            <div className={styles.forecastLegend}>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#9cc6a5' }}></span> Under Budget</div>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#555' }}></span> On Track</div>
                                <div className={styles.legendRow}><span className={styles.dot} style={{ background: '#e0e0e0' }}></span> Exceeded Forecast</div>
                            </div>

                            <div className={styles.chartContainer}>
                                <div className={styles.stackedGraph}>
                                    {forecastData.map((d, i) => (
                                        <div key={i} className={styles.barCol} style={{ height: `${40 + Math.random() * 50}%` }}>
                                            <div className={styles.segmentGrey} style={{ flex: d.grey }} />
                                            <div className={styles.segmentBlack} style={{ flex: d.black }} />
                                            <div className={styles.segmentGreen} style={{ flex: d.green }} />
                                            <span className={styles.barColLabel}>{d.day}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.sideStats}>
                                    <div className={styles.statItem}>
                                        <div className={styles.triangle} style={{ borderBottomColor: '#ddd', transform: 'scale(1.5)' }}></div>
                                        {/* Mocking the shapes - using icons might be better but CSS triangle for speed */}
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>Entertainment</span>
                                            <span style={{ color: '#999', fontSize: '0.7rem' }}>+8%</span>
                                        </div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.triangle} ${styles.triGreen}`} style={{ transform: 'rotate(180deg) scale(1.5)' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>Food & Drinks</span>
                                            <span style={{ color: '#73A981', fontSize: '0.7rem' }}>-4%</span>
                                        </div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div style={{ width: 15, height: 4, background: '#555', borderRadius: 2 }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>Health & Fitness</span>
                                            <span style={{ color: '#555', fontSize: '0.7rem' }}>Stable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Transactions */}
                    <div className={`${styles.card} ${styles.logsCard}`}>
                        <div className={styles.logsHeader}>
                            <h3 className={styles.cardTitle}>Transaction Logs</h3>
                            <button className={styles.addBtn} onClick={() => setShowModal(true)}>
                                <BiPlus size={18} /> Add Transaction
                            </button>
                        </div>
                        <div className={styles.transactionsList}>
                            <div className={styles.transactionRow}>
                                <div className={styles.transLeft}>
                                    <div className={styles.transIcon} style={{ background: '#000', color: '#fff' }}>
                                        <BiMoviePlay />
                                    </div>
                                    <div className={styles.transInfo}>
                                        <span className={styles.transTitle}>Entertainment</span>
                                        <span className={styles.transDate}>30/04/2025</span>
                                    </div>
                                </div>
                                <span className={styles.transAmount}>-$50</span>
                            </div>

                            <div className={styles.transactionRow}>
                                <div className={styles.transLeft}>
                                    <div className={styles.transIcon} style={{ background: '#9cc6a5', color: '#fff' }}>
                                        <FaMoneyBillWave />
                                    </div>
                                    <div className={styles.transInfo}>
                                        <span className={styles.transTitle}>Salary</span>
                                        <span className={styles.transDate}>29/04/2025</span>
                                    </div>
                                </div>
                                <span className={`${styles.transAmount} ${styles.amountPlus}`}>+$5,000</span>
                            </div>

                            <div className={styles.transactionRow}>
                                <div className={styles.transLeft}>
                                    <div className={styles.transIcon} style={{ background: '#000', color: '#fff' }}>
                                        <MdFastfood />
                                    </div>
                                    <div className={styles.transInfo}>
                                        <span className={styles.transTitle}>Food & Drinks</span>
                                        <span className={styles.transDate}>16/04/2025</span>
                                    </div>
                                </div>
                                <span className={styles.transAmount}>-$30</span>
                            </div>
                        </div>
                        <div className={styles.viewAll}>View All</div>
                    </div>

                </div>
                {/* MODAL OVERLAY */}
                {showModal && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
                                <BiX size={24} />
                            </button>

                            <h2 className={styles.modalTitle}>Add Transaction</h2>

                            {/* Category */}
                            <div className={styles.modalField} style={{ position: 'relative' }}>
                                <div className={`${styles.categoryInput} ${styles.inputGreen}`} onClick={() => setShowCategory(!showCategory)}>
                                    <span style={{ fontWeight: 600 }}>{category}</span>
                                    <span className={styles.placeholder}>Select Category</span>
                                    <BiChevronDown size={20} className={styles.inputIcon} />
                                </div>
                                {showCategory && (
                                    <div className={styles.dropdownMenu}>
                                        {categories.map(cat => (
                                            <div key={cat} className={styles.dropdownItem} onClick={() => {
                                                setCategory(cat);
                                                setShowCategory(false);
                                            }}>
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Type & Date Row */}
                            <div className={styles.rowMix}>
                                <div className={styles.typeGroup}>
                                    <label className={styles.fieldLabel}>Transaction type</label>
                                    <div className={styles.radioGroup}>
                                        <label className={styles.radioLabel} onClick={() => setType('Income')}>
                                            <span className={`${styles.radioCustom} ${type === 'Income' ? styles.radioActive : ''}`}></span> Income
                                        </label>
                                        <label className={styles.radioLabel} onClick={() => setType('Expense')}>
                                            <span className={`${styles.radioCustom} ${type === 'Expense' ? styles.radioActive : ''}`}></span> Expense
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.dateGroup}>
                                    <label className={styles.fieldLabel}>Date</label>
                                    <div className={styles.dateInput} onClick={() => {
                                        setShowCalendar(!showCalendar);
                                        // Sync view date to selected date when opening
                                        if (!showCalendar) setViewDate({ m: date.m, y: date.y });
                                    }}>
                                        <span>{date.d}</span>
                                        <span>{date.m < 10 ? `0${date.m}` : date.m}</span>
                                        <span>{date.y}</span>
                                        <BiChevronUp style={{ transform: showCalendar ? '' : 'rotate(180deg)' }} />
                                    </div>

                                    {/* CALENDAR POPUP */}
                                    {showCalendar && (
                                        <div className={styles.calendarPopup} onClick={(e) => e.stopPropagation()}>
                                            <div className={styles.calHeader}>
                                                <span>{months[viewDate.m - 1]} <b>{viewDate.y}</b></span>
                                                <div style={{ display: 'flex', gap: 5 }}>
                                                    <BiChevronDown
                                                        style={{ transform: 'rotate(90deg)', cursor: 'pointer' }}
                                                        onClick={() => changeMonth(-1)}
                                                    />
                                                    <BiChevronDown
                                                        style={{ transform: 'rotate(-90deg)', cursor: 'pointer' }}
                                                        onClick={() => changeMonth(1)}
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.calGrid}>
                                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <span key={d} className={styles.calDayName}>{d}</span>)}
                                                {/* Days */}
                                                {[...Array(daysInMonth(viewDate.m, viewDate.y)).keys()].map(i => {
                                                    const dayNum = i + 1;
                                                    const isSelected = dayNum === date.d && viewDate.m === date.m && viewDate.y === date.y;
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={`${styles.calDay} ${isSelected ? styles.calActive : ''}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setDate({ d: dayNum, m: viewDate.m, y: viewDate.y });
                                                                setShowCalendar(false);
                                                            }}
                                                        >
                                                            {dayNum}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Amount */}
                            <div className={styles.amountField}>
                                <label className={styles.fieldLabel}>Amount</label>
                                <div className={styles.amountInputWrapper}>
                                    <span style={{ fontSize: '1.2rem', color: '#888', marginRight: 10 }}>$</span>
                                    <input
                                        className={styles.amountInput}
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.00"
                                        type="number"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ExpenseLogs;
