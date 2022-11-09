import { useStore } from '@nanostores/react';
import { isDarkMode } from '../themeMode';

export const ToggleMode = () => {
    const $isDarkMode = useStore(isDarkMode);

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => isDarkMode.set(!$isDarkMode)}
        >
            Toggle
        </button>
    );
};
