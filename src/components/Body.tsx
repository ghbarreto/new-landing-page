import { useTheme } from '../hooks/theme';

export const Body = (props: any) => {
    return (
        <body slot="body" className={'bg-bg_white dark:bg-bg_dark h-screen w-screen max-w-7xl mx-auto'}>
            {props.body}
        </body>
    );
};
