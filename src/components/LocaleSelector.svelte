<script lang="ts">
	import { t, locale } from 'svelte-intl-precompile';

	import {
		Language,
		languageNames,
		// languageCountries,
	} from '../types/language.enum';
</script>

<div class="control has-icons-left">
	<div class="select is-small">
		<select bind:value={$locale}>
			{#each Object.values(Language) as lang}
				{#if languageNames.get(lang)}
					<option value={lang}>
						{languageNames.get(lang)}
					</option>
				{/if}
			{/each}
		</select>
	</div>
	<div class="icon is-small is-left">
		<i class="fas fa-globe" />
	</div>
</div>
