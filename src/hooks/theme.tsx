import React, { useEffect, useState } from 'react';

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('themeMode') === 'true' ? true : false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode, setIsDarkMode]);

    return { isDarkMode, setIsDarkMode };
};
