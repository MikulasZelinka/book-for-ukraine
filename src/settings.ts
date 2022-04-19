import { Writable, writable } from 'svelte/store';
import { Autoplay } from './types/autoplay.enum';
import { Language } from './types/language.enum';

export const languages: Writable<Array<Language>> = writable([Language.cs, Language.ua]);
export const autoplay: Writable<Autoplay> = writable(Autoplay.Off);