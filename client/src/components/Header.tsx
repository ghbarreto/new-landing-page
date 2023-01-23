import { useTranslation } from '../hooks/use-lang';
import { useTheme } from '../hooks/use-theme';
import { Tooltip } from './Tooltip';
import { T } from '../lang';

export const Header = () => {
    const { setIsDarkMode } = useTheme();
    const { lang } = useTranslation();

    const correctFlag = () => {
        // https://hampusborgos.github.io/country-flags/
        switch (lang) {
            case 'en':
                return '/ca.svg';
            case 'pt':
                return '/br.svg';
            default:
                return '';
        }
    };

    return (
        <div className="py-2 px-4 transition-shadow mr-10 mt-10 mobile:mr-0">
            <div className="bg-bg_dark dark:bg-bg_white flex h-12 justify-between rounded-full p-1 items-center">
                <img className="w-6 ml-5" src="/logo.png" />
                <div className="flex items-center">
                    <Tooltip target="tooltip-country" text={<T translation="flag_message" />} />
                    <img
                        src={correctFlag()}
                        className="w-7 mr-5"
                        id="tooltip-country"
                        data-tooltip-target="tooltip-country"
                    />
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
