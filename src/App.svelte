<script lang="ts">
  import Settings from "./Settings.svelte";
  import Page from "./Page.svelte";

  async function getPages() {
    return await fetch("resources/pages.json").then((response) =>
      response.json()
    );
  }

  const pages = getPages();
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  />
</svelte:head>

<main>
  <h1>Svítej!</h1>
  <p>
    Neboli <a
      href="https://pointa.cz/project/d323a733-b37c-11ec-a145-0242ac120006"
      >Vítej</a
    >
    ve <a href="https://svelte.dev/">Svelte</a>.
  </p>

  <Settings />

  <hr />

  <div>
    {#await pages}
      <p>Loading...</p>
    {:then pages}
      {#each pages as page, i}
        <Page {...page} />
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</main>

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    /* max-width: 240px; */
    /* margin: 0 auto; */
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
