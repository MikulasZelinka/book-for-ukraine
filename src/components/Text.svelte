<script type="ts">
	import { createEventDispatcher } from 'svelte';

	import { currentScript, languageOrder } from '../settings';
	import { Language, languageScripts } from '../types/language.enum';

	import type { Position } from '../types/position.type';
	import { Script } from '../types/script.enum';
	import type { Translation } from '../types/translation.type';

	const dispatch = createEventDispatcher();

	// TODO: unused, remove here and from the generation script
	export let page: number;
	page;

	export let order: number;

	export let name: string;

	export let translations: Translation[];
	export let positions: Position[];

	export let align: string;

	export let columnWidth: number;

	$: fontSize = columnWidth / 30;

	let langToAudio = new Map<string, HTMLAudioElement>();
	// let langToAudio = {};
	let langIsPlaying = {};

	// $: console.log("tr:", translations);

	// $: textsSorted = Object.entries(translations).sort(
	//   ([a, aa], [b, bb]) => $languageOrder.indexOf(a) - $languageOrder.indexOf(b)
	// );

	// console.log("ts:", JSON.stringify(textsSorted));

	function onAudioEnd(language: Language, order: number) {
		langIsPlaying[language] = false;
		// console.log("ended:", page, language, order);
		dispatch('message', {
			language: language,
			order: order,
		});
	}

	export function play(language) {
		// console.debug("playing lang", language);
		// console.debug("audio map", langToAudio);

		langIsPlaying[language] = true;
		langToAudio[language].play();
	}

	// $: {
	//   console.debug("Audio: ", langToAudio);
	//   console.debug("Texts sorted: ", textsSorted);
	// }
</script>

<!-- {console.log(languageOrder)} -->
<!-- {console.log("ts:", JSON.stringify(textsSorted))} -->

<!--
  Audio controls for each language

  For some reason, this needs to be split from the textsSorted each block,
  otherwise the bindings per-language to langToAudio get messed up.
-->
{#each translations as translation}
	<audio bind:this={langToAudio[translation.lang]} on:ended={(e) => onAudioEnd(translation.lang, order)} preload="none">
		<source src="audio/{translation.lang}/{translation.lang}_{name}.mp3" type="audio/mpeg" />
	</audio>
{/each}

<!-- Text for each language -->
<!-- TODO: respect language sorting again if it's surfaced in settings -->
<!-- {#each textsSorted as [language, text]} -->
{#each translations as translation}
	<!-- <div
    class="story"
    style="position: absolute;
    top: {positions[$languageOrder.indexOf(translation.lang)]
      .top}%; left: {positions[$languageOrder.indexOf(translation.lang)]
      .left}%;width: {positions[$languageOrder.indexOf(translation.lang)]
      .width}%; 
     height: {positions[$languageOrder.indexOf(translation.lang)].height}%;
     border: 0px solid red;
    "
  > -->

	<!-- Can ignore width % to not overflow in different scripts -->
	<div
		class="story"
		style="position: absolute; top: {positions[$languageOrder.indexOf(translation.lang)].top}%; left: {positions[
			$languageOrder.indexOf(translation.lang)
		].left}%;
   height: {positions[$languageOrder.indexOf(translation.lang)].height}%;
   border: 0px solid red;
  ">
		<p
			on:click={() => play(translation.lang)}
			class:playing={langIsPlaying[translation.lang]}
			style="text-align: {align}; font-size: {fontSize}px;
      ">
			{translation.texts[$currentScript === Script.default ? languageScripts.get(translation.lang) : $currentScript]}
		</p>
	</div>
{/each}

<style>
	p {
		color: black;
		white-space: pre-line;
		text-align: left;
		/* Ubuntu doesn't have variable font weight, we animate scale instead */
		/* font-weight: 500; */
		font-weight: 500;
		transition: all 0.4s ease-in-out;
		/* text-shadow: 1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white; */
		line-height: 1.2;
		cursor: pointer;
	}

	.playing {
		/* font-weight: 700; */
		transform: scale(1.1);
	}

	/* .author {
		Ubuntu-light
		300
	}

	.title {
		Ubuntu-Bold
		700
	} */

	.story {
		z-index: 2;
		/* Ubuntu-Medium */
		/* 500 */
	}
</style>
