<script context="module">
	import { addMessages, init } from 'svelte-intl-precompile';
	import cs from '$locales/cs';
	import uk from '$locales/uk';
	import en from '$locales/en';
	addMessages('cs', cs);
	addMessages('uk', uk);
	addMessages('en', en);
	init({
		initialLocale: 'cs',
		fallbackLocale: 'cs',
	});
</script>

<script lang="ts">
	// import { themeChange } from 'theme-change';

	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	// onMount(() => {
	// 	themeChange(false);
	// });
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
