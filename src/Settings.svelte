<script context="module" lang="ts">
  //   import { Autoplay } from "./types/autoplay.enum";

  //   export let autoplay: string = Autoplay.Off;
</script>

<script lang="ts">
  //   https://github.com/jwlarocque/svelte-dragdroplist
  import DragDropList from "svelte-dragdroplist";

  import { languageOrder } from "./settings.ts";

  console.debug(JSON.stringify($languageOrder));

  let l = [...$languageOrder];

  $: if (l != $languageOrder) {
    console.debug("setting lO", $languageOrder, "to: ", l);
    languageOrder.set(l);
  }
</script>

<DragDropList bind:data={l} removesItems={false} />

<!-- <select bind:value={autoplay}>
  {#each Object.values(Autoplay) as autoplayString}
    <option value={autoplayString}>
      {autoplayString}
    </option>
  {/each}
</select> -->
