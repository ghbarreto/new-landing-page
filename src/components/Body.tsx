import { useStore } from '@nanostores/react';

import { isDarkMode } from '../themeMode';

export const Body = (props: any) => {
    const $isDarkMode = useStore(isDarkMode);
    return (
        <div className={$isDarkMode ? 'dark' : 'white'}>
            <div slot="body" className={'bg-slate-400 dark:bg-slate-900'}>
                {props.body}
            </div>
        </div>
    );
};
