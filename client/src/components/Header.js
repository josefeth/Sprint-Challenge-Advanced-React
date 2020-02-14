import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    const [darkMode, setDarkMode] = useDarkMode(toggleMode);

    return (
        <div className="navbar">
            <button className='change' onClick={toggleMode}>Change Theme</button>
            <h2>Women's World Cup players ranked by search interest from Google</h2>
        </div>
    );
}

export default Header; 