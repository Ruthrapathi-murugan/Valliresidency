import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';

const Rooms = () => {
    const navigate = useNavigate();
    const rooms = roomsData;

    return (
        <div className="container section page-top-padding">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Our Rooms & Suites</h1>
                <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Experience uncompromising comfort. Each room is meticulously designed with a blend of modern amenities and timeless elegance.
                </p>
            </motion.div>

            <div style={styles.grid}>
                {rooms.map((room, i) => (
                    <motion.div 
                        key={room._id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{...styles.card, cursor: 'pointer'}}
                        onClick={() => navigate(`/rooms/${room._id}`)}
                    >
                        <div style={{...styles.imgOverlay, backgroundImage: `url(${room.images[0]})`}}>
                            <div style={styles.priceTag}>₹{room.price} / night</div>
                        </div>
                        <div style={styles.content}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{room.title}</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {room.description}
                            </p>
                            <span className="btn-outline btn" style={{ display: 'block', textAlign: 'center', width: '100%' }}>View Details</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '40px'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
    },
    imgOverlay: {
        height: '250px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    },
    priceTag: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: '#C09B5A',
        color: '#fff',
        padding: '5px 15px',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '0.9rem'
    },
    content: {
        padding: '25px'
    }
};

export default Rooms;
