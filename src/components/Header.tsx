import { useStore } from '@nanostores/react';

import { returnMode, isDarkMode } from '../themeMode';
import { ToggleMode } from './ToggleMode';

export const Header = () => {
    const $isDarkMode = useStore(isDarkMode);
    const theme = returnMode($isDarkMode);
    return (
        <div>
            HEADER
            <ToggleMode />
        </div>
    );
};
