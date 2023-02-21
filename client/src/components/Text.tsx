import { T } from '../lang';

type TextType = 'bold' | 'header' | 'italic' | 'header' | 'link' | 'footer' | 'body';

const textType = (type: TextType) => {
    const defaultTextType = `text-bg_dark dark:text-bg_white`;
    switch (type) {
        case 'header':
            return `text-2xl font-bold ${defaultTextType}`;
        case 'body':
            return `text-base ${defaultTextType}`;
        case 'bold':
            return `text-lg font-bold ${defaultTextType}`;
        case 'italic':
            return `text-sm font-italic ${defaultTextType}`;
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
        <p className={`font-montserrat ${textType(type)} ${customClasses ?? ''} `}>
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
