<script type="ts">
  import Text from "./Text.svelte";

  export let number: number;
  export let description: string;
  export let texts;
  export let objects;

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
    <img src="resources/images/pozadi_{number % 2}.jpg" alt={description} />

    <!-- <img
      src="resources/images/sova.png"
      style="position: absolute; top:20%; left:40%; width:20%"
    />

    <img
      src="resources/images/jesterka.png"
      style="position: absolute; top:50%; left:10%; width: auto"
    /> -->

    {#each texts as text, i}
      <Text
        bind:this={textElements[i]}
        page={number}
        order={i}
        {...text}
        on:message={handleAudioEnd}
      />
    {/each}

    {#each objects as object, i}
      <img
        class="obj"
        alt={object.name}
        src="resources/images/{object.name}.png"
        style="position: absolute; top:{object.top}%; left:{object.left}%; width: {object.width}%"
      />
    {/each}
  </figure>
  <p>{number}</p>
</div>

<style>
  .obj:hover {
    -webkit-animation-name: wiggle;
    -ms-animation-name: wiggle;
    animation-name: wiggle;
    -ms-animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    animation-duration: 1000ms;
    -webkit-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  @-webkit-keyframes wiggle {
    0% {
      -webkit-transform: rotate(10deg);
    }
    25% {
      -webkit-transform: rotate(-10deg);
    }
    50% {
      -webkit-transform: rotate(20deg);
    }
    75% {
      -webkit-transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-ms-keyframes wiggle {
    0% {
      -ms-transform: rotate(1deg);
    }
    25% {
      -ms-transform: rotate(-1deg);
    }
    50% {
      -ms-transform: rotate(1.5deg);
    }
    75% {
      -ms-transform: rotate(-5deg);
    }
    100% {
      -ms-transform: rotate(0deg);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(10deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
