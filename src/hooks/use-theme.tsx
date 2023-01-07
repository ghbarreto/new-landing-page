import { useEffect, useState } from 'react';

export const useTheme = () => {
    const selectedDarkMode = localStorage.getItem('themeMode') === 'true';
    const [isDarkMode, setIsDarkMode] = useState(selectedDarkMode ? true : false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode, setIsDarkMode]);

    return { isDarkMode, setIsDarkMode };
};
