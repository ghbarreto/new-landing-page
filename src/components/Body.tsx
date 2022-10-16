import { useStore } from '@nanostores/react';

import { returnMode, isDarkMode } from '../themeMode';
import bodyStyles from './Body.module.css';

export const Body = (props: any) => {
    const $isDarkMode = useStore(isDarkMode);
    const theme = returnMode($isDarkMode);

    return (
        <div style={{ backgroundColor: theme.background }} className={bodyStyles.body}>
            <div slot="body">{props.body}</div>
        </div>
    );
};
