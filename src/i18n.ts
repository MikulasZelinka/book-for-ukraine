// copied almost 1:1 from:
// https://github.com/PhraseApp-Blog/svelte-i18n-demo/tree/ab2e6aef2c3088eb20dfdab36197b1e4da61a5cb

import { derived } from "svelte/store";
import { dictionary, locale, _ } from "svelte-i18n";
import { Language } from "./types/language.enum";

const DEFAULT_LOCALE = Language.cs;
const MESSAGE_FILE_URL_TEMPLATE = "/resources/locales/{locale}.json";

let cachedLocale;

function setupI18n({ withLocale: _locale } = { withLocale: DEFAULT_LOCALE }) {
  const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
    "{locale}",
    _locale
  );

  return fetch(messsagesFileUrl)
    .then((response) => response.json())
    .then((messages) => {
      dictionary.set({ [_locale]: messages });

      cachedLocale = _locale;

      locale.set(_locale);
    });
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat(cachedLocale, options).format(new Date(date));
}

const isLocaleLoaded = derived(
  locale,
  ($locale) => typeof $locale === "string"
);

export { _, locale, setupI18n, formatDate, isLocaleLoaded };
