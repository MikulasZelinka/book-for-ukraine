<script lang="ts">
  import { _, locale, setupI18n } from "../i18n";

  import {
    Language,
    languageNames,
    // languageCountries,
  } from "../types/language.enum";
</script>

<div class="control has-icons-left">
  <div class="select is-small">
    <select
      bind:value={$locale}
      on:change={() => setupI18n({ withLocale: Language[$locale] })}
    >
      {#each Object.keys(Language) as lang}
        <option value={Language[lang]}>
          <!-- doesn't work inside option, unfortunately -->
          <!-- <span class="fi fi-{languageCountries.get(Language[lang])}" /> -->
          {languageNames.get(Language[lang])}
        </option>
      {/each}
    </select>
  </div>
  <div class="icon is-small is-left">
    <i class="fas fa-globe" />
  </div>
</div>
