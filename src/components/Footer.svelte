<script lang="ts">
  import { _ } from "../i18n";

  async function getVersionInfo() {
    return await fetch("resources/version.json").then((response) =>
      response.json()
    );
  }

  const versionInfo = getVersionInfo();
</script>

<footer class="footer pb-6">
  <div class="content has-text-centered">
    <p>
      {$_("footerSection.start")}
      <a href="https://svelte.dev/">Svelte</a>,
      <a href="https://bulma.io/">Bulma</a>{$_("footerSection.middle")}
      {$_("footerSection.end")}
    </p>
    {#await versionInfo}
      <p>Loading version info...</p>
    {:then version}
      <div
        class="field is-grouped is-grouped-multiline has-addons has-addons-centered"
      >
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-warning">Build</span>
            <span class="tag version is-light"
              ><a
                href="https://github.com/MikulasZelinka/book-for-ukraine/tree/{version.commit}"
                >{version.commit.substring(0, 6)}</a
              ></span
            >
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-info">Updated</span>
            <span class="tag is-light version">{version.datetime}</span>
          </div>
        </div>
      </div>
    {:catch error}
      <!-- <span style="color: red" -->
      <!-- >Version not found, local development version</span -->
      <!-- > -->
    {/await}
  </div>
</footer>

<style>
  .version {
    font-family: monospace;
  }
</style>
