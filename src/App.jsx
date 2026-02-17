
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, Activity, ChevronRight, PlayCircle, CheckCircle2, TrendingUp } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function App() {
    return (
        <div className="app-container">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    <Brain size={28} className="icon-glow" /> Clarity for Humans
                </div>
                <div className="nav-links">
                    <button className="secondary-button">Log In</button>
                    <button className="cta-button">Start Protocol</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="hero-content"
                >
                    <motion.div variants={fadeInUp} className="badge">
                        The Science of Self-Mastery
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="hero-title gradient-text">
                        Willpower isn't enough.<br />
                        You need a Protocol.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="hero-subtitle">
                        Stop relying on motivation. <strong>The Clarity Protocol</strong> is a 90-day neuroscience-based system to rewire your dopamine receptors, crush urges, and reclaim your masculinity.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="cta-group">
                        <button className="cta-button primary">
                            Start Your Transformation <ChevronRight size={20} />
                        </button>
                        <div className="trust-indicator">
                            <CheckCircle2 size={16} color="var(--color-success)" /> Science-backed
                            <CheckCircle2 size={16} color="var(--color-success)" /> 100% Hosted Privately
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            {/* The Problem Section */}
            <section className="section-dark">
                <div className="container">
                    <h2 className="section-title">Why You've Failed Before</h2>
                    <div className="grid-3">
                        <div className="feature-card">
                            <Activity size={40} className="icon-accent" />
                            <h3>The Dopamine Trap</h3>
                            <p>Your brain isn't broken; it's hijacked. Porn creates a super-stimulus that rewires your reward system, making "normal" life feel boring.</p>
                        </div>
                        <div className="feature-card">
                            <TrendingUp size={40} className="icon-accent" />
                            <h3>The "White Knuckle" Effect</h3>
                            <p>Relying on willpower alone drains your mental energy. Eventually, you get tired, stressed, or lonely, and the cycle repeats.</p>
                        </div>
                        <div className="feature-card">
                            <Lock size={40} className="icon-accent" />
                            <h3>Isolation & Shame</h3>
                            <p>Secrecy is the fuel of addiction. Trying to fight a biological enemy in a dark room by yourself is a guaranteed way to lose.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution: The Protocol */}
            <section className="section-glow">
                <div className="container">
                    <div className="split-layout">
                        <div className="text-content">
                            <h2 className="section-title">Enter: The Clarity Protocol</h2>
                            <p className="lead-text">A systematic, day-by-day program to engineer your recovery.</p>

                            <ul className="benefit-list">
                                <li>
                                    <CheckCircle2 color="var(--color-success)" />
                                    <strong>Daily Neuro-Drills:</strong> 5-minute exercises to retrain your focus.
                                </li>
                                <li>
                                    <CheckCircle2 color="var(--color-success)" />
                                    <strong>Urge-Surfing Audio:</strong> Guided intervention tracks for when cravings hit.
                                </li>
                                <li>
                                    <CheckCircle2 color="var(--color-success)" />
                                    <strong>The "Black Box" Journal:</strong> Encrypted logging to identify your specific triggers.
                                </li>
                                <li>
                                    <CheckCircle2 color="var(--color-success)" />
                                    <strong>Progress Analytics:</strong> Watch your brain heal with data, not just streaks.
                                </li>
                            </ul>

                            <button className="cta-button large-cta">
                                Get Access to The Protocol
                            </button>
                        </div>
                        <div className="visual-content">
                            {/* Abstract visualization of the app interface */}
                            <div className="app-mockup">
                                <div className="mockup-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className="mockup-body">
                                    <div className="progress-circle">
                                        <span>Day 14</span>
                                        <small>Dopamine Reset</small>
                                    </div>
                                    <div className="task-item active">
                                        <PlayCircle size={16} /> Morning Mindset Audio
                                    </div>
                                    <div className="task-item">
                                        <Activity size={16} /> Evening Reflection
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} Clarity for Humans. Reclaim your potential.</p>
            </footer>
        </div>
    )
}

export default App;
