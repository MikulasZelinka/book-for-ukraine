<script type="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let page;
  export let order;

  export let id: string;

  export let translations;

  export let top;
  export let left;

  let langToAudio = new Map<string, HTMLAudioElement>();
  // let langToAudio = {};
  let langIsPlaying = {};

  import { languageOrder } from "./settings";

  $: textsSorted = Object.entries(translations).sort(
    ([a, aa], [b, bb]) => $languageOrder.indexOf(a) - $languageOrder.indexOf(b)
  );

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
{#each Object.entries(translations) as [language, text]}
  <audio
    bind:this={langToAudio[language]}
    on:ended={(e) => onAudioEnd(language, order)}
  >
    <source
      src="resources/audio/{language}/{language}_{id}.mp3"
      type="audio/mpeg"
    />
  </audio>
{/each}

<!-- Text for each language -->
<div style="position: absolute; top: {top}%; left: {left}%;">
  {#each textsSorted as [language, text]}
    <p on:click={() => play(language)} class:playing={langIsPlaying[language]}>
      {text}
    </p>
  {/each}
</div>

<style>
  p {
    color: black;
    white-space: pre-line;
    text-align: left;
    font-weight: 600;
    transition: font-weight 0.2s ease-in-out;
  }

  .playing {
    font-weight: 900;
  }
</style>
