import React from 'react';

export const Container = (props: any) => {
    return (
        <section slot="body" className={'bg-bg_white dark:bg-bg_dark h-5/6 w-screen max-w-7xl mx-auto'}>
            {props.body}

            <footer className="fixed bottom-0 w-screen max-w-7xl mb-5 items-center bg-bg_dark mr-10 rounded-full h-12 shadow md:px-6 md:py-8 dark:bg-bg_white mobile:mr-0">
                {props.footer}
            </footer>
        </section>
    );
};
