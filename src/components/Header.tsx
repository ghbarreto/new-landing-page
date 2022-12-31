import { useTheme } from '../hooks/theme';

export const Header = () => {
    const { setIsDarkMode } = useTheme();

    return (
        <div className="py-2 px-4 rounded transition-shadow mr-10 mt-10">
            <div className="bg-bg_dark dark:bg-bg_white flex h-12 justify-between rounded-full p-1 items-center">
                <img className="w-6 ml-5" src={'/logo.png'} />
                <div className="flex items-center">
                    <img src="/cn-flag.svg" className="w-6 mr-5" />
                    <i
                        onClick={() => {
                            setIsDarkMode(false);
                            localStorage.setItem('themeMode', `${false}`);
                        }}
                        className={`gg-sun ml-1.5 mr-2 text-highlight_300 dark:opacity-50  dark:text-bg_dark cursor-pointer`}
                    ></i>
                    <i
                        onClick={() => {
                            setIsDarkMode(true);
                            localStorage.setItem('themeMode', `${true}`);
                        }}
                        className="gg-moon mr-4 ml-2 text-bg_white opacity-50 dark:opacity-100 dark:text-lightblue_600 cursor-pointer"
                    ></i>
                </div>
            </div>
        </div>
    );
};
