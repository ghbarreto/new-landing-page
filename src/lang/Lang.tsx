import { useTranslation } from '../hooks/use-lang';

export const T = ({ translation }: { translation: string }) => {
    const { langHelper }: any = useTranslation();

    return langHelper()[translation] ?? translation;
};
