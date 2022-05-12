<script>
  import Settings from "./Settings.svelte";
</script>

<!-- TODO: better layout -->
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://ukrajinskaknizka.cz">
      <img src="resources/images/holubice.png" alt="Logo holubice" />
      <h2 class="subtitle">Povídání modro-žluté krajiny</h2>
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
      <div class="navbar-item has-dropdown is-hoverable">
        <Settings />

        <a class="navbar-item" href="https://www.facebook.com/ukrajinskaknizka">
          <i class="fa-brands fa-facebook" />
        </a>

        <a
          class="navbar-item"
          href="https://www.instagram.com/ukrajinskaknizka/"
        >
          <i class="fa-brands fa-instagram" />
        </a>

        <!-- TODO: move the github repo to this URL -->
        <a
          class="navbar-item"
          href="https://www.github.com/MikulasZelinka/ukrajinskaknizka/"
        >
          <i class="fa-brands fa-github" />
        </a>
      </div>
    </div>
  </div>
</nav>
