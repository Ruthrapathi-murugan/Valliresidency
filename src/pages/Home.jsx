import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { Wifi, Coffee, Stethoscope, Tv, Bed, Bath, Plug, Map, Wind, Utensils, ArrowUpCircle, Zap, Phone, Mail, Globe, MapPin, Car, Plane, Train } from 'lucide-react';

const sliderImages = [
    "https://res.cloudinary.com/dcgkfd03b/image/upload/v1776834910/2BED_hvz53x.png",
    "https://res.cloudinary.com/dcgkfd03b/image/upload/v1776835491/TWIN_BED_e5jc9b.png",
    "https://res.cloudinary.com/dcgkfd03b/image/upload/v1776835490/4BED3_nufaea.png",
    "https://res.cloudinary.com/dcgkfd03b/image/upload/v1776835490/SINGLEBED_kozmzn.png",
    "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778605651/ChatGPT_Image_May_12_2026_10_36_55_PM_eqcrhy.png"
];

const Home = () => {
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFeaturedRooms(roomsData.slice(0, 3));
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <Swiper
                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        effect="fade"
                        speed={1000}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop={true}
                        style={{ height: '100%', width: '100%' }}
                    >
                        {sliderImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div style={{
                                    ...styles.heroBgImg,
                                    backgroundImage: `url(${img})`,
                                    position: 'relative', // Override absolute for slide internal
                                    height: '100vh'
                                }}>
                                    <div style={styles.heroOverlay}></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container" style={styles.heroContent}>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={styles.heroTitle}
                        className="hero-title"
                    >
                        Best Luxury Hotel in Palani
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={styles.heroSub}
                        className="hero-sub"
                    >
                        Welcome to Shri Valli Residency, where comfort meets elegance. Start your unforgettable journey with us today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{ pointerEvents: 'auto' }} // Re-enable clicks for the button
                    >
                        <Link to="/rooms" className="btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                            Discover Our Rooms
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                             <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '2.5rem', color: '#C09B5A', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}
                            >
                                Discover the Best Stay in Palani
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}
                            >
                                Nestled in the spiritual heart of Tamil Nadu, Shri Valli Residency offers an oasis of tranquility and modern luxury. Just minutes away from the sacred Arulmigu Dhandayuthapani Swamy Temple, our hotel provides the perfect sanctuary for pilgrims and travelers alike.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}
                            >
                                With unparalleled hospitality, premium amenities, and elegantly appointed rooms, we ensure that your stay is comfortable, serene, and deeply rejuvenating. Come, discover the perfect blend of tradition and comfort.
                            </motion.p>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <motion.img 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                src="https://res.cloudinary.com/dcgkfd03b/image/upload/v1777479851/HALL_hwckws.png" 
                                alt="Hotel Reception" 
                                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms Section */}
            <section id="featured-rooms" className="section" style={{ backgroundColor: '#FAF9F6' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        Luxury Rooms & Suites in Palani
                    </motion.h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
                        {featuredRooms.map((room, i) => (
                            <motion.div 
                                key={room._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                whileHover={{ y: -10 }}
                                onClick={() => navigate(`/rooms/${room._id}`)}
                            >
                                <div style={{ height: '250px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${room.images[0]})`, position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: '#C09B5A', color: '#fff', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                        ₹{room.price} / night
                                    </div>
                                </div>
                                <div style={{ padding: '25px' }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#222' }}>{room.title}</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {room.description}
                                    </p>
                                    <span className="btn-outline btn" style={{ display: 'block', textAlign: 'center' }}>View Details</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link to="/rooms" className="btn" style={{ padding: '14px 40px', fontSize: '1.1rem' }}>
                            Explore More Rooms
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="amenities" className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Hotel Amenities
                    </motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {[
                            { name: 'Complimentary Wi-Fi', icon: <Wifi size={36} color="#C09B5A" /> },
                            { name: 'In-room tea', icon: <Coffee size={36} color="#C09B5A" /> },
                            { name: 'Doctor on call', icon: <Stethoscope size={36} color="#C09B5A" /> },
                            { name: '32-inch LED Televisions', icon: <Tv size={36} color="#C09B5A" /> },
                            { name: 'Superior quality linen', icon: <Bed size={36} color="#C09B5A" /> },
                            { name: 'Toiletries', icon: <Bath size={36} color="#C09B5A" /> },
                            { name: 'Electric kettles', icon: <Plug size={36} color="#C09B5A" /> },
                            { name: 'Travel Desk', icon: <Map size={36} color="#C09B5A" /> },
                            { name: 'Air Conditioning', icon: <Wind size={36} color="#C09B5A" /> },
                            { name: 'Lift', icon: <ArrowUpCircle size={36} color="#C09B5A" /> },
                            { name: '24h Power Supply', icon: <Zap size={36} color="#C09B5A" /> }
                        ].map((amenity, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: '#FAF9F6',
                                    padding: '30px 20px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}
                            >
                                {amenity.icon}
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: '#222' }}>{amenity.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cab & Travel Services Section */}
            <section id="travel-services" className="section" style={{ backgroundColor: '#FAF9F6' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ textAlign: 'center', marginBottom: '10px' }}
                    >
                        Cab & Travel Services
                    </motion.h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                        We provide reliable and comfortable cab services to ensure your travel in and around Palani is smooth and hassle-free.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {[
                            { 
                                title: 'Airport Drop & Pick-up', 
                                description: 'Timely transfers to and from Coimbatore (CJB) and Madurai (IXM) airports.',
                                icon: <Plane size={40} color="#C09B5A" /> 
                            },
                            { 
                                title: 'Railway Station Transfer', 
                                description: 'Hassle-free pick-up and drop-off at Palani and nearby railway stations.',
                                icon: <Train size={40} color="#C09B5A" /> 
                            },
                            { 
                                title: 'Local Sightseeing', 
                                description: 'Explore Palani and the beautiful surrounding areas with our customized cab tours.',
                                icon: <Car size={40} color="#C09B5A" /> 
                            }
                        ].map((service, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '40px 30px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                    border: '1px solid #f0efeb'
                                }}
                            >
                                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#222' }}>{service.title}</h3>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a 
                            href="https://wa.me/917810084884?text=I%20want%20to%20book%20a%20cab%20at%20Shri%20Valli%20Residency" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn" 
                            style={{ padding: '14px 40px', fontSize: '1.1rem' }}
                        >
                            Book a Cab via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Our Gallery
                    </motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                        {sliderImages.slice(0, 3).map((img, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img src={img} alt={`Gallery snippet ${i}`} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/gallery" className="btn btn-outline" style={{ padding: '12px 36px' }}>View Full Gallery</Link>
                    </div>
                </div>
            </section>

            {/* Location & Accessibility Section */}
            <section id="location-accessibility" className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '2.5rem', color: '#C09B5A', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}
                            >
                                Prime Location in Palani
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '25px' }}
                            >
                                Sri Valli Residency is conveniently located near major attractions and transport points in Palani, ensuring a comfortable stay with easy access for pilgrims and travelers.
                            </motion.p>
                            
                            <motion.ul 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}
                            >
                                {[
                                    { place: "Rope Car Station", dist: "500 meters" },
                                    { place: "Steps Entrance", dist: "400 meters" },
                                    { place: "Winch Station", dist: "1 km" },
                                    { place: "Bus Stand", dist: "1 km" },
                                    { place: "Railway Station", dist: "2 km" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                                        <span style={{ fontWeight: '500', color: '#333' }}>{item.place}</span>
                                        <span style={{ color: '#C09B5A', fontWeight: 'bold' }}>{item.dist}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <motion.img 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                src="https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606651/Screenshot_2026-05-12_224458_nufqzy.png" 
                                alt="Palani Temple Location" 
                                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions Section */}
            <section id="attractions" className="section" style={{ backgroundColor: '#FAF9F6' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Tourist Attractions Near Palani
                    </motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {[
                            {
                                name: "Arulmigu Dhandayuthapani Swamy Temple",
                                description: "The most famous landmark in Palani, this ancient temple dedicated to Lord Murugan is situated atop a hill and is one of the six major abodes of the deity.",
                                image: "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606651/Screenshot_2026-05-12_224458_nufqzy.png"
                            },
                            {
                                name: "Idumban Temple",
                                description: "Located on Idumban Hill, this temple holds deep mythological significance related to the main Murugan temple and offers beautiful panoramic views of the region.",
                                image: "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606714/Screenshot_2026-05-12_225449_nmlarr.png"
                            },
                            {
                                name: "Thiru Avinankudi Temple",
                                description: "Known as the 'third' abode or the base temple, it is located at the foothills and is considered one of the oldest and most sacred temples in Palani.",
                                image: "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606607/thiru_aavinankudi_palani_fqjvrw.jpg"
                            },
                            {
                                name: "Varathamanathi Dam",
                                description: "A beautiful scenic picnic spot located just a few kilometers from Palani. It offers spectacular views of the Western Ghats and calm waters perfect for relaxing.",
                                image: "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606621/Screenshot_2026-05-12_224927_h1pyxj.png"
                            },
                            {
                                name: "Palar Porundalar Dam",
                                description: "The largest dam in the district, set amidst picturesque surroundings and tropical forests. It provides a peaceful atmosphere for a serene getaway.",
                                image: "https://res.cloudinary.com/dcgkfd03b/image/upload/v1778606621/Screenshot_2026-05-12_225252_wv60ia.png"
                            }
                        ].map((attraction, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <img src={attraction.image} alt={attraction.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#222', marginBottom: '10px' }}>{attraction.name}</h3>
                                    <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>{attraction.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ textAlign: 'center' }}
                    >
                        Contact Us
                    </motion.h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '40px' }}>
                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: '#FAF9F6', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#222' }}>Get in Touch</h3>
                            <p style={{ color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>We are here to make your stay unforgettable. Reach out to us for any inquiries or bookings.</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', color: '#C09B5A', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2px' }}>Phone</p>
                                        <a href="tel:+917810084884" style={{ color: '#222', fontWeight: '500', textDecoration: 'none' }}>+91 78100 84884</a>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', color: '#C09B5A', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2px' }}>Email</p>
                                        <a href="mailto:shrivalliresidencypalani@gmail.com" style={{ color: '#222', fontWeight: '500', textDecoration: 'none' }}>shrivalliresidencypalani@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', color: '#C09B5A', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2px' }}>Website</p>
                                        <a href="https://www.shrivalliresidency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#222', fontWeight: '500', textDecoration: 'none' }}>www.shrivalliresidency.com</a>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', color: '#C09B5A', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2px' }}>Location</p>
                                        <p style={{ color: '#222', fontWeight: '500' }}>Shri Valli Residency, Palani</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minHeight: '350px' }}
                        >
                            <iframe 
                                src="https://maps.google.com/maps?q=Shri+Valli+Residency,+Palani&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shri Valli Residency Map"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    hero: {
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    heroBgImg: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
    },
    heroOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#fff',
        maxWidth: '800px',
        pointerEvents: 'none' // Allow clicks to pass through to slider
    },
    heroTitle: {
        fontSize: '4.5rem',
        color: '#fff',
        marginBottom: '20px',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
    },
    heroSub: {
        fontSize: '1.2rem',
        marginBottom: '40px',
        opacity: 0.9,
        lineHeight: '1.8'
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginTop: '50px'
    },
    featureCard: {
        backgroundColor: '#FAF9F6',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
    },
    featureImg: {
        height: '250px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.5s ease'
    },
    featureText: {
        padding: '30px',
        textAlign: 'center'
    }
};

export default Home;
