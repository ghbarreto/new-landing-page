import React, { useCallback, useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';

import { Loading } from './Loading';
import { square } from '../store/square';
import { fetchContributionHistory } from '../utils/fetch';

export const ContributionHistory = () => {
    const $square = useStore(square);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<any>();

    const [column, _remainder] = String(Number($square) / 7).split('.');

    useEffect(() => {
        if ($square) {
            (async () => {
                setIsLoading(true);
                const { data: contribution } = await fetchContributionHistory({
                    clicked_row: Number($square) % 7,
                    clicked_column: Number(column),
                });
                setIsLoading(false);
                setData(contribution);
            })();
        }
    }, [$square]);

    return <div>{isLoading ? <Loading /> : <div dangerouslySetInnerHTML={{ __html: data?.inner_html }} />}</div>;
};
