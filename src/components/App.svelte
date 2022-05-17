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
  <div class="content">
    <div class="columns is-desktop" style="overflow:hidden;">
      <div class="column">
        <h2 class="title" id="o-projektu">O projektu</h2>
        <p>
          Cílem je pomoci integrovat ukrajinské děti, vykouzlit na jejich
          tvářích úsměvy a hravou formou je seznámit s češtinou. Projekt však
          poskytuje prostor pro oboustrannou kulturní výměnu.
        </p>

        <p>
          Webová verze brzy nabídne i další jazyky. K webu vzniká obrázková
          knížka s bilingvním pexesem k procvičení slovíček.
        </p>

        <p>
          Podpoříte nás? Sledujte nás na sociálních sítích, chystáme
          crowdfundingovou kampaň.
        </p>
      </div>
      <div class="column">
        <h2 class="title" id="tvurci">Tvůrci</h2>
        <ul>
          <li>
            Web: <a href="https://github.com/MikulasZelinka">Mikuláš Zelinka</a
            >, mikulas<span style="display:none">name</span>@zelinka.dev
          </li>
          <li>
            Obrázky a texty: Tereza Axmannová, tereza.axmann<span
              style="display:none">name</span
            >@gmail.com
          </li>
          <li>Ukrajinský překlad: Anastasia Litvincová</li>
          <li>Grafické zpracování obrázků: Tereza Drnovcová</li>
          <li>
            Sazba: Martin Koukl, martin.design.grafika<span style="display:none"
              >name</span
            >@gmail.com
          </li>
          <li>Redakce a korektura: Eva Trčková</li>
        </ul>

        <p>
          Děkuji všem spolupracovníkům za pomoc uvést projekt do života bez
          nároku na honorář.
        </p>
      </div>
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
