export const colorHelper = (num: number) => {
    switch (true) {
        case num > 0 && num <= 2:
            return 'bg-highlight_300 dark:bg-lightblue_300';
        case num >= 2 && num <= 4:
            return 'bg-highlight_400 dark:bg-lightblue_400';
        case num >= 5 && num <= 7:
            return 'bg-highlight_500 dark:bg-lightblue_500';
        case num > 7:
            return 'bg-highlight_600 dark:bg-lightblue_600';
        default:
            return 'bg-gray-200 dark:bg-lightblue_800';
    }
};
