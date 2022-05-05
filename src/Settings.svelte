<script lang="ts">
  //   https://github.com/jwlarocque/svelte-dragdroplist
  import DragDropList from "svelte-dragdroplist";

  import { Autoplay } from "./types/autoplay.enum";

  import { autoplay, languageOrder } from "./settings";

  console.debug(JSON.stringify($languageOrder));

  let _autoplay: Autoplay = Autoplay[$autoplay];
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

<div class="columns is-vcentered">
  <div class="column">
    <!-- <form> -->

    <div class="columns is-vcentered">
      <div class="column">Language order</div>

      <div class="column">
        <!-- TODO: 
        
        [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
        -->
        <DragDropList bind:data={_languageOrder} removesItems={false} />
      </div>
    </div>

    <!-- </form> -->
  </div>
  <div class="column">
    <!-- <form> -->
    Autoplay:
    <select bind:value={_autoplay}>
      {#each Object.values(Autoplay) as autoplayString}
        <option value={autoplayString} selected>
          {autoplayString}
        </option>
      {/each}
    </select>
    <!-- </form> -->
  </div>
</div>
