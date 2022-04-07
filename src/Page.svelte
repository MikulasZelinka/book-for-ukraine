<script>
  import Text from "./Text.svelte";

  export let number;
  export let description;
  export let texts;
  export let autoplay = true;

  let textElements = {};

  function handleAudioEnd(event) {
    console.log("handling", event.detail);
    let i = parseInt(event.detail.id);
    if (autoplay && texts.length > i + 1) {
      textElements[i + 1].play(event.detail.language);
    }
  }
</script>

<figure class="image is-2by1">
  <img src="resources/images/{number}.png" alt={description} />

  {#each texts as text, i}
    <Text
      bind:this={textElements[i]}
      page={number}
      id={i}
      {...text}
      on:message={handleAudioEnd}
    />
  {/each}
</figure>
<p>{number}</p>
