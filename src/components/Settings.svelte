<script lang="ts">
  //   https://github.com/jwlarocque/svelte-dragdroplist
  // import DragDropList from "svelte-dragdroplist";

  import { Autoplay } from "../types/autoplay.enum";

  import { autoplay, languageOrder } from "../settings";

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

<!-- <form> -->

<!-- <div class="columns is-vcentered">
      <div class="column">Language order</div>

      <div class="column"> -->
<!-- TODO: 
        
        [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
        -->
<!-- <DragDropList bind:data={_languageOrder} removesItems={false} />
      </div>
    </div> -->

<!-- </form> -->

<!-- <form> -->

<!-- </form> -->

<!-- TODO: submenu overflows from view on hover -->

<a class="navbar-link"> Nastavení </a>

<div class="navbar-dropdown">
  <span class="navbar-item">
    Automatické přehrávání:
    <select bind:value={_autoplay}>
      {#each Object.values(Autoplay) as autoplayString}
        <option value={autoplayString} selected>
          {autoplayString}
        </option>
      {/each}
    </select>
  </span>
  <a class="navbar-item"> Tady </a>
  <a class="navbar-item"> Budou </a>
  <hr class="navbar-divider" />
  <a class="navbar-item"> Další možnosti </a>
</div>
