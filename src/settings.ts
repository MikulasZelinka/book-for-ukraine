import { Writable, writable } from 'svelte/store';
import { Autoplay } from './types/autoplay.enum';

export const languageOrder: Writable<Array<string>> = writable(["cs", "ua"]);
export const autoplay: Writable<Autoplay> = writable(Autoplay.Off);