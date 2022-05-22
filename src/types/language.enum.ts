import { Script } from "./script.enum";

export enum Language {
  // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
  cs = "cs",
  en = "en",
  uk = "uk",

  uk_ct = "uk_ct",
  uk_gt = "uk_gt",
}

//
// cs = "Česky",
// en = "English",
// uk = "Українська",

let languageNames = new Map<Language, string>([
  [Language.cs, "Česky"],
  [Language.en, "English"],
  [Language.uk_ct, "Українська (Charles Translator)"],
  [Language.uk_gt, "Українська (Google Translate)"],
  // [Language.uk, "Українська"],
]);

// lang code to country code to link flags from:
// https://github.com/lipis/flag-icons
let languageCountries = new Map<Language, string>([
  [Language.cs, "cz"],
  [Language.en, "gb"],
  // [Language.uk, "ua"],
]);

let languageScripts = new Map<Language, Script>([
  [Language.cs, Script.latin],
  [Language.uk, Script.cyrillic],
]);

export { languageNames, languageCountries, languageScripts };
