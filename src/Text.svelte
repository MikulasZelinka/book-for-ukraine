<script>
  export let page;
  export let id;

  export let translations;

  export let top;
  export let left;

  let langToAudio = {};
  let langIsPlaying = {};

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onAudioEnd(language, id) {
    langIsPlaying[language] = false;
    console.log("ended:", page, language, id);
    dispatch("message", {
      language: language,
      id: id,
    });
  }

  export function play(language) {
    langIsPlaying[language] = true;
    langToAudio[language].play();
  }
</script>

<!-- Audio controls for each language -->
{#each Object.entries(translations) as [language, text]}
  <audio
    bind:this={langToAudio[language]}
    on:ended={(e) => onAudioEnd(language, id)}
  >
    <source src="resources/audio/{page}_{text}.mp3" type="audio/mpeg" />
  </audio>
{/each}

<!-- Text for each language -->
<div style="position: absolute; top: {top}%; left: {left}%;">
  {#each Object.entries(translations) as [language, text]}
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
