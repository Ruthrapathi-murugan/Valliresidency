import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1A1A1A', color: '#fff', paddingTop: '60px', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', paddingBottom: '40px' }}>
                
                {/* Brand Section */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <img src="https://res.cloudinary.com/dcgkfd03b/image/upload/v1779208946/Logo_for_Valli_residency_aagtzx.png" alt="Shri Valli Residency Logo" style={{ height: '60px', width: 'auto' }} />
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#C09B5A', margin: 0 }}>
                            Shri Valli Residency
                        </h3>
                    </div>
                    <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '20px' }}>
                        Experience true luxury and comfort at Palani's finest residency. Start your unforgettable journey with us today.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '500', color: '#fff' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><Link to="/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link></li>
                        <li><Link to="/rooms" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Rooms & Suites</Link></li>
                        <li><Link to="/gallery" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Gallery</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '500', color: '#fff' }}>Contact Us</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <MapPin size={20} color="#C09B5A" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ color: '#aaa', lineHeight: '1.4' }}>Shri Valli Residency,<br />Palani</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Phone size={20} color="#C09B5A" style={{ flexShrink: 0 }} />
                            <a href="tel:+917810084884" style={{ color: '#aaa', textDecoration: 'none' }}>+91 78100 84884</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail size={20} color="#C09B5A" style={{ flexShrink: 0 }} />
                            <a href="mailto:shrivalliresidencypalani@gmail.com" style={{ color: '#aaa', textDecoration: 'none' }}>shrivalliresidencypalani@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', backgroundColor: '#111' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                        &copy; {new Date().getFullYear()} Shri Valli Residency. All Rights Reserved.
                    </p>
                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                        Designed & Developed by{' '}
                        <a 
                            href="http://www.ruthradigitalsolutions.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: '#C09B5A', textDecoration: 'none', fontWeight: '500' }}
                        >
                            Ruthra Digital Solutions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
