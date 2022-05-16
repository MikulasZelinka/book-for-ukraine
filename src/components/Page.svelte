<script type="ts">
  import { Autoplay } from "../types/autoplay.enum";
  import type { Page } from "../types/page.type";

  import { autoplay, languageOrder } from "../settings";

  import Text from "./Text.svelte";
  import Annotation from "./Annotation.svelte";
  import Title from "./Title.svelte";

  export let page: Page;

  let columnWidth: number = 0;
  let innerWidth: number = 0;

  let textElements = {};

  // 'duha' spans two pages and we have to dynamically:
  // - show the overflow if we see two facing pages
  // - hide the overflow if we see a single page (otherwise duha would well... overflow the page)
  $: overflow = columnWidth / innerWidth < 0.9 ? "visible" : "hidden";

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

<svelte:window bind:innerWidth />

<div
  class="column is-half mb-1"
  bind:clientWidth={columnWidth}
  style="overflow: {overflow}"
>
  <figure class="image">
    <img
      src="resources/images/pozadi_{page.number % 2}.jpg"
      alt="Page {page.number}"
      class="background"
    />

    {#if page.number == 0}
      <Annotation {columnWidth} />
    {/if}

    {#if page.number == 1}
      <Title {columnWidth} />
    {/if}

    {#each page.stories as story, i}
      {#if story.translations}
        <Text
          bind:this={textElements[i]}
          {columnWidth}
          page={page.number}
          order={i}
          name={story.name}
          translations={story.translations}
          positions={story.positions_text}
          on:message={handleAudioEnd}
        />
      {/if}
    {/each}

    {#each page.stories as story, i}
      {#if story.position_image}
        <img
          id={story.name}
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
  <!-- <p>{page.number}</p> -->
</div>

<style>
  .obj {
    z-index: 1;
    cursor: pointer;
  }
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
      -webkit-transform: rotate(0deg);
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
      -ms-transform: rotate(0deg);
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
      transform: rotate(0deg);
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
