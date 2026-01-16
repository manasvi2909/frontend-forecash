import React, { useState, useEffect, useRef } from 'react';
import { BiExport, BiGridAlt, BiTransfer, BiMessageSquareDots, BiLineChart, BiArrowBack, BiChip, BiPlus } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGlobe, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './FinPilot.module.css';

const FinPilot = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    // Chat State
    const [chatMode, setChatMode] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    const suggestions = [
        "What will my cash flow look like next month?",
        "Do I need to cut down my expenses?",
        "Help me budget for a vacation in the next 3 months",
        "Can I buy an iPhone in a week?",
        "Change my savings goal to $1000",
        "Will I completely run out before my next salary?",
        "My spending in entertainment is up 8% this week ; suggest a few ways to improve this"
    ];

    const mockBotResponses = [
        "If you buy it next week for $800, your end-of-month balance is projected to be around $35, which is much lower than your usual safety buffer of $200.",
        "Based on your current spending, you might want to wait another month.",
        "I've adjusted your savings goal. You're on track to reach it by November.",
        "Your entertainment spending is indeed high. Consider cooking at home this weekend to offset it."
    ];

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSuggestionClick = (suggestion) => {
        // If in chat mode, just put it in input? Or send it?
        // User asked for "select an option... once selected they should be grey".
        // Let's populate input for now, or just send it if that feels better. 
        // Given current flow: click -> send seems more "pilot" like.
        // But user constraint was "select an option... once selected they should be grey".
        // I will keep the existing behavior (grey out) but ALSO pop it into the chat if we are in chat mode?
        // Actually, if we are NOT in chat mode, clicking one should probably START the chat?

        if (!answeredQuestions.includes(suggestion)) {
            setAnsweredQuestions([...answeredQuestions, suggestion]);
        }

        // Auto-send for smoother UX
        handleSend(suggestion);
    };

    const handleSend = (textOverride) => {
        const text = typeof textOverride === 'string' ? textOverride : inputValue;
        if (!text.trim()) return;

        const newMsg = { text: text, sender: 'user' };
        setMessages(prev => [...prev, newMsg]);
        setInputValue('');
        setChatMode(true);

        // Mock Bot Response
        setTimeout(() => {
            const randomResponse = mockBotResponses[Math.floor(Math.random() * mockBotResponses.length)];
            setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
        }, 1000);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <img src="/assets/dashboard/header_logo_dots.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoLabel}>Fore<b>Cash</b></span>
                </div>

                <div className={styles.sidebarMenu}>
                    {/* Dashboard */}
                    <div className={styles.menuItem} onClick={() => navigate('/dashboard')}>
                        <div className={styles.iconCircle}>
                            <BiGridAlt size={24} />
                        </div>
                        <span className={styles.menuLabel}>Dashboard</span>
                    </div>

                    {/* Expense Logs */}
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

                    {/* Active State: FinPilot */}
                    <div className={`${styles.menuItem} ${styles.activeItem}`} onClick={() => navigate('/fin-pilot')}>
                        <BiMessageSquareDots size={24} />
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

                {/* Content Area */}
                <div className={styles.contentArea} style={{ justifyContent: chatMode ? 'flex-end' : 'center' }}>

                    {!chatMode ? (
                        <>
                            <h1 className={styles.heroTitle}>See what your money will do next</h1>
                            <p className={styles.subTitle}>Your Personal Finance Assistant</p>

                            <div className={styles.statsRow}>
                                <div className={styles.statsText}>
                                    This Month at a Glance <br />
                                    <span style={{ fontWeight: 400 }}>Income : $5000   |   Balance : $30,000</span>
                                </div>
                                <div className={styles.salaryText}>Next Salary in : 16 Days</div>
                            </div>

                            {/* Suggestions (Only in Hero Mode) */}
                            {/* Wait, user said "select an option... once selected they should be grey" and THEN "conversation like this should start" */}
                            {/* The image shows suggestions BELOW the input bar even in chat mode? No, the chat image DOES NOT show suggestions. */}
                            {/* The chat image shows just the chat history and the input bar. */}
                            {/* So suggestions disappear when chat starts. */}
                        </>
                    ) : (
                        <>
                            <button className={styles.newChatBtn} onClick={() => { setChatMode(false); setMessages([]); }}>
                                <BiPlus size={18} /> New Chat
                            </button>
                            <div className={styles.chatContainer}>
                                {messages.map((msg, i) => (
                                    <div key={i} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
                                        <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={chatEndRef} />
                            </div>
                        </>
                    )}

                    {/* Input Bar - Always Visible */}
                    <div className={styles.inputContainer}>
                        <div className={styles.inputIconWrapper}>
                            <BiChip size={24} />
                        </div>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder="Ask about cash flow, spending, taxes, or big decisions..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKey}
                        />
                        <button className={styles.sendBtn} onClick={() => handleSend()}>
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* Suggestions Grid - Only show if NOT in chat mode? Or keep them? */}
                    {/* The second image provided by user showing Chat Mode DOES NOT show suggestions. */}
                    {!chatMode && (
                        <div className={styles.suggestionsGrid}>
                            {suggestions.map((text, idx) => (
                                <div
                                    key={idx}
                                    className={`${styles.suggestionPill} ${answeredQuestions.includes(text) ? styles.suggestionGrey : ''}`}
                                    onClick={() => handleSuggestionClick(text)}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                    )}

                    {!chatMode && (
                        <div style={{ position: 'absolute', bottom: 20, right: 30, color: '#aaa', fontSize: '0.8rem' }}>
                            Forecast Last Updated : 11:02 a.m.
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default FinPilot;
