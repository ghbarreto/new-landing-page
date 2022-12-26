import { useTheme } from '../hooks/theme';

export const ToggleMode = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();

    return (
        <div className="py-2 px-4 rounded transition-shadow">
            <span className="flex align-center justify-end mr-10 mt-10">
                <div className="bg-bg_dark dark:bg-bg_white flex rounded-full p-1 items-center">
                    <i
                        onClick={() => {
                            setIsDarkMode(false);
                            localStorage.setItem('themeMode', `${false}`);
                        }}
                        className={`gg-sun ml-1.5 mr-2 text-yellow-100 dark:opacity-50  dark:text-bg_dark cursor-pointer`}
                    ></i>
                    <i
                        onClick={() => {
                            setIsDarkMode(true);
                            localStorage.setItem('themeMode', `${true}`);
                        }}
                        className="gg-moon mr-1.5 ml-2 text-bg_white opacity-50 dark:opacity-100 dark:text-highlight_400 cursor-pointer"
                    ></i>
                </div>
            </span>
        </div>
    );
};
