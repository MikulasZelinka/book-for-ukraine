<script lang="ts">
	import { t } from 'svelte-intl-precompile';

	import Banner from '../components//Banner.svelte';
	import Page from '../components/Page.svelte';
	import About from '../components/About.svelte';

	async function getPages() {
		return await fetch('pages.json').then((response) => response.json());
	}

	const pages = getPages();
</script>

<!-- <Banner /> -->

<main>
	<div class="columns is-gapless is-multiline">
		{#await pages}
			<p>{$t('loading')}</p>
		{:then pages}
			{#each pages as page, i}
				<Page {page} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</main>

<About />

<style>
	main {
		text-align: center;
	}
</style>
