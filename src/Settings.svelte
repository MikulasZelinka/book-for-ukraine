<script lang="ts">
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

  import Select from "svelte-select";

  let items = [
    { value: "chocolate", label: "Chocolate" },
    { value: "pizza", label: "Pizza" },
    { value: "cake", label: "Cake" },
    { value: "chips", label: "Chips" },
    { value: "ice-cream", label: "Ice Cream" },
  ];

  let value = { value: "cake", label: "Cake" };

  function handleSelect(event) {
    console.log("selected item", event.detail);
    // .. do something here 🙂
  }
</script>

<div class="columns is-vcentered">
  <div class="column">
    <!-- <form> -->

    <div class="columns is-vcentered">
      <div class="column">Language order</div>

      <div class="column" />
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
a
<span class="fi fi-cz" />
b
<Select {items} {value} on:select={handleSelect} />
