<script lang="ts">
  import Settings from "./Settings.svelte";
  import Page from "./Page.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  async function getPages() {
    // return await fetch("resources/pages.json").then((response) =>
    // return await fetch("resources/pages_with_objects.json").then((response) =>
    return await fetch("resources/pages.json").then((response) =>
      response.json()
    );
  }

  const pages = getPages();
</script>

<Header />

<main>
  <div class="columns is-gapless is-multiline">
    {#await pages}
      <p>Loading...</p>
    {:then pages}
      {#each pages as page, i}
        <!-- {console.log(page)} -->
        <Page {page} />
        <!-- <Page page={{ pagez }} /> -->
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</main>

<section class="section is-medium">
  <h1 class="title">O projektu</h1>
  <div class="columns" style="overflow:hidden;">
    <div class="column">
      <h2 class="subtitle">Knížka</h2>
      <p>Cílem je vystiknout a zdarma poskytnout knížku ukrajinským dětem.</p>
    </div>
    <div class="column">
      <h2 class="subtitle">Autoři</h2>
      <p>Na projektu se dobrovolně a bez nároku na odměnu podílí:</p>
    </div>
  </div>
</section>
<Footer />

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    /* max-width: 240px; */
    /* margin: 0 auto; */
    /* font-family: "Open Sans", sans-serif; */
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
