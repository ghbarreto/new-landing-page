import { txt } from '../lang/txt';

export const dateFormat = (date: []) => {
    const arrayDate = date.join().split('-');
    const [year, month, day] = arrayDate;

    return `${monthHelper(Number(month))}, ${day} ${year} `;
};

export const monthHelper = (month: number) => {
    switch (month) {
        case 1:
            return txt.jan;
        case 2:
            return txt.feb;
        case 3:
            return txt.mar;
        case 4:
            return txt.apr;
        case 5:
            return txt.may;
        case 6:
            return txt.jun;
        case 7:
            return txt.jul;
        case 8:
            return txt.aug;
        case 9:
            return txt.sep;
        case 10:
            return txt.oct;
        case 11:
            return txt.nov;
        case 12:
            return txt.dec;
    }
};
