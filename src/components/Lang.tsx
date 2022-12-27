import React from 'react';
import { useTranslation } from '../hooks/lang';

export const T = ({ translation }: { translation: string }) => {
    const lang: any = useTranslation();

    return lang()[translation] ?? translation;
};
