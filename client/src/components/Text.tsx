import { T } from '../lang';

type TextType = 'bold' | 'header' | 'italic' | 'header' | 'link' | 'footer';

const textType = (type: TextType) => {
    switch (type) {
        case 'header':
            return 'text-2xl font-bold';
        case 'bold':
            return 'text-lg font-bold';
        case 'italic':
            return 'text-sm font-italic';
        case 'footer':
            return 'text-sm font-italic text-bg_white dark:text-bg_dark';
        case 'link':
            return 'text-highlight_400 dark:text-lightblue_600 cursor-pointer font-semibold';
        default:
            return '';
    }
};

export const Text = ({ text, customClasses, type, href }: any) => {
    return (
        <p className={`font-montserrat ${customClasses ?? ''} ${textType(type)}`}>
            {type === 'link' ? (
                <a className={textType(type)} href={href} target="_blank">
                    <T translation={text} />
                </a>
            ) : (
                <T translation={text} />
            )}
        </p>
    );
};
