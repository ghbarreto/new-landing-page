import { useTheme } from '../hooks/theme';

export const ToggleMode = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-red-300"
            onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem('themeMode', `${!isDarkMode}`);
            }}
        >
            Toggle
        </button>
    );
};
