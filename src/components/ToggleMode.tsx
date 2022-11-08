import { useStore } from '@nanostores/react';
import { isDarkMode } from '../themeMode';

export const ToggleMode = () => {
    const $isDarkMode = useStore(isDarkMode);
    return (
        <main>
            <button onClick={() => isDarkMode.set(!$isDarkMode)}>Toggle</button>
        </main>
    );
};
