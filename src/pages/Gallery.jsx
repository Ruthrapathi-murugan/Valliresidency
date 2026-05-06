import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryData';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="section container page-top-padding">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '40px' }}
            >
                Our Gallery
            </motion.h1>
            <div className="gallery-grid">
                {galleryImages.map((img, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        style={{...styles.imgContainer, cursor: 'pointer'}}
                        onClick={() => setSelectedImage(img)}
                    >
                        <img src={img} alt={`Gallery image ${idx}`} style={styles.img} />
                    </motion.div>
                ))}
            </div>

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
    imgContainer: {
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    img: {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.4s ease'
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

export default Gallery;
