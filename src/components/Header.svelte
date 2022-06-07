<script>
	import Settings from './Settings.svelte';

	import { t } from 'svelte-intl-precompile';
	import LocaleSelector from './LocaleSelector.svelte';
	import ScriptSelector from './ScriptSelector.svelte';
</script>

<!-- TODO: better layout -->
<nav class="navbar is-fixed-top" aria-label="main navigation" id="navbar">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://ukrajinskaknizka.cz">
			<img src="images/holubice.png" alt="Logo holubice" />
			<h1 class="title is-5 pl-3 ">{$t('title')}</h1>
		</a>

		<span
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start" />

		<div class="navbar-end">
			<div class="navbar-item">
				<LocaleSelector />
			</div>
			<div class="navbar-item">
				<ScriptSelector />
			</div>

			<a class="navbar-item" href="#o-projektu">{$t('about')}</a>
			<a class="navbar-item" href="#tvurci">{$t('authors')}</a>

			<a class="navbar-item" href="https://www.facebook.com/ukrajinskaknizka">
				<i class="fa-brands fa-facebook" />
				<span class="is-hidden-desktop">Facebook: ukrajinskaknizka</span>
			</a>

			<a class="navbar-item" href="https://www.instagram.com/ukrajinskaknizka/">
				<i class="fa-brands fa-instagram" />
				<span class="is-hidden-desktop">Instagram: ukrajinskaknizka</span>
			</a>

			<!-- TODO: move the github repo to this URL -->
			<a class="navbar-item" href="https://github.com/MikulasZelinka/book-for-ukraine">
				<i class="fa-brands fa-github" />
				<span class="is-hidden-desktop">GitHub: book-for-ukraine</span>
			</a>

			<!-- <div class="navbar-item has-dropdown is-hoverable">
        <Settings />
      </div> -->
		</div>
	</div>
</nav>

<style>
	.navbar {
		background-color: rgba(255, 255, 255, 0.69);
		/* background-color: white; */
		background-image: none;
		transition: top 0.3s;
		/* opacity: 0.5; */
	}
</style>
