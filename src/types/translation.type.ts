import type { Language } from './language.enum';
import type { Script } from './script.enum';

export type Translation = {
	// TODO: change to Language
	lang: Language;
	texts: Map<Script, string>;
};
