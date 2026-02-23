import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(); // Create context

export const useAuth = () => {
    return useContext(AuthContext); // Custom hook to use context
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for token on mount
        const token = localStorage.getItem('token');
        if (token) {
            // Validate token or just decode user (basic JWT)
            // For now, let's assume we fetch user or token is valid
            // In a real app, verify token with backend via /api/auth/me
            const savedUser = JSON.parse(localStorage.getItem('user'));
            if (savedUser) {
                setUser(savedUser);
            }
        }
        setLoading(false);
    }, []);

    // ── Dummy accounts for testing when backend isn't running ──
    const DEMO_ACCOUNTS = {
        'demo@npseprep.com': {
            password: 'demo1234',
            user: { id: 'demo-1', name: 'Demo Pupil', email: 'demo@npseprep.com', role: 'pupil' }
        },
        'admin@npseprep.com': {
            password: 'admin1234',
            user: { id: 'admin-1', name: 'Admin User', email: 'admin@npseprep.com', role: 'admin' }
        }
    };

    const login = async (email, password) => {
        // 1. Try real backend first
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            return data.user;
        } catch (error) {
            // 2. Fallback to dummy accounts when backend is unreachable
            const demoAccount = DEMO_ACCOUNTS[email.toLowerCase()];
            if (demoAccount && demoAccount.password === password) {
                const dummyToken = 'demo-token-' + Date.now();
                localStorage.setItem('token', dummyToken);
                localStorage.setItem('user', JSON.stringify(demoAccount.user));
                setUser(demoAccount.user);
                return demoAccount.user;
            }

            // Re-throw original error if no demo match
            console.error('Login error:', error);
            throw new Error('Login failed. Try demo@npseprep.com / demo1234');
        }
    };

    const register = async (name, email, password, role) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Registration failed');
            }

            const data = await response.json();
            // Automatically log in after registration? Or redirect to login?
            // PRD doesn't specify deeply, but returning data allows handling in component
            return data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
