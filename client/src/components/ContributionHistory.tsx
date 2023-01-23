import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';

import { Loading } from './Loading';
import { square } from '../store/square';
import { fetchContributionHistory } from '../utils/fetch';
import { Text } from './Text';

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

    return (
        <div className="flex justify-center mt-7">
            {isLoading ? (
                <Loading />
            ) : (
                <section>
                    {data &&
                        Object.values(data).map(e => {
                            return (
                                <div>
                                    {Object.entries(e).map(v => {
                                        const [key, value] = v;
                                        const isHeader = key.split('_')[0] === 'header';

                                        return (
                                            <Text
                                                type={isHeader ? `bold` : `italic`}
                                                customClasses={`${!isHeader && 'ml-5'} text-start`}
                                                text={value}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                </section>
            )}
        </div>
    );
};
