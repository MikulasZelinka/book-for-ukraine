<script type="ts">
  import Text from "./Text.svelte";

  export let number: number;
  export let description: string;
  export let texts;

  import { autoplay, languageOrder } from "./settings";

  import { Autoplay } from "./types/autoplay.enum";

  let textElements = {};

  function handleAudioEnd(event) {
    console.log("handling", event.detail);
    let i = parseInt(event.detail.order);

    if ($autoplay == Autoplay.OneLanguage && texts.length > i + 1) {
      textElements[i + 1].play(event.detail.language);
    } else if ($autoplay == Autoplay.AllLanguages) {
      let langIndex = $languageOrder.indexOf(event.detail.language);

      if (langIndex >= 0 && langIndex + 1 < $languageOrder.length) {
        textElements[i].play($languageOrder[langIndex + 1]);
      }
    }
  }
</script>

<div class="column is-half">
  <figure class="image">
    <img src="resources/pages/split/{number}.jpg" alt={description} />

    {#each texts as text, i}
      <Text
        bind:this={textElements[i]}
        page={number}
        order={i}
        {...text}
        on:message={handleAudioEnd}
      />
    {/each}
  </figure>
  <p>{number}</p>
</div>
