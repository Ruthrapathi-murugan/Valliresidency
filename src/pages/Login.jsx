import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = ({ isLogin = true }) => {
    const { login, register, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(user) {
            navigate('/rooms');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        let res;
        if(isLogin) {
            res = await login(email, password);
        } else {
            res = await register(name, email, password);
        }

        if(!res.success) {
            setError(res.message);
        }
    };

    return (
        <div style={styles.wrapper} className="page-top-padding">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={styles.card}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                    {isLogin ? 'Welcome Back' : 'Create an Account'}
                </h2>
                
                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="input-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <Link to={isLogin ? '/register' : '/login'} style={{ color: '#C09B5A', fontWeight: '500' }}>
                        {isLogin ? 'Sign Up here' : 'Sign In'}
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

const styles = {
    wrapper: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FAF9F6 0%, #E8E5DF 100%)',
        padding: '20px'
    },
    card: {
        background: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '400px'
    },
    error: {
        background: '#ffebee',
        color: '#c62828',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '0.9rem'
    }
};

export default Login;
