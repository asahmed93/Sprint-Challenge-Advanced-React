import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggler = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return(
        <div>
            <h1>Top Women's Soccer Searches</h1>
            <button onClick={toggler}> Select Mode: {darkMode ? 'light': 'dark'}</button>
        </div>
    )
}

export default Nav