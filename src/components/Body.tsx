import { useStore } from '@nanostores/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { isDarkMode } from '../themeMode';

const queryClient = new QueryClient();

export const Body = (props: any) => {
    const $isDarkMode = useStore(isDarkMode);

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json()),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <div className={$isDarkMode ? 'dark' : ''}>
                <div slot="body">{props.body}</div>
                asdasdasd
                {isLoading ? 'Loading' : 'loaded'}
            </div>
        </QueryClientProvider>
    );
};
