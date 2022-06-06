<script lang="ts">
	import { t } from 'svelte-intl-precompile';

	import { currentScript } from '../settings';
	import { Script } from '../types/script.enum';
</script>

<div class="control has-icons-left">
	<div class="select is-small">
		<select bind:value={$currentScript}>
			{#each Object.keys(Script) as script}
				<option value={Script[script]}>
					{$t(`scripts.${script}`)}
				</option>
			{/each}
		</select>
	</div>
	<div class="icon is-small is-left">
		<i class="fa-solid fa-book-atlas" />
	</div>
</div>
