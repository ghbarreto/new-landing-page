import { useEffect, useState } from 'react';

import { en, pt, es } from '../lang';

export const useTranslation = () => {
    const [lang, setLang] = useState<'en' | 'es' | 'pt' | '' | string>('');

    useEffect(() => {
        if (globalThis) {
            setLang(globalThis.navigator.language.split('-')[0].toLowerCase());
        }
    }, [setLang]);

    const langHelper = () => {
        switch (true) {
            case lang === 'en':
                return en;
            case lang === 'es':
                return es;
            case lang === 'pt':
                return pt;
            default:
                return en;
        }
    };

    return { langHelper, lang };
};
