import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Phone } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, roomName, onRazorpayClick }) => {
    if (!isOpen) return null;

    const platforms = [
        { name: 'Agoda', color: '#6344ff', link: 'https://www.agoda.com/shri-valli-residency-h87304920/hotel/palani-in.html' },
        { name: 'Booking.com', color: '#1a3bb1', link: 'https://www.booking.com/hotel/in/shri-valli-residency-palani.html' },
        { name: 'MakeMyTrip', color: '#e50914', link: 'https://www.makemytrip.com/hotels/hotel-details/?checkin=date_7&checkout=date_8&city=abc&country=in&roomStayQualifier=2e0e&hotelId=202603261952528296&locusId=abc&locusType=city&currency=INR&source=INGO' },
        { name: 'Goibibo', color: '#ff6d00', link: 'https://www.goibibo.com/hotels/Shri-Valli-Residency-hotel-in-Palani-202603261952528296' },
        { name: 'EaseMyTrip', color: '#009b62', link: '#' }
    ];

    return (
        <AnimatePresence>
            <div className="overlay" onClick={onClose}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="modal"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="header">
                        <button className="closeBtn" onClick={onClose}>
                            <X size={20} color="#fff" />
                        </button>
                        <div className="headerTop">
                            <div className="logoCircle">
                                {/* Using an emoji/svg placeholder for the peacock logo */}
                                <span style={{fontSize: '24px'}}>🦚</span>
                            </div>
                            <div>
                                <div className="instantConf">
                                    <span style={{color: '#ffb700'}}>★</span> INSTANT CONFIRMATION
                                </div>
                                <h2 className="headerTitle">Book Your Stay</h2>
                            </div>
                        </div>
                        <div className="reservingText">
                            <span style={{color: '#a0aec0'}}>Reserving: </span>
                            <strong>{roomName}</strong>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="body">
                        <div className="sectionLabel">CHOOSE PLATFORM</div>
                        <div className="platformsGrid">
                            {platforms.map(p => (
                                <a 
                                    key={p.name} 
                                    href={p.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="platformBtn"
                                    style={{backgroundColor: p.color, gridColumn: p.name === 'EaseMyTrip' ? '1 / -1' : 'auto'}}
                                >
                                    {p.name}
                                </a>
                            ))}
                        </div>

                        <div className="divider">
                            <span className="dividerText">OR BOOK DIRECT</span>
                        </div>

                        <div className="directOfferBox">
                            <div className="giftIconWrapper">
                                <Gift size={24} color="#fff" />
                            </div>
                            <h3 className="offerTitle">Direct Booking Offer</h3>
                            <p className="offerText">Get flat 10% OFF on all direct bookings!</p>
                            
                            <a href="tel:+917810084884" className="callBtn">
                                <Phone size={18} color="#f6ad55" />
                                <span>Call: +91 78100 84884</span>
                            </a>
                            
                            <button onClick={onRazorpayClick} className="callBtn" style={{backgroundColor: '#3399cc', marginTop: '10px', width: '100%'}}>
                                <span>Pay Online (Razorpay)</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};


export default BookingModal;
