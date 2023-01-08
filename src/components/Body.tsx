import { useTheme } from '../hooks/use-theme';

export const Body = (props: any) => {
    return (
        <>
            <section slot="body" className={'bg-bg_white dark:bg-bg_dark h-screen w-screen max-w-7xl mx-auto'}>
                {props.body}

                <footer
                    slot="footer"
                    className="p-4 flex items-center bg-bg_dark mt-20 mr-10 rounded-full h-12 shadow md:px-6 md:py-8 dark:bg-bg_white mobile:mr-0"
                >
                    {props.footer}
                </footer>
            </section>
        </>
    );
};
