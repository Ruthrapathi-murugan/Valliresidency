import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHeroPage = location.pathname === '/' || /^\/rooms\/[^/]+$/.test(location.pathname);
    const isTransparent = isHeroPage && !scrolled;

    const navBg = isTransparent ? 'transparent' : '#FFFFFF';
    const textColor = isTransparent ? '#FFFFFF' : '#222';
    const linkColor = isTransparent ? 'rgba(255,255,255,0.9)' : '#666';
    const shadow = isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.05)';

    return (
        <nav style={{...styles.navbar, backgroundColor: navBg, boxShadow: shadow}}>
            <div className="container" style={styles.navContainer}>
                <Link to="/" style={{...styles.logo, color: textColor}}>
                    Shri Valli<span>Residency</span>
                </Link>

                {/* Desktop Menu */}
                <div style={styles.desktopMenu} className="desktop-menu">
                    <Link to="/" style={{...styles.navLink, color: linkColor}}>Home</Link>
                    <Link to="/rooms" style={{...styles.navLink, color: linkColor}}>Rooms & Suites</Link>
                    <Link to="/gallery" style={{...styles.navLink, color: linkColor}}>Gallery</Link>
                    <a href="/#amenities" style={{...styles.navLink, color: linkColor}}>Amenities</a>
                    <a href="/#contact" style={{...styles.navLink, color: linkColor}}>Contact</a>
                    <Link to="/rooms" className="btn" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Book Now</Link>
                </div>
                <button 
                    className="mobile-toggle"
                    style={{...styles.mobileToggle, color: textColor}} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={styles.mobileMenu}
                    >
                        <Link to="/" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link to="/rooms" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Rooms & Suites</Link>
                        <Link to="/gallery" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                        <a href="/#amenities" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Amenities</a>
                        <a href="/#contact" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                        <Link to="/rooms" style={{...styles.mobileNavLink, color: '#C09B5A', fontWeight: 'bold'}} onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <style>
                {`
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                }
                @media (min-width: 769px) {
                    .mobile-toggle { display: none !important; }
                }
                `}
            </style>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        padding: '15px 0',
        transition: 'all 0.3s ease'
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5rem',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2'
    },
    desktopMenu: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
    },
    navLink: {
        fontWeight: '500',
        transition: 'color 0.3s',
        textDecoration: 'none'
    },
    userActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    welcomeText: {
        fontSize: '0.9rem',
        color: '#C09B5A',
        fontWeight: '500'
    },
    mobileToggle: {
        display: 'block',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    },
    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto'
    },
    mobileNavLink: {
        padding: '12px 0',
        borderBottom: '1px solid #eee',
        fontWeight: '500',
        color: '#222',
        fontSize: '1.1rem',
        textDecoration: 'none'
    }
};

export default Navbar;
