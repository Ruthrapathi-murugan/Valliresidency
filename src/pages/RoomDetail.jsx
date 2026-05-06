import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { loadScript } from '../utils/loadScript';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../components/BookingModal';

const RoomDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const matchedRoom = roomsData.find(r => r._id === id);
        setRoom(matchedRoom);
        setLoading(false);
    }, [id]);

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        // Simulate backend order creation
        const order_id = "order_" + Math.random().toString(36).substr(2, 9);
        const amount = room.price * 100; // Razorpay expects amount in paise

        const options = {
            key: "rzp_test_replace_with_your_key", 
            amount: amount.toString(),
            currency: 'INR',
            name: 'Shri Valli Residency',
            description: `Booking for ${room.title}`,
            image: "https://example.com/your_logo.png",
            order_id: order_id,
            handler: function (response) {
                // Simulate backend payment verification success
                alert("Payment successful! Your room has been booked.");
                navigate('/');
            },
            prefill: {
                name: 'Guest User',
                email: 'guest@example.com',
            },
            theme: {
                color: '#C09B5A',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    if(loading) return <div className="section container" style={{textAlign: 'center'}}>Loading details...</div>;
    if(!room) return <div className="section container" style={{textAlign: 'center'}}>Room not found</div>;

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
            <div className="room-hero" style={{...styles.heroImg, backgroundImage: `url(${room.images[0]})`}}>
                <div style={styles.overlay}></div>
                <h1 style={styles.title} className="room-title">{room.title}</h1>
            </div>
            
            <div className="container section">
                <div style={styles.grid} className="details-grid room-detail-grid">
                    <div>
                        <h2 style={{ marginBottom: '20px' }}>Overview</h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {room.description}
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Amenities</h3>
                        <ul style={styles.amenities} className="room-amenities">
                            {room.amenities.map((item, idx) => (
                                <li key={idx} style={styles.amenityItem}>✓ {item}</li>
                            ))}
                        </ul>

                        {room.images && room.images.length > 1 && (
                            <>
                                <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Gallery</h3>
                                <div style={styles.gallery} className="gallery-grid room-gallery">
                                    {room.images.map((img, idx) => (
                                        <motion.img 
                                            key={idx} 
                                            src={img} 
                                            alt={`${room.title} view ${idx+1}`} 
                                            style={{...styles.galleryImg, cursor: 'pointer'}} 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="room-booking-card"
                            style={styles.bookingCard}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Reserve Your Stay</h3>
                            <div style={styles.priceContainer}>
                                <span style={styles.price}>₹{room.price}</span>
                                <span style={{ color: '#666' }}>/ night</span>
                            </div>
                            
                            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
                            
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ color: '#666' }}>Guests max</span>
                                    <span>{room.capacity} Persons</span>
                                </div>
                            </div>
                            
                            <button className="btn" onClick={() => setIsModalOpen(true)} style={{ width: '100%', fontSize: '1.1rem' }}>
                                Book Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                roomName={room.title}
                onRazorpayClick={displayRazorpay}
            />

            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={styles.lightboxOverlay}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button style={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                            ✕
                        </button>
                        <motion.img 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage} 
                            alt="Full screen" 
                            style={styles.lightboxImg}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const styles = {
    heroImg: {
        height: '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1
    },
    title: {
        position: 'relative',
        zIndex: 2,
        fontSize: '4rem',
        textAlign: 'center',
        color: '#ffffff'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '60px'
    },
    amenities: {
        listStyleType: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px'
    },
    amenityItem: {
        color: '#444',
        fontWeight: '500'
    },
    bookingCard: {
        backgroundColor: '#FAF9F6',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: '100px'
    },
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '15px'
    },
    galleryImg: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '10px'
    },
    price: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#C09B5A',
        fontFamily: "'Playfair Display', serif"
    },
    lightboxOverlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    lightboxImg: {
        maxWidth: '90vw',
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
    },
    closeBtn: {
        position: 'absolute',
        top: '20px',
        right: '30px',
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: 2001
    }
};

export default RoomDetail;
