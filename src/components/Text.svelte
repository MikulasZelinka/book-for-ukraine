<script type="ts">
  import { createEventDispatcher } from "svelte";

  import { languageOrder } from "../settings";

  import type { Position } from "../types/position.type";
  import type { Translation } from "../types/translation.type";

  const dispatch = createEventDispatcher();

  export let page: number;
  export let order: number;

  export let name: string;

  export let translations: Translation[];
  export let positions: Position[];

  export let columnWidth: number;

  $: fontSize = columnWidth / 41;

  let langToAudio = new Map<string, HTMLAudioElement>();
  // let langToAudio = {};
  let langIsPlaying = {};

  // $: console.log("tr:", translations);

  // $: textsSorted = Object.entries(translations).sort(
  //   ([a, aa], [b, bb]) => $languageOrder.indexOf(a) - $languageOrder.indexOf(b)
  // );

  // console.log("ts:", JSON.stringify(textsSorted));

  function onAudioEnd(language, order) {
    langIsPlaying[language] = false;
    console.log("ended:", page, language, order);
    dispatch("message", {
      language: language,
      order: order,
    });
  }

  export function play(language) {
    console.debug("playing lang", language);
    console.debug("audio map", langToAudio);

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
  <audio
    bind:this={langToAudio[translation.lang]}
    on:ended={(e) => onAudioEnd(translation.lang, order)}
  >
    <source
      src="resources/audio/{translation.lang}/{translation.lang}_{name}.mp3"
      type="audio/mpeg"
    />
  </audio>
{/each}

<!-- Text for each language -->
<!-- TODO: respect language sorting again if it's surfaced in settings -->
<!-- {#each textsSorted as [language, text]} -->
{#each translations as translation}
  <div
    class="story"
    style="position: absolute;
    top: {positions[$languageOrder.indexOf(translation.lang)]
      .top}%; left: {positions[$languageOrder.indexOf(translation.lang)]
      .left}%; width: {positions[$languageOrder.indexOf(translation.lang)]
      .width}%; 
     height: {positions[$languageOrder.indexOf(translation.lang)].height}%;
     border: 0px solid red;
    "
  >
    <p
      on:click={() => play(translation.lang)}
      class:playing={langIsPlaying[translation.lang]}
      style="text-align: {translation.lang == 'cs'
        ? 'right'
        : 'left'}; font-size: {fontSize}px;
      "
    >
      {translation.text}
    </p>
  </div>
{/each}

<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Open+Sans"); */

  p {
    /* TODO: make smooth weight transitions work even with this font-family spec: */
    /* font-family: Ubuntu, Arial, Helvetica, sans-serif; */
    /* font-family: "Open Sans", Arial, Helvetica, sans-serif; */
    /* font-family: "Arial"; */
    /* font-family: "Ubuntu"; */
    color: black;
    white-space: pre-line;
    text-align: left;
    font-weight: 600;
    transition: font-weight 0.1s ease-in-out;
    text-shadow: 1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white;
    line-height: 1.2;
  }

  .playing {
    font-weight: 750;
  }

  .author {
    /* Ubuntu-light */
    /* 300 */
  }

  .title {
    /* Ubuntu-Bold */
    /* 700 */
  }

  .story {
    z-index: 2;
    /* Ubuntu-Medium */
    /* 500 */
  }
</style>
