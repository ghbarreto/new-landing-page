import { useTheme } from '../hooks/theme';

export const Body = (props: any) => {
    return (
        <div slot="body" className={'bg-bg_white dark:bg-bg_dark h-screen w-screen'}>
            {props.body}
        </div>
    );
};
