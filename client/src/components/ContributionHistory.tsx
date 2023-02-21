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
                <section className="inline-flex justify-around">
                    {data &&
                        Object.values(data).map((e: any, index, arr) => {
                            const lastArrElement = Boolean(arr.length - 1 === index);
                            console.log(lastArrElement);
                            const verticalBorder =
                                arr.length > 1 && !lastArrElement
                                    ? 'border-r-4 border-highlight_400 dark:border-lightblue_400'
                                    : '';

                            return (
                                <div className={`ml-3 p-4 m-2 ${verticalBorder}`}>
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
