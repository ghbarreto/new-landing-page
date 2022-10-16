import { atom } from 'nanostores';
import { lightMode, darkMode } from './colors';

export const isDarkMode = atom(false);

export const returnMode = (mode: boolean) => (mode ? { ...darkMode } : { ...lightMode });
