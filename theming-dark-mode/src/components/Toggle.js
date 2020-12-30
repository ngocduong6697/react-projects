import React from 'react';
import { func, string } from 'prop-types';
import ToggleContainer from '../styles/Toggle.styles';

// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
const Toggle = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';
    return (
        <ToggleContainer lightTheme={isDark} onClick={toggleTheme}>
            <MoonIcon />
            <SunIcon />
        </ToggleContainer>
    )
};

Toggle.proTotypes = {
    theme : string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;