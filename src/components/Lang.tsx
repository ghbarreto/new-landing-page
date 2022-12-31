import React from 'react';
import { useTranslation } from '../hooks/lang';

export const T = ({ translation }: { translation: string }) => {
    const { langHelper }: any = useTranslation();

    return langHelper()[translation] ?? translation;
};
