import { useTheme } from '../hooks/theme';

export const Body = (props: any) => {
    return (
        <div slot="body" className={'bg-slate-400 dark:bg-slate-900 h-screen w-screen'}>
            {props.body}
        </div>
    );
};
