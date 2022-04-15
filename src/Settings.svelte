<script lang="ts">
  //   https://github.com/jwlarocque/svelte-dragdroplist
  import DragDropList from "svelte-dragdroplist";

  import { Autoplay } from "./types/autoplay.enum";

  import { autoplay, languageOrder } from "./settings.ts";

  console.debug(JSON.stringify($languageOrder));

  let _autoplay: Autoplay = Autoplay[autoplay];
  let _languageOrder: Array<string> = [...$languageOrder];

  $: if (_languageOrder != $languageOrder) {
    console.debug(
      "setting languageOrder",
      $languageOrder,
      "to: ",
      _languageOrder
    );
    languageOrder.set(_languageOrder);
  }

  $: if (_autoplay != $autoplay) {
    console.debug("setting autoplay", $autoplay, "to: ", _autoplay);
    autoplay.set(_autoplay);
  }
</script>

<hr />

<form>
  Language order:
  <DragDropList bind:data={_languageOrder} removesItems={false} />
</form>

<hr />

<form>
  Autoplay:
  <select bind:value={_autoplay}>
    {#each Object.values(Autoplay) as autoplayString}
      <option value={autoplayString} selected>
        {autoplayString}
      </option>
    {/each}
  </select>
</form>

<hr />
