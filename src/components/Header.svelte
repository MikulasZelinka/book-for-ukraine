<script>
  import Settings from "./Settings.svelte";
</script>

<!-- TODO: better layout -->
<nav
  class="navbar is-fixed-top"
  role="navigation"
  aria-label="main navigation"
  id="navbar"
>
  <div class="navbar-brand">
    <a class="navbar-item" href="https://ukrajinskaknizka.cz">
      <img src="resources/images/holubice.png" alt="Logo holubice" />
      <h1 class="title is-5 pl-5">Povídání modro-žluté krajiny</h1>
      <!-- <h2 class="subtitle">Розповідь синьо-жовтого краю</h2> -->
    </a>

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start" />

    <div class="navbar-end">
      <a class="navbar-item">O knížce</a>
      <a class="navbar-item">Tvůrci</a>
      <a class="navbar-item">Kontakt</a>

      <a class="navbar-item" href="https://www.facebook.com/ukrajinskaknizka">
        <i class="fa-brands fa-facebook" />
        <span class="is-hidden-desktop">Facebook: ukrajinskaknizka</span>
      </a>

      <a class="navbar-item" href="https://www.instagram.com/ukrajinskaknizka/">
        <i class="fa-brands fa-instagram" />
        <span class="is-hidden-desktop">Instagram: ukrajinskaknizka</span>
      </a>

      <!-- TODO: move the github repo to this URL -->
      <a
        class="navbar-item"
        href="https://github.com/MikulasZelinka/book-for-ukraine"
      >
        <i class="fa-brands fa-github" />
        <span class="is-hidden-desktop">GitHub: book-for-ukraine</span>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <Settings />
      </div>
    </div>
  </div>
</nav>
