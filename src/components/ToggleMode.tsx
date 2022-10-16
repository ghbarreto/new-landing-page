import { useStore } from '@nanostores/react';
import { isDarkMode } from '../themeMode';

export const ToggleMode = ({ children }: any) => {
    const $isDarkMode = useStore(isDarkMode);
    return (
        <main>
            <button onClick={() => isDarkMode.set(!$isDarkMode)}>Toggle</button>
            {children}
        </main>
    );
};
