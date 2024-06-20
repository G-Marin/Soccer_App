import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from './cookie.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = () => {
        const username = getCookie('username');
        setIsLoggedIn(!!username);
    };

    useEffect(() => { 
        checkLoginStatus();
    }, []);

    const login = async (formData) => {
        try {
            const response = await axios.post('/user/login', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                setIsLoggedIn(true);
            } 
        } catch (error) {
            // This will catch any non-2xx responses from axios
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error("Invalid Username or Password");
            } 
        }
    };

  const logout = async () => {
    try {
      const response = await axios.post('/user/logout', {}, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, checkLoginStatus  }}>
      {children}
    </AuthContext.Provider>
  );
};
