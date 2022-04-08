<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let page;
  export let id;

  export let translations;

  export let top;
  export let left;

  let langToAudio = {};
  let langIsPlaying = {};

  import { languageOrder } from "./settings.ts";
  // console.log("tr:", JSON.stringify(translations));

  // console.log(
  //   "tr sorted:",
  //   JSON.stringify(
  //     Object.entries(translations).sort(
  //       ([a, aa], [b, bb]) =>
  //         $languageOrder.indexOf(a) - $languageOrder.indexOf(b)
  //     )
  //   )
  // );
  // console.log("lor", $languageOrder);

  $: textsSorted = Object.entries(translations).sort(
    ([a, aa], [b, bb]) => $languageOrder.indexOf(a) - $languageOrder.indexOf(b)
  );

  // console.log("ts:", JSON.stringify(textsSorted));

  function onAudioEnd(language, id) {
    langIsPlaying[language] = false;
    console.log("ended:", page, language, id);
    dispatch("message", {
      language: language,
      id: id,
    });
  }

  export function play(language) {
    console.debug("playing lang", language);
    langIsPlaying[language] = true;
    langToAudio[language].play();
  }
</script>

{console.log(languageOrder)}

<div style="position: absolute; top: {top}%; left: {left}%;">
  <!-- {#each Object.entries(translations) as [language, text]} -->
  {#each textsSorted as [language, text]}
    <!-- Audio controls for each language -->
    <audio
      bind:this={langToAudio[language]}
      on:ended={(e) => onAudioEnd(language, id)}
    >
      <source src="resources/audio/{page}_{text}.mp3" type="audio/mpeg" />
    </audio>

    <!-- Text for each language -->
    <p on:click={() => play(language)} class:playing={langIsPlaying[language]}>
      {text}
    </p>
  {/each}
</div>

<style>
  p {
    font-weight: 400;
    transition: font-weight 0.2s ease-in-out;
  }

  .playing {
    font-weight: 900;
  }
</style>
