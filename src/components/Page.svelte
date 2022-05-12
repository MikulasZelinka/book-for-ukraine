<script type="ts">
  import { Autoplay } from "../types/autoplay.enum";
  import type { Story } from "../types/story.type";
  import type { Page } from "../types/page.type";

  import { autoplay, languageOrder } from "../settings";

  import Text from "./Text.svelte";

  // export let number: number;
  // export let stories: Story[];
  export let page: Page;
  // export let texts;
  // export let objects;

  let textElements = {};

  function handleAudioEnd(event) {
    console.log("handling", event.detail);
    let i = parseInt(event.detail.order);

    if ($autoplay == Autoplay.OneLanguage && page.stories.length > i + 1) {
      textElements[i + 1].play(event.detail.language);
    } else if ($autoplay == Autoplay.AllLanguages) {
      let langIndex = $languageOrder.indexOf(event.detail.language);

      if (langIndex >= 0 && langIndex + 1 < $languageOrder.length) {
        textElements[i].play($languageOrder[langIndex + 1]);
      }
    }
  }
</script>

<!-- {console.log("PAGE WORKS", page)} -->

<div class="column is-half">
  <figure class="image">
    <img
      src="resources/images/pozadi_{page.number % 2}.jpg"
      alt="Page {page.number}"
    />

    <!-- <img
      src="resources/images/sova.png"
      style="position: absolute; top:20%; left:40%; width:20%"
    />

    <img
      src="resources/images/jesterka.png"
      style="position: absolute; top:50%; left:10%; width: auto"
    /> -->

    <!-- {console.log("aa", page.stories)} -->

    {#if page.number == 0}
      <p style="position: absolute; top: 20%; left: 30%; font-size: x-large;">
        Sem pak dokážu dát anotaci.
      </p>
    {/if}

    {#if page.number == 1}
      <p style="position: absolute; top: 60%; left: 20%; font-size: x-large;">
        A sem dokážu dát autora a název knihy.
      </p>
    {/if}

    {#each page.stories as story, i}
      {#if story.translations}
        <Text
          bind:this={textElements[i]}
          page={page.number}
          order={i}
          name={story.name}
          translations={story.translations}
          positions={story.positions_text}
          on:message={handleAudioEnd}
        />
      {/if}

      <!-- <p>{JSON.stringify(story)}</p> -->
    {/each}
    <!-- {...text} -->

    {#each page.stories as story, i}
      {#if story.position_image}
        <img
          class="obj"
          alt={story.name}
          src="resources/images/{story.name}.png"
          style="position: absolute; top:{story.position_image
            .top}%; left:{story.position_image.left}%; width: {story
            .position_image.width}%"
        />
      {/if}
    {/each}
  </figure>
  <p>{page.number}</p>
</div>

<style>
  /* Wiggle animation from: https://codepen.io/theDeanH/pen/zBZXLN */

  .obj:hover,
  .obj:active {
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
