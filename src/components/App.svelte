<script lang="ts">
  import Page from "./Page.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import About from "./About.svelte";

  import { _, setupI18n, isLocaleLoaded } from "../i18n";
  import Banner from "./Banner.svelte";

  $: if (!$isLocaleLoaded) {
    // default is set directly in i18n.ts
    // setupI18n({ withLocale: "cs" });
    setupI18n();
  }

  async function getPages() {
    return await fetch("resources/pages.json").then((response) =>
      response.json()
    );
  }

  const pages = getPages();
</script>

{#if $isLocaleLoaded}
  <Header />

  <Banner />

  <main>
    <div class="columns is-gapless is-multiline">
      {#await pages}
        <p>{$_("loading")}</p>
      {:then pages}
        {#each pages as page, i}
          <Page {page} />
        {/each}
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    </div>
  </main>

  <About />

  <Footer />
{:else}
  <p>Loading locale...</p>
{/if}

<style>
  main {
    text-align: center;
  }
</style>
