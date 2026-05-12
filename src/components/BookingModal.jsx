import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Phone, MessageCircle } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, roomName }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', address: '', contact: '' });

    if (!isOpen) {
        if (showForm) setShowForm(false);
        return null;
    }

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const { name, address, contact } = formData;
        if (!name || !contact) {
            alert('Please fill out Name and Contact.');
            return;
        }
        const message = `Hello, I would like to book a room.\n\n*Room Details:*\nRoom: ${roomName}\n\n*My Details:*\nName: ${name}\nContact: ${contact}\nAddress: ${address || 'N/A'}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917810084884?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        onClose();
        setShowForm(false);
        setFormData({ name: '', address: '', contact: '' });
    };

    const handleClose = () => {
        setShowForm(false);
        setFormData({ name: '', address: '', contact: '' });
        onClose();
    };

    const platforms = [
        { name: 'Agoda', color: '#6344ff', link: 'https://www.agoda.com/shri-valli-residency-h87304920/hotel/palani-in.html' },
        { name: 'Booking.com', color: '#1a3bb1', link: 'https://www.booking.com/hotel/in/shri-valli-residency-palani.html' },
        { name: 'MakeMyTrip', color: '#e50914', link: 'https://www.makemytrip.com/hotels/hotel-details/?checkin=date_7&checkout=date_8&city=abc&country=in&roomStayQualifier=2e0e&hotelId=202603261952528296&locusId=abc&locusType=city&currency=INR&source=INGO' },
        { name: 'Goibibo', color: '#ff6d00', link: 'https://www.goibibo.com/hotels/Shri-Valli-Residency-hotel-in-Palani-202603261952528296' },
        { name: 'EaseMyTrip', color: '#009b62', link: '#' }
    ];

    return (
        <AnimatePresence>
            <div className="overlay" onClick={handleClose}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="modal"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="header">
                        <button className="closeBtn" onClick={handleClose}>
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
                                <h2 className="headerTitle">{showForm ? 'Enter Details' : 'Book Your Stay'}</h2>
                            </div>
                        </div>
                        <div className="reservingText">
                            <span style={{color: '#a0aec0'}}>Reserving: </span>
                            <strong>{roomName}</strong>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="body">
                        {showForm ? (
                            <form onSubmit={handleWhatsAppSubmit} className="whatsapp-form" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                                <div>
                                    <label style={{display: 'block', marginBottom: '5px', color: '#4a5568', fontWeight: '500'}}>Name *</label>
                                    <input 
                                        type="text" 
                                        value={formData.name} 
                                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                        style={{width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0'}}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label style={{display: 'block', marginBottom: '5px', color: '#4a5568', fontWeight: '500'}}>Contact Number *</label>
                                    <input 
                                        type="tel" 
                                        value={formData.contact} 
                                        onChange={(e) => setFormData({...formData, contact: e.target.value})} 
                                        style={{width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0'}}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label style={{display: 'block', marginBottom: '5px', color: '#4a5568', fontWeight: '500'}}>Address</label>
                                    <textarea 
                                        value={formData.address} 
                                        onChange={(e) => setFormData({...formData, address: e.target.value})} 
                                        style={{width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', minHeight: '80px', resize: 'vertical'}}
                                    ></textarea>
                                </div>
                                <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                                    <button type="button" onClick={() => setShowForm(false)} style={{flex: 1, padding: '12px', backgroundColor: '#e2e8f0', color: '#4a5568', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600'}}>
                                        Back
                                    </button>
                                    <button type="submit" style={{flex: 1, padding: '12px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
                                        <MessageCircle size={18} />
                                        Send to WhatsApp
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
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
                                    
                                    <a href="tel:+917810084884" className="callBtn" style={{marginBottom: '10px'}}>
                                        <Phone size={18} color="#f6ad55" />
                                        <span>Call: +91 78100 84884</span>
                                    </a>
                                    
                                    <button onClick={() => setShowForm(true)} className="callBtn" style={{backgroundColor: '#25D366', width: '100%', border: 'none', cursor: 'pointer'}}>
                                        <MessageCircle size={18} color="#fff" />
                                        <span style={{color: '#fff'}}>Book via WhatsApp</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};


export default BookingModal;
