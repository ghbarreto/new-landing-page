import { T } from './Lang';

type TextType = 'bold' | 'header' | 'italic' | 'header' | 'link';

const textType = (type: TextType) => {
    switch (type) {
        case 'header':
            return 'text-2xl font-bold';
        case 'bold':
            return 'text-lg font-bold';
        case 'italic':
            return 'text-sm font-italic';
        case 'link':
            return 'text-highlight_400 dark:text-lightblue_600 cursor-pointer font-semibold';
        default:
            return '';
    }
};

export const Text = ({ text, customClasses, type, href }: any) => {
    return (
        <p className={`text-bg_dark dark:text-bg_white font-montserrat ${customClasses ?? ''} ${textType(type)}`}>
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
