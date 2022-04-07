<script>
  export let page;
  export let translations;
  export let top;
  export let left;

  let audio = {};
</script>

{#each Object.entries(translations) as [language, text]}
  <audio bind:this={audio[language]}>
    <source src="resources/audio/{page}_{text}.mp3" type="audio/mpeg" />
  </audio>
{/each}

<div style="position: absolute; top: {top}%; left: {left}%;">
  {#each Object.entries(translations) as [language, text]}
    <p on:click={() => audio[language].play()}>{text}</p>
  {/each}
</div>
