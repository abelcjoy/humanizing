
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, HeartCalls, ChevronRight, Zap, RefreshCw } from 'lucide-react';

// Animation variants
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
            <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Brain size={28} color="#fff" /> Clarity for Humans
                </div>
                <div>
                    <button className="secondary-button" style={{ marginRight: '1rem', border: 'none' }}>Login</button>
                    <button className="cta-button" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Join Now</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 2rem' }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.div variants={fadeInUp} style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', fontSize: '0.9rem', color: '#a0a0a6' }}>
                        Reclaim Your Mind, Rebuild Your Life
                    </motion.div>

                    <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }} className="gradient-text">
                        Break the Cycle.<br />Find True Clarity.
                    </motion.h1>

                    <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        A science-backed, compassionate approach to overcoming porn addiction.
                        No shame. Just tools, community, and a clear path forward.
                    </motion.p>

                    <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="cta-button" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Start Your Recovery <ChevronRight size={20} />
                        </button>
                        <button className="secondary-button" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            How It Works
                        </button>
                    </motion.div>
                </motion.div>
            </header>

            {/* Feature Section */}
            <section style={{ padding: '5rem 2rem', background: 'var(--color-bg-secondary)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                >
                    <FeatureCard
                        icon={<ShieldCheck size={40} color="#00e676" />}
                        title="Private & Secure"
                        desc="Your journey is yours alone. Fully encrypted, anonymous, and judgment-free environment."
                    />
                    <FeatureCard
                        icon={<Zap size={40} color="#3d5afe" />}
                        title="Neuroscience-Based"
                        desc="Understand how dopamine affects your brain and learn proven techniques to rewire your neural pathways."
                    />
                    <FeatureCard
                        icon={<RefreshCw size={40} color="#ff4081" />}
                        title="Daily Daily Reprogramming"
                        desc="Consistent daily actions build new habits. Track streaks, journal triggers, and celebrate wins."
                    />
                </motion.div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>© {new Date().getFullYear()} Clarity for Humans. All rights reserved.</p>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
            <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '12px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{desc}</p>
        </div>
    )
}

export default App;
